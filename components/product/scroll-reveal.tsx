"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";

export function ScrollReveal({
  children,
  className = "",
}: Readonly<{ children: ReactNode; className?: string }>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      container.classList.add("is-visible");
      return;
    }

    const bounds = container.getBoundingClientRect();

    if (bounds.top < window.innerHeight * 0.92 && bounds.bottom > 0) {
      container.classList.add("is-visible");
      return;
    }

    container.classList.add("is-reveal-ready");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        container.classList.add("is-visible");
        observer.disconnect();
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`scroll-reveal ${className}`.trim()}
      ref={containerRef}
    >
      {children}
    </div>
  );
}
