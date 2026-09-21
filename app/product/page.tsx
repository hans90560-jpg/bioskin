import type { Metadata } from "next";
import Image from "next/image";
import { FormulaShowcase } from "@/components/product/formula-showcase";
import { IndustryCards } from "@/components/product/industry-cards";
import { ScrollReveal } from "@/components/product/scroll-reveal";
import { TechnicalPrinciple } from "@/components/product/technical-principle";
import { SiteHeader } from "@/components/site-header";
import {
  evaluationSteps,
  productFeatures,
  projectSteps,
} from "@/content/product-content";

export const metadata: Metadata = {
  title: "제품소개 | SARAH SUNCARE",
  description:
    "SARAH SUNCARE 제품의 산업 적용 가능성, 기술 원리, E-SKIN 평가 접근법과 제형 구성을 소개합니다.",
};

export default function ProductPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <SiteHeader />

      <main className="product-page" id="main-content">
        <section
          className="product-intro product-section"
          id="product-overview"
          aria-labelledby="product-title"
        >
          <div className="product-section__inner">
            <header className="product-intro__heading">
              <p className="product-section__number">01</p>
              <h1 id="product-title">SARAH SUNCARE</h1>
              <p className="product-intro__subtitle">
                자외선·생활방사선 대응 선케어 제품의 산업 적용 가능성 분석
              </p>
            </header>

            <div className="product-intro__layout">
              <div className="product-intro__media">
                <span className="product-intro__orbit" aria-hidden="true" />
                <Image
                  className="product-intro__image"
                  src="/images/sarah-suncare.png"
                  alt="하늘색과 흰색 패키지의 SARAH SUNCARE 선케어 제품"
                  width={1024}
                  height={1536}
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 52vw, 82vw"
                  priority
                />
              </div>

              <aside className="product-features" aria-label="제품 표기 및 프로젝트 검토 항목">
                {productFeatures.map((group) => (
                  <div className="product-features__group" key={group.label}>
                    <p className="product-features__label">{group.label}</p>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>
                          <span className="product-features__icon" aria-hidden="true">
                            <svg viewBox="0 0 24 24" focusable="false">
                              <circle cx="12" cy="12" r="8" />
                              <path d="m8.5 12 2.2 2.2 4.8-5" />
                            </svg>
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <p className="product-features__note">
                  “생활방사선 대응 및 산업환경 활용 가능성은 본 프로젝트의 검토 대상입니다.”
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section
          className="industry-section product-section"
          id="industrial-environments"
          aria-labelledby="industry-title"
        >
          <div className="product-section__inner">
            <header className="product-section__heading">
              <p className="product-section__number">02</p>
              <p className="product-section__eyebrow">
                INDUSTRIAL ENVIRONMENTS WE STUDIED
              </p>
              <h2 id="industry-title">우리가 조사한 산업현장</h2>
              <p className="product-section__lead">
                <span>산업마다 노출원도, 취약 상황도 다릅니다.</span>
                <span>자외선·방사선 노출 특성과 기존 보호체계를 기준으로</span>
                <span>4개 산업환경을 비교했습니다.</span>
              </p>
            </header>

            <IndustryCards />

            <div className="industry-section__conclusion">
              <p>
                <span>“산업마다 노출원은 다르지만</span>
                <span>장기간 반복 노출과 보호구 미피복 부위의 관리는</span>
                <span>공통적인 과제로 나타났습니다.”</span>
              </p>
              <strong>
                서로 다른 산업환경에는 서로 다른 피부 보호 전략이 필요합니다.
              </strong>
            </div>
          </div>
        </section>

        <section
          className="approach-section product-section"
          id="project-approach"
          aria-labelledby="approach-title"
        >
          <div className="product-section__inner product-section__inner--narrow">
            <header className="product-section__heading">
              <p className="product-section__number">03</p>
              <h2 id="approach-title">
                기존 제품을 산업현장의 관점에서 다시 바라봅니다.
              </h2>
            </header>

            <ScrollReveal>
              <ol className="approach-flow">
                {projectSteps.map((step, index) => (
                  <li data-reveal-item key={step}>
                    <span className="approach-flow__number" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p>
                      <span aria-hidden="true">{["①", "②", "③", "④"][index]}</span>{" "}
                      {step}
                    </p>
                    {index < projectSteps.length - 1 && (
                      <span className="approach-flow__connector" aria-hidden="true">
                        <svg viewBox="0 0 24 24" focusable="false">
                          <path d="M12 4v14M7 14l5 5 5-5" />
                        </svg>
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </section>

        <section
          className="principle-section product-section"
          id="technical-principle"
          aria-labelledby="principle-title"
        >
          <div className="product-section__inner">
            <header className="product-section__heading">
              <p className="product-section__number">04</p>
              <p className="product-section__eyebrow">TECHNICAL PRINCIPLE</p>
              <h2 id="principle-title">HIPE 기반 카멜레온 Active 보호 구조</h2>
            </header>

            <ScrollReveal>
              <div data-reveal-item>
                <TechnicalPrinciple />
              </div>
            </ScrollReveal>
            <p className="principle-section__source">제공 자료 기반 개념도</p>
          </div>
        </section>

        <section
          className="evaluation-section product-section"
          id="e-skin-evaluation"
          aria-labelledby="evaluation-title"
        >
          <div className="product-section__inner">
            <header className="product-section__heading">
              <p className="product-section__number">05</p>
              <h2 id="evaluation-title">
                E-SKIN, 전층배양피부를 통한 제품 평가
              </h2>
              <p className="product-section__lead">
                전층배양피부로 제품을 평가합니다.
              </p>
            </header>

            <div className="evaluation-panel">
              <figure className="evaluation-panel__figure">
                <Image
                  className="evaluation-panel__image"
                  src="/images/e-skin.png"
                  alt="세포를 배양해 전층배양피부를 구성하는 과정을 나타낸 E-SKIN 참고 도식"
                  width={1431}
                  height={266}
                  sizes="(min-width: 1024px) 74vw, 90vw"
                />
                <figcaption>제공된 E-SKIN 도식 원본</figcaption>
              </figure>

              <ol className="evaluation-flow" aria-label="E-SKIN 평가 접근 흐름">
                {evaluationSteps.map((step, index) => (
                  <li key={step}>
                    <span>{step}</span>
                    {index < evaluationSteps.length - 1 && (
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M5 12h13M14 7l5 5-5 5" />
                      </svg>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section
          className="formula-section product-section"
          id="inside-the-formula"
          aria-labelledby="formula-title"
        >
          <div className="product-section__inner">
            <header className="product-section__heading">
              <p className="product-section__number">06</p>
              <h2 id="formula-title">INSIDE THE FORMULA</h2>
              <p className="product-section__lead">
                전성분을 기능별로 읽어보면, SARAH SUNCARE의 제형 설계가 보입니다.
              </p>
            </header>

            <ScrollReveal className="formula-reveal">
              <FormulaShowcase />
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
