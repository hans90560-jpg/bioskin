import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const outputDirectory = join(tmpdir(), "bioskin-countup-check");
const profileDirectory = join(outputDirectory, "profile");
const port = 9334;
const targetUrl = "http://127.0.0.1:3000/project";

await mkdir(outputDirectory, { recursive: true });

const chrome = spawn(
  chromePath,
  [
    "--headless=new",
    "--no-sandbox",
    "--disable-gpu",
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

const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const readStateExpression = `(() => ({
  viewport: [innerWidth, innerHeight],
  horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
  values: Array.from(document.querySelectorAll('[data-countup-number]')).map((node) => node.textContent),
  states: Array.from(document.querySelectorAll('[data-countup-target]')).map((node) => node.getAttribute('data-countup-state')),
  ratios: Array.from(document.querySelectorAll('[data-countup-target]')).map((node) => {
    const rect = node.getBoundingClientRect();
    const visible = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0));
    return Number((visible / rect.height).toFixed(2));
  }),
  unitX: Array.from(document.querySelectorAll('.project-stat__visual > span:last-child')).map((node) => Number(node.getBoundingClientRect().x.toFixed(2))),
  accessibleFinalValues: Array.from(document.querySelectorAll('.project-stats .sr-only')).map((node) => node.textContent?.trim()),
}))()`;

async function capture(name) {
  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    fromSurface: true,
    captureBeyondViewport: false,
  });
  const outputPath = join(outputDirectory, `${name}.png`);
  await writeFile(outputPath, Buffer.from(screenshot.data, "base64"));
  return outputPath;
}

async function verifyViewport(name, width, height) {
  await send("Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "no-preference" }],
  });
  await send("Page.navigate", { url: targetUrl });
  await wait(850);
  await evaluate(`document.fonts?.ready`);

  const initial = await evaluate(readStateExpression);
  await evaluate(`(() => {
    document.documentElement.style.scrollBehavior = 'auto';
    const item = document.querySelector('[data-countup-target]');
    const rect = item.getBoundingClientRect();
    const top = rect.top + scrollY - innerHeight + rect.height * 0.2;
    scrollTo({ top, behavior: 'instant' });
  })()`);
  await wait(350);
  const belowThreshold = await evaluate(readStateExpression);

  await evaluate(`(() => {
    const item = document.querySelector('[data-countup-target]');
    const rect = item.getBoundingClientRect();
    const top = rect.top + scrollY - innerHeight + rect.height * 0.55;
    scrollTo({ top, behavior: 'instant' });
  })()`);
  await wait(450);
  const during = await evaluate(readStateExpression);

  await evaluate(`document.querySelector('[data-countup-target]:last-child')?.scrollIntoView({ block: 'center', behavior: 'instant' })`);
  await wait(1900);
  const final = await evaluate(readStateExpression);
  const screenshot = await capture(`${name}-final`);

  await evaluate(`scrollTo({ top: 0, behavior: 'instant' })`);
  await wait(200);
  await evaluate(`document.querySelector('[data-countup-target]:last-child')?.scrollIntoView({ block: 'center', behavior: 'instant' })`);
  await wait(250);
  const revisit = await evaluate(readStateExpression);

  return { name, initial, belowThreshold, during, final, revisit, screenshot };
}

async function verifyReducedMotion() {
  await send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await send("Page.navigate", { url: targetUrl });
  await wait(700);
  return evaluate(readStateExpression);
}

await send("Page.enable");
await send("Runtime.enable");

const results = [
  await verifyViewport("desktop-1440x900", 1440, 900),
  await verifyViewport("mobile-390x844", 390, 844),
];
const reducedMotion = await verifyReducedMotion();

console.log(JSON.stringify({ results, reducedMotion }, null, 2));
socket.close();
chrome.kill();
