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
        <a
          className="site-header__contact"
          href="https://www.instagram.com/sarasun5502/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Us: 인스타그램 @sarasun5502 (새 창)"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}
