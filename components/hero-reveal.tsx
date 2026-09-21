"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function HeroReveal({ children }: Readonly<{ children: ReactNode }>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        container.classList.add("is-visible");
        observer.disconnect();
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -8% 0px",
      },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hero-reveal" ref={containerRef}>
      {children}
    </div>
  );
}
