"use client";

import { useLayoutEffect, useRef } from "react";

type ProjectStat = Readonly<{
  value: number;
  unit: string;
  label: string;
}>;

const COUNT_DURATION_MS = 1800;
const VISIBILITY_THRESHOLD = 0.3;

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export function ProjectStats({ stats }: Readonly<{ stats: readonly ProjectStat[] }>) {
  const listRef = useRef<HTMLDListElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;

    if (!list) {
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

    const items = Array.from(
      list.querySelectorAll<HTMLElement>("[data-countup-target]"),
    );
    const animationFrames = new Map<HTMLElement, number>();
    const completedItems = new WeakSet<HTMLElement>();

    for (const item of items) {
      const number = item.querySelector<HTMLElement>("[data-countup-number]");

      if (number) {
        number.textContent = "0";
        item.dataset.countupState = "waiting";
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const item = entry.target as HTMLElement;

          if (
            completedItems.has(item) ||
            !entry.isIntersecting ||
            entry.intersectionRatio < VISIBILITY_THRESHOLD
          ) {
            continue;
          }

          const number = item.querySelector<HTMLElement>("[data-countup-number]");
          const target = Number(item.dataset.countupTarget);

          if (!number || !Number.isFinite(target)) {
            observer.unobserve(item);
            continue;
          }

          completedItems.add(item);
          observer.unobserve(item);
          item.dataset.countupState = "running";
          const startedAt = performance.now();

          const update = (now: number) => {
            const progress = Math.min((now - startedAt) / COUNT_DURATION_MS, 1);
            const value = Math.floor(target * easeOutCubic(progress));
            number.textContent = String(progress === 1 ? target : value);

            if (progress < 1) {
              animationFrames.set(item, requestAnimationFrame(update));
              return;
            }

            animationFrames.delete(item);
            item.dataset.countupState = "complete";
          };

          animationFrames.set(item, requestAnimationFrame(update));
        }
      },
      { threshold: VISIBILITY_THRESHOLD },
    );

    for (const item of items) {
      observer.observe(item);
    }

    return () => {
      observer.disconnect();
      for (const frame of animationFrames.values()) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <dl className="project-stats" aria-label="프로젝트 주요 수치" ref={listRef}>
      {stats.map((stat) => (
        <div
          data-countup-state="idle"
          data-countup-target={stat.value}
          data-reveal-item
          key={stat.label}
        >
          <dd>
            <span className="project-stat__visual" aria-hidden="true">
              <span
                className="project-stat__value"
                data-countup-number
                data-digits={String(stat.value).length}
              >
                {stat.value}
              </span>
              <span>{stat.unit}</span>
            </span>
            <span className="sr-only">
              {stat.value}
              {stat.unit}
            </span>
          </dd>
          <dt>{stat.label}</dt>
        </div>
      ))}
    </dl>
  );
}
