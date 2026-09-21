import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MarketGrowthStat } from "@/components/market/market-growth-stat";
import { ScrollReveal } from "@/components/product/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { siteAssetPath } from "@/lib/site-asset-path";
import {
  additionalSupplyCases,
  furtherDirections,
  industryUsers,
  marketQuestions,
  marketReferences,
  supplyCases,
  validationGaps,
} from "@/content/market-content";

export const metadata: Metadata = {
  title: "시장분석 | SARAH SUNCARE",
  description:
    "선케어 기술·생산 기반과 산업현장의 사용자, 구매 주체, 검증 과제를 함께 살펴본 SARAH SUNCARE 시장분석입니다.",
};

type SectionHeadingProps = Readonly<{
  number: string;
  eyebrow: string;
  title: string;
  lead?: string;
  id: string;
}>;

function SectionHeading({ number, eyebrow, title, lead, id }: SectionHeadingProps) {
  return (
    <header className="market-heading">
      <p className="market-heading__number">{number}</p>
      <p className="market-heading__eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {lead && <p className="market-heading__lead">{lead}</p>}
    </header>
  );
}

function ExternalLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <a className="market-text-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function MarketAnalysisPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">본문으로 바로가기</a>
      <SiteHeader />

      <main className="market-page" id="main-content">
        <section className="market-section market-intro" aria-labelledby="market-intro-title">
          <div className="market-inner">
            <ScrollReveal>
              <header className="market-intro__heading" data-reveal-item>
                <p className="market-heading__number">01</p>
                <p className="market-heading__eyebrow">MARKET ANALYSIS</p>
                <h1 id="market-intro-title">
                  일상의 선케어를 넘어,<br />산업현장의 사용 조건을 바라봅니다.
                </h1>
                <p>
                  우리는 제품을 만들 수 있는 기술·생산 기반과 실제 현장에서 요구되는 사용
                  조건을 함께 살펴보았습니다. 누가 사용하고, 누가 구매하며, 어떤 검증이
                  필요한지를 중심으로 적용 가능성을 검토했습니다.
                </p>
              </header>

              <div className="market-questions" data-reveal-item>
                {marketQuestions.map((item) => (
                  <article key={item.label}>
                    <span>{item.label}</span>
                    <p>“{item.question}”</p>
                  </article>
                ))}
              </div>

              <div className="market-scope" data-reveal-item>
                <div className="market-scope__nodes" aria-label="시장분석의 세 가지 검토 영역">
                  <div className="market-scope__node">선케어</div>
                  <div className="market-scope__node">방사선 보호 기술</div>
                  <div className="market-scope__node">산업용 보호구 및 현장 사용 조건</div>
                  <div className="market-scope__center">
                    <span>연구 관점</span>
                    <strong>피부 도포형 보완 보호제품의 적용 가능성 검토</strong>
                  </div>
                </div>
                <p className="market-scope__caption">
                  세 영역의 관계를 살펴보는 개념도이며, 원의 크기나 면적은 시장 규모를
                  의미하지 않습니다.
                </p>
              </div>

              <aside className="market-notice" data-reveal-item>
                <strong>분석 범위 안내</strong>
                <p>
                  본 페이지는 연구팀이 검토한 목표제품과 시장 방향을 설명합니다. 특정
                  방사선에 대한 보호 성능이나 산업현장 적용 적합성이 입증되었다는 의미는
                  아닙니다. 기존 보호구를 대체하는 제품으로 제안하지 않습니다.
                </p>
              </aside>
            </ScrollReveal>
          </div>
        </section>

        <section className="market-section market-signal" aria-labelledby="market-signal-title">
          <div className="market-inner">
            <ScrollReveal>
              <SectionHeading number="02" eyebrow="MARKET SIGNAL" title="선케어를 선택하는 기준이 달라지고 있습니다" id="market-signal-title" />
              <div className="market-signal__layout" data-reveal-item>
                <MarketGrowthStat />
                <div className="market-signal__analysis">
                  <span className="market-analysis-label">우리 팀의 해석</span>
                  <p>
                    이러한 소비 변화는 산업현장의 선케어 사용 조건을 살펴보는 출발점입니다.
                    장시간 작업 중의 재도포 편의성, 땀과 마찰, 다른 보호구와의 사용
                    적합성을 별도로 검토하고자 합니다.
                  </p>
                  <p className="market-caution">
                    특정 유통사의 판매 동향이며, 전체 시장 성장률이나 산업 종사자의 구매
                    수요를 직접 나타내는 수치는 아닙니다.
                  </p>
                </div>
              </div>
              <div className="market-signal__source" data-reveal-item>
                <div><span>기사 발표</span><time dateTime="2026-04-24">2026.04.24</time></div>
                <ExternalLink href={marketReferences[0].url}>공식 기사 보기</ExternalLink>
              </div>
              <details className="market-evidence" data-reveal-item>
                <summary>조사 자료 보기</summary>
                <div className="market-evidence__body">
                  <figure>
                    <Image src={siteAssetPath("/images/market/oliveyoung-article-source.png")} alt="CJ올리브영 서바이벌 뷰티 보도자료 제목과 발표일이 보이는 제공 캡처" width={927} height={515} sizes="(min-width: 900px) 760px, 92vw" />
                    <figcaption>CJ올리브영 공식 보도자료 제공 캡처. 핵심 수치의 기간과 비교 기준은 위 본문에 웹 텍스트로 제공했습니다.</figcaption>
                  </figure>
                </div>
              </details>
            </ScrollReveal>
          </div>
        </section>

        <section className="market-section market-supply" aria-labelledby="market-supply-title">
          <div className="market-inner">
            <ScrollReveal>
              <SectionHeading number="03" eyebrow="SUPPLY LANDSCAPE" title="어떤 제품과 제조 기반이 존재할까요?" lead="서로 다른 역할을 가진 제품·개발·생산 사례를 조사했습니다. 아래 기업은 협력사나 후원사가 아닌 조사 사례입니다." id="market-supply-title" />
              <div className="market-supply__list">
                {supplyCases.map((item, index) => (
                  <article className="market-supply-case" data-reveal-item key={item.id}>
                    <figure className={`market-supply-case__figure market-supply-case__figure--${item.id.toLowerCase()}`}>
                      <Image src={siteAssetPath(item.image)} alt={item.alt} width={item.width} height={item.height} sizes="(min-width: 1000px) 46vw, 92vw" />
                      <figcaption>{item.id === "C" ? "제공된 COSMAX·KEMINOVA 전시 부스 사진. 행사명·장소·촬영일 미확인." : "제공 자료에서 확인한 조사 사례 이미지."}</figcaption>
                    </figure>
                    <div className="market-supply-case__copy">
                      <p className="market-supply-case__index">{item.id}</p>
                      <p className="market-supply-case__category">{item.category}</p>
                      <h3>{item.name}</h3>
                      <p>{item.summary}</p>
                      <aside>{item.note}</aside>
                      <ExternalLink href={item.sourceUrl}>{item.sourceLabel}</ExternalLink>
                      {index === 2 && (
                        <details className="market-inline-evidence">
                          <summary>제공된 실적 기사 캡처 확인</summary>
                          <figure>
                            <Image src={siteAssetPath("/images/market/cosmax-results-article-source.png")} alt="코스맥스 실적 관련 제공 기사 캡처" width={547} height={302} sizes="(min-width: 900px) 480px, 88vw" />
                            <figcaption>제공된 기사 캡처. 회사 전체 실적을 선케어 부문 실적으로 사용하지 않았습니다.</figcaption>
                          </figure>
                        </details>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              <details className="market-additional" data-reveal-item>
                <summary><span>추가 공급기술 조사</span><small>MSLINEENG · Melanoir · BASF·아모레퍼시픽</small></summary>
                <div className="market-additional__grid">
                  {additionalSupplyCases.map((item) => (
                    <article key={item.name}>
                      <h3>{item.name}</h3>
                      <dl>
                        <div><dt>조사 기술 분야</dt><dd>{item.field}</dd></div>
                        <div><dt>검토할 지점</dt><dd>{item.point}</dd></div>
                      </dl>
                      {item.sourceUrl ? <ExternalLink href={item.sourceUrl}>{item.sourceLabel}</ExternalLink> : <p className="market-source-pending">출처: {item.sourceLabel} · 공식 원출처 추가 확인 필요</p>}
                    </article>
                  ))}
                </div>
              </details>
              <p className="market-conclusion" data-reveal-item>
                관련 기술과 생산 사례를 연결해 적용 가능성을 검토할 수 있습니다. 다만 제조
                기반의 존재만으로 복합 보호 성능, 안전성, 현장 적합성까지 확인되는 것은
                아닙니다.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="market-section market-users" aria-labelledby="market-users-title">
          <div className="market-inner">
            <ScrollReveal>
              <SectionHeading number="04" eyebrow="USERS & BUYERS" title="사용하는 사람과 구매하는 사람은 다릅니다" lead="예상 구매 주체와 검토할 요구사항은 연구팀 분석이며, 실제 계약이나 구매 의사가 확인됐다는 의미가 아닙니다." id="market-users-title" />
              <div className="market-users__grid">
                {industryUsers.map((item, index) => (
                  <article className="market-user" data-reveal-item key={item.name}>
                    <header><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.name}</h3></header>
                    <dl>
                      <div><dt>사용자</dt><dd>{item.user}</dd></div>
                      <div><dt>예상 구매 주체</dt><dd>{item.buyer}</dd></div>
                    </dl>
                    <div className="market-user__conditions">
                      <p>검토할 사용 조건</p>
                      <ul>{item.conditions.map((condition) => <li key={condition}>{condition}</li>)}</ul>
                    </div>
                    <details><summary>추가 검증 사항</summary><p>{item.validation}</p></details>
                  </article>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="market-section market-gaps" aria-labelledby="market-gaps-title">
          <div className="market-inner">
            <ScrollReveal>
              <SectionHeading number="05" eyebrow="GAPS TO VALIDATE" title="현장에서 추가로 확인해야 할 조건" id="market-gaps-title" />
              <div className="market-gap-list">
                <div className="market-gap-list__legend" aria-hidden="true"><span>현재 참고할 수 있는 제품·보호 방식</span><span>추가로 검토할 과제</span></div>
                {validationGaps.map((item) => (
                  <article data-reveal-item key={item.name}>
                    <h3>{item.name}</h3>
                    <div><span className="market-gap-list__mobile-label">현재 참고 방식</span><p>{item.current}</p></div>
                    <span className="market-gap-list__arrow" aria-hidden="true">→</span>
                    <div><span className="market-gap-list__mobile-label">추가 검토 과제</span><p>{item.gap}</p></div>
                  </article>
                ))}
              </div>
              <aside className="market-research-note" data-reveal-item>
                <span>연구팀 분석</span>
                <p>제공 자료를 바탕으로 도출한 연구팀의 검토 과제이며, 전체 시장의 제품·수요를 전수조사한 결과는 아닙니다.</p>
              </aside>
            </ScrollReveal>
          </div>
        </section>

        <section className="market-section market-direction" aria-labelledby="market-direction-title">
          <div className="market-inner">
            <ScrollReveal>
              <SectionHeading number="06" eyebrow="OUR DIRECTION" title="옥외작업 환경을 우선 검토하고, 분야별 검증을 통해 적용 가능성을 넓혀갑니다." id="market-direction-title" />
              <div className="market-direction__label" data-reveal-item>연구팀 제안</div>
              <div className="market-direction__layout">
                <article className="market-direction__priority" data-reveal-item>
                  <span>우선 검토</span><h3>옥외작업</h3>
                  <p>기존 선케어 사용과 연결되는 분야로서, 땀·물·마찰·장시간 작업 중 사용성 및 재도포 편의성을 검토합니다.</p>
                  <small>시장 진입이나 판매 가능성이 확인됐다는 의미가 아닙니다.</small>
                </article>
                <div className="market-direction__further" data-reveal-item>
                  <h3>추가 검증이 필요한 분야</h3>
                  <div>{furtherDirections.map((item) => <article key={item.name}><h4>{item.name}</h4><p>{item.description}</p></article>)}</div>
                </div>
              </div>
              <blockquote className="market-direction__closing" data-reveal-item>
                “우리의 목표는 기존 보호구를 대신하는 것이 아니라, 현장의 사용 조건과 검증 근거를 바탕으로 피부 보호의 보완 가능성을 탐색하는 것입니다.”
              </blockquote>
              <nav className="market-direction__links" aria-label="관련 페이지" data-reveal-item>
                <Link href="/product">제품소개 보기 <span aria-hidden="true">→</span></Link>
                <Link href="/project">프로젝트 소개 보기 <span aria-hidden="true">→</span></Link>
              </nav>
              <section className="market-references" aria-labelledby="market-references-title" data-reveal-item>
                <h3 id="market-references-title">참고자료</h3>
                <ol>
                  {marketReferences.map((source) => (
                    <li key={source.url}>
                      <a href={source.url} target="_blank" rel="noreferrer">
                        <span>{source.organization}</span><strong>{source.title}</strong>
                        {source.date && <time>{source.date}</time>}<span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ol>
                <p>그 밖의 기사 이미지는 사용자 제공 캡처로 확인했으며, 원문 URL이 확인되지 않은 자료에는 임의 링크를 만들지 않았습니다.</p>
              </section>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
