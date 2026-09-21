"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__project-slot">
          <Link
            className="site-header__project"
            href="/"
            onNavigate={(event) => {
              if (pathname !== "/") {
                return;
              }

              event.preventDefault();
              const prefersReducedMotion = window.matchMedia(
                "(prefers-reduced-motion: reduce)",
              ).matches;

              window.scrollTo({
                top: 0,
                left: 0,
                behavior: prefersReducedMotion ? "auto" : "smooth",
              });
            }}
          >
            2026년 현장형 기술 문제 해결 프로젝트
          </Link>
        </div>
        <button
          className="site-header__contact"
          type="button"
          aria-disabled="true"
          title="현재 준비 중입니다"
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}
