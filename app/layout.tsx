import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SARAH SUNCARE | 2026년 현장형 기술 문제 해결 프로젝트",
  description:
    "SARAH SUNCARE 제품과 2026년 현장형 기술 문제 해결 프로젝트를 소개합니다.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
