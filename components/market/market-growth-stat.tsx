"use client";

import { useLayoutEffect, useRef } from "react";

const TARGET = 281;
const DURATION_MS = 1800;

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function MarketGrowthStat() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const number = root?.querySelector<HTMLElement>("[data-market-count]");

    if (!root || !number) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      reducedMotion ||
      !("IntersectionObserver" in window) ||
      !("requestAnimationFrame" in window)
    ) {
      return;
    }

    number.textContent = "0";
    root.dataset.countState = "waiting";
    let frame = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
          return;
        }

        observer.disconnect();
        root.dataset.countState = "running";
        const startedAt = performance.now();

        const update = (now: number) => {
          const progress = Math.min((now - startedAt) / DURATION_MS, 1);
          number.textContent = String(
            progress === 1 ? TARGET : Math.floor(TARGET * easeOutCubic(progress)),
          );

          if (progress < 1) {
            frame = requestAnimationFrame(update);
            return;
          }

          root.dataset.countState = "complete";
        };

        frame = requestAnimationFrame(update);
      },
      { threshold: [0.3] },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="market-signal__stat" ref={rootRef} data-count-state="idle">
      <p className="market-signal__number" aria-hidden="true">
        <span>+</span>
        <span className="market-signal__digits" data-market-count>
          {TARGET}
        </span>
        <span>%</span>
      </p>
      <p className="sr-only">281%, 올리브영 선케어 카테고리 매출 증가율</p>
      <p className="market-signal__label">
        올리브영 선케어 카테고리 매출 증가율
      </p>
      <p className="market-signal__basis">
        <strong>2025년 7–9월</strong>
        <span>전년 동기 대비</span>
      </p>
    </div>
  );
}
