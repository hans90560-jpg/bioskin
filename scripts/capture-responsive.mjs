import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const captureDirectory = join(tmpdir(), "bioskin-project-cdp");
const profileDirectory = join(captureDirectory, "profile");
const port = 9333;
const targetUrl = "http://127.0.0.1:3000/project";

await mkdir(captureDirectory, { recursive: true });

const chrome = spawn(
  chromePath,
  [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
    "--disable-software-rasterizer",
    "--disable-gpu-compositing",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${profileDirectory}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);

async function waitForDebugger() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (response.ok) return;
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error("Chrome DevTools endpoint did not become ready.");
}

await waitForDebugger();
const targetResponse = await fetch(
  `http://127.0.0.1:${port}/json/new?${encodeURIComponent(targetUrl)}`,
  { method: "PUT" },
);
const target = await targetResponse.json();
const socket = new WebSocket(target.webSocketDebuggerUrl);

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

let messageId = 0;
const pending = new Map();

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

function send(method, params = {}) {
  messageId += 1;
  const id = messageId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function evaluate(expression) {
  const result = await send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  return result.result.value;
}

async function capture(name, width, height, scrollSelector) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });
  await send("Page.navigate", { url: targetUrl });
  await new Promise((resolve) => setTimeout(resolve, 900));

  await evaluate(`(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    const images = Array.from(document.querySelectorAll('.project-detail img'));
    images.forEach((image) => { image.loading = 'eager'; });
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
    await new Promise((resolve) => setTimeout(resolve, 450));
    await Promise.all(images.map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise((resolve) => {
        image.addEventListener('load', resolve, { once: true });
        image.addEventListener('error', resolve, { once: true });
      });
    }));
    window.scrollTo({ top: 0, behavior: 'instant' });
  })()`);
  await new Promise((resolve) => setTimeout(resolve, 250));

  if (scrollSelector) {
    await evaluate(
      `document.querySelector(${JSON.stringify(scrollSelector)})?.scrollIntoView({block: "start", behavior: "instant"})`,
    );
    await new Promise((resolve) => setTimeout(resolve, 450));
  }

  const metrics = await evaluate(`(() => {
    const images = Array.from(document.querySelectorAll('.project-detail img'));
    const distortedImages = images.filter((image) => {
      if (!image.naturalWidth || !image.naturalHeight) return false;
      const rect = image.getBoundingClientRect();
      return Math.abs(rect.width / rect.height - image.naturalWidth / image.naturalHeight) > 0.025;
    }).map((image) => image.getAttribute('alt'));
    return {
      viewport: [innerWidth, innerHeight],
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      h1: document.querySelector('h1')?.textContent?.trim(),
      sectionCount: document.querySelectorAll('.project-detail__section').length,
      patentTotal: [127, 64, 60, 20, 17].reduce((sum, value) => sum + value, 0),
      sampleTotal: [2, 2, 3].reduce((sum, value) => sum + value, 0),
      imagesLoaded: images.every((image) => image.complete && image.naturalWidth > 0),
      distortedImages,
      headerHeight: Math.round(document.querySelector('.site-header')?.getBoundingClientRect().height || 0),
      firstHeadingTop: Math.round((document.querySelector('.project-overview__heading')?.getBoundingClientRect().top || 0)),
      selectedTitle: ${JSON.stringify(scrollSelector)}
        ? document.querySelector(${JSON.stringify(scrollSelector)})?.querySelector('h2')?.textContent?.trim()
        : null,
      selectedTop: ${JSON.stringify(scrollSelector)}
        ? Math.round(document.querySelector(${JSON.stringify(scrollSelector)})?.getBoundingClientRect().top || 0)
        : null,
    };
  })()`);

  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });
  const outputPath = join(captureDirectory, `${name}.png`);
  await writeFile(outputPath, Buffer.from(screenshot.data, "base64"));
  return { name, outputPath, metrics };
}

await send("Page.enable");
await send("Runtime.enable");

const results = [];
results.push(await capture("desktop-1440x900", 1440, 900));
results.push(await capture("mobile-390x844", 390, 844));
results.push(await capture("mobile-patents", 390, 844, ".project-patents"));
results.push(await capture("mobile-experiments", 390, 844, ".project-experiments"));
results.push(await capture("mobile-collaboration", 390, 844, ".project-collaboration"));
results.push(await capture("mobile-people", 390, 844, ".project-people"));

console.log(JSON.stringify(results, null, 2));
socket.close();
chrome.kill();
