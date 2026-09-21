import Link from "next/link";
import { SiteHeader } from "./site-header";

export function PlaceholderPage({ title }: Readonly<{ title: string }>) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <SiteHeader />
      <main className="placeholder" id="main-content">
        <div className="placeholder__ambient" aria-hidden="true" />
        <div className="placeholder__inner">
          <p className="placeholder__eyebrow">SARAH SUNCARE</p>
          <h1>{title}</h1>
          <p className="placeholder__status">내용 준비 중</p>
          <Link className="home-link" href="/">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M19 12H6M11 6l-6 6 6 6" />
            </svg>
            홈으로 돌아가기
          </Link>
        </div>
      </main>
    </>
  );
}
