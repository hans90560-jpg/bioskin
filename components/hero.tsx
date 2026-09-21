import Image from "next/image";
import { siteAssetPath } from "@/lib/site-asset-path";
import { HeroReveal } from "./hero-reveal";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__ambient hero__ambient--one" aria-hidden="true" />
      <div className="hero__ambient hero__ambient--two" aria-hidden="true" />

      <div className="hero__inner">
        <HeroReveal>
          <div className="hero__copy">
            <h1 className="hero__title" id="hero-title" data-reveal>
              <span className="copy-line">보이지 않는다고,</span>
              <span className="copy-line">존재하지 않는 것은 아닙니다.</span>
            </h1>

            <p className="hero__body" data-reveal>
              <span className="copy-line">자외선, 생활환경의 방사선,</span>
              <span className="copy-line">그리고 반복되는 외부 환경 노출.</span>
              <span className="copy-line">
                피부는 우리가 인지하지 못하는 순간에도
              </span>
              <span className="copy-line">환경과 끊임없이 마주합니다.</span>
            </p>

            <p className="hero__emphasis" data-reveal>
              <span className="copy-line">그래서 우리는,</span>
              <span className="copy-line">
                단순한 자외선 차단에서 멈추지 않았습니다.
              </span>
            </p>

            <div className="hero__brand" data-reveal>
              <p className="hero__brand-name">SARAH SUNCARE</p>
              <p className="hero__brand-line">더 넓은 환경을 생각한 선케어.</p>
            </div>
          </div>
        </HeroReveal>

        <div className="hero__visual" aria-label="SARAH SUNCARE 제품 이미지 영역">
          <div className="hero__orbit hero__orbit--outer" aria-hidden="true" />
          <div className="hero__orbit hero__orbit--inner" aria-hidden="true" />
          <div className="hero__image-wrap">
            <Image
              className="hero__image"
              src={siteAssetPath("/images/sarah-suncare.png")}
              alt="SARAH SUNCARE 선케어 제품"
              width={1024}
              height={1536}
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 46vw, 72vw"
              priority
            />
          </div>
          <span className="hero__visual-label" aria-hidden="true">
            SUN PROTECTION · ENVIRONMENT CARE
          </span>
        </div>
      </div>

      <a className="scroll-cue" href="#project-navigation">
        <span>SCROLL</span>
        <span className="scroll-cue__line" aria-hidden="true" />
      </a>
    </section>
  );
}
