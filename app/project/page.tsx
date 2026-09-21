import type { Metadata } from "next";
import Image from "next/image";
import { ScrollReveal } from "@/components/product/scroll-reveal";
import { ProjectStats } from "@/components/project/project-stats";
import { SiteHeader } from "@/components/site-header";
import { siteAssetPath } from "@/lib/site-asset-path";
import {
  evaluationKeywords,
  experimentConditions,
  experimentOneActivities,
  experimentSteps,
  mentors,
  patentCountries,
  patentPerspectives,
  projectIndustries,
  projectOutputs,
  projectStats,
  sampleGroups,
  students,
  technologyGroups,
} from "@/content/project-content";

export const metadata: Metadata = {
  title: "프로젝트 소개 | SARAH SUNCARE",
  description:
    "SARAH SUNCARE 산학협력 프로젝트의 조사, 특허 분석, 피부모델 실험, 멘토링과 참여자를 소개합니다.",
};

type SectionHeadingProps = Readonly<{
  number: string;
  title: string;
  lead: string;
  id: string;
  eyebrow?: string;
}>;

function SectionHeading({ number, title, lead, id, eyebrow }: SectionHeadingProps) {
  return (
    <header className="project-detail__heading">
      <p className="project-detail__number">{number}</p>
      {eyebrow && <p className="project-detail__eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      <p className="project-detail__lead">{lead}</p>
    </header>
  );
}

export default function ProjectPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <SiteHeader />

      <main className="project-detail" id="main-content">
        <section
          className="project-detail__section project-overview"
          aria-labelledby="project-overview-title"
        >
          <div className="project-detail__inner">
            <header className="project-overview__heading">
              <p className="project-detail__number">01</p>
              <p className="project-detail__eyebrow">PROJECT OVERVIEW</p>
              <h1 id="project-overview-title">산업현장으로의 활용 가능성을 탐색하다</h1>
              <p className="project-detail__lead">
                숭실대학교 화학공학과 학생 5명과 상미뷰네뜨㈜가 함께 제품과 기술,
                산업환경과 피부모델을 연결한 산학협력 프로젝트입니다.
              </p>
            </header>

            <div className="project-overview__layout">
              <div className="project-overview__copy">
                <p>
                  본 활동은 2026년 「현장형 기술 문제 해결 프로젝트」의 일환으로
                  수행되었습니다. 기존 출시 제품인 SARAH SUNCARE를 대상으로 성분과
                  기술적 특징을 조사하고, 산업별 노출환경과 사용 조건을 분석했습니다.
                  국내외 특허 조사, 관련 논문 리뷰, 제품 체험평가와 설문조사를 병행하며
                  산업현장 활용 가능성과 후속 생체영향평가 방향을 구체화했습니다.
                </p>
                <div className="project-overview__official-name">
                  <span>공식 과제명</span>
                  <strong>
                    산업현장 적용 확대를 위한 자외선·생활방사선 동시 차단 선케어
                    제품의 생체영향평가 및 활용성 분석
                  </strong>
                </div>
              </div>

              <figure className="project-figure project-overview__figure">
                <Image
                  src={siteAssetPath("/images/project/project-team.jpg")}
                  alt="기업멘토, 지도교수와 숭실대학교 화학공학과 프로젝트팀이 함께 촬영한 단체사진"
                  width={1800}
                  height={1409}
                  sizes="(min-width: 1024px) 48vw, 92vw"
                  priority
                />
                <figcaption>
                  기업멘토, 지도교수와 함께한 숭실대학교 화학공학과 프로젝트팀.
                </figcaption>
              </figure>
            </div>

            <ScrollReveal>
              <ProjectStats stats={projectStats} />
            </ScrollReveal>
          </div>
        </section>

        <section
          className="project-detail__section project-technology"
          aria-labelledby="project-technology-title"
        >
          <div className="project-detail__inner">
            <SectionHeading
              number="02"
              eyebrow="PRODUCT & TECHNOLOGY"
              id="project-technology-title"
              title="성분을 이해하고, 평가할 질문을 세우다"
              lead="제품의 구성과 제형 특성을 분석하고, 차단 기능과 사용성을 후속 평가 항목으로 연결했습니다."
            />
            <p className="project-detail__body project-detail__body--wide">
              SARAH SUNCARE의 전성분과 기업 제공 기술자료를 바탕으로 제품의 구성과
              제형 특성을 조사했습니다. 자료에 제시된 SPF50+·PA++++ 자외선 차단 기능,
              HIPE 기반 에멀전 구조, 카멜레온 색 변화 기술을 주요 검토 대상으로
              삼았습니다.
            </p>

            <div className="project-technology__layout">
              <figure className="project-figure project-technology__figure">
                <div className="project-technology__source-label">기업 제공 자료</div>
                <Image
                  src={siteAssetPath("/images/project/technology-concept.jpg")}
                  alt="HIPE 에멀전, 스파이크 구조와 색 변화 개념을 연결해 표현한 기업 제공 기술 개념도"
                  width={1080}
                  height={440}
                  sizes="(min-width: 1024px) 64vw, 92vw"
                />
                <figcaption>
                  기업 제공 자료에 제시된 HIPE 기반 카멜레온 Active 보호크림의 기술
                  개념.
                </figcaption>
              </figure>

              <ScrollReveal className="project-technology__groups">
                <ol>
                  {technologyGroups.map((group) => (
                    <li data-reveal-item key={group.title}>
                      <span>{group.number}</span>
                      <div>
                        <h3>{group.title}</h3>
                        <p>{group.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </ScrollReveal>
            </div>

            <div className="project-keywords" aria-label="후속 평가 항목">
              <p>후속 평가 항목</p>
              <ul>
                {evaluationKeywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          className="project-detail__section project-industries"
          aria-labelledby="project-industries-title"
        >
          <div className="project-detail__inner">
            <SectionHeading
              number="03"
              eyebrow="INDUSTRIAL ENVIRONMENTS"
              id="project-industries-title"
              title="네 가지 산업환경, 서로 다른 사용 조건"
              lead="주요 노출원과 작업환경을 비교하고, 산업별 제품 활용에 필요한 요구사항을 정리했습니다."
            />
            <p className="project-detail__body project-detail__body--wide">
              항공 승무원, 의료 종사자, 반도체 산업 종사자, 장시간 옥외작업자를
              중심으로 주요 노출원, 노출 양상, 기존 보호수단과 피해 사례를 조사했습니다.
              이를 바탕으로 산업별 작업환경에서 검토해야 할 제품 사용 조건을
              도출했습니다.
            </p>

            <ScrollReveal>
              <div className="project-industries__list">
                {projectIndustries.map((industry) => (
                  <article data-reveal-item key={industry.name}>
                    <div className="project-industries__title">
                      <span>{industry.number}</span>
                      <h3>{industry.name}</h3>
                    </div>
                    <p className="project-industries__question">{industry.question}</p>
                    <dl>
                      <div>
                        <dt>조사 내용</dt>
                        <dd>{industry.research}</dd>
                      </div>
                      <div>
                        <dt>사용성 요구사항</dt>
                        <dd>{industry.requirement}</dd>
                      </div>
                    </dl>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <aside className="project-industries__result" aria-label="산업환경 분석 결과">
              <span>분석 결과</span>
              <p>
                옥외작업 환경을 우선적인 활용성 검토 대상으로 정리했습니다. 항공 분야는
                장시간·건조환경에서의 사용성, 의료와 반도체 분야는 보호구 호환성과
                작업장 적합성을 중심으로 후속 검토 방향을 설정했습니다.
              </p>
              <small>
                산업별 노출환경 조사 결과이며, 제품의 방사선 차단 효과를 입증한 결과가
                아닙니다.
              </small>
            </aside>
          </div>
        </section>

        <section
          className="project-detail__section project-patents"
          aria-labelledby="project-patents-title"
        >
          <div className="project-detail__inner">
            <SectionHeading
              number="04"
              eyebrow="PATENT LANDSCAPE"
              id="project-patents-title"
              title="288건의 특허 문헌에서 연구의 방향을 찾다"
              lead="차단 소재와 제형, 생물학적 보호, 노출 감지의 관점에서 관련 기술을 비교했습니다."
            />
            <p className="project-detail__body project-detail__body--wide">
              WIPS ON을 활용하여 자외선·선케어, 생활방사선·이온화방사선 대응,
              화장품·피부외용제 관련 용어를 조합해 특허를 조사했습니다. 중복 문헌을
              제거하고 법적 상태를 검토한 뒤, 등록 또는 심사 진행 중인 문헌을 최종
              분석 대상으로 선별했습니다.
            </p>

            <div className="patent-dashboard">
              <div className="patent-selection" aria-label="특허 검색과 선별 과정">
                <p className="patent-selection__date">
                  검색 기준일 <time dateTime="2026-07-28">2026.07.28</time>
                </p>
                <div className="patent-selection__flow">
                  <div className="patent-selection__searches">
                    <div><span>국문 검색 결과</span><strong>132건</strong></div>
                    <div><span>영문 검색 결과</span><strong>972건</strong></div>
                  </div>
                  <div className="patent-selection__filter">
                    <span aria-hidden="true">→</span>
                    <p>중복 제거<br />법적 상태 검토</p>
                    <span aria-hidden="true">→</span>
                  </div>
                  <div className="patent-selection__final">
                    <span>최종 분석 대상</span>
                    <strong>288건</strong>
                  </div>
                </div>
                <p className="patent-selection__note">
                  두 검색 결과의 단순 합계가 아니라, 중복 제거와 법적 상태 검토를 거친
                  최종 선별 수치입니다.
                </p>
              </div>

              <figure className="patent-chart">
                <figcaption>국가·권역별 분포</figcaption>
                <ul aria-label="최종 분석 대상 특허 문헌의 국가와 권역별 수치">
                  {patentCountries.map((country) => (
                    <li key={country.name}>
                      <span className="patent-chart__label">{country.name}</span>
                      <span className="patent-chart__track" aria-hidden="true">
                        <span style={{ width: `${(country.value / 127) * 100}%` }} />
                      </span>
                      <strong>{country.value}건</strong>
                    </li>
                  ))}
                </ul>
                <p>합계 288건</p>
              </figure>
            </div>

            <ScrollReveal>
              <div className="patent-perspectives">
                {patentPerspectives.map((perspective) => (
                  <article data-reveal-item key={perspective.title}>
                    <span>{perspective.number}</span>
                    <h3>{perspective.title}</h3>
                    <p>{perspective.body}</p>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <div className="patent-examples">
              <p className="patent-examples__label">대표 검토 사례</p>
              <p>
                멜라닌 기반 복합 보호, 비스무트 옥시할라이드를 이용한 색 변화 감지,
                커큐민 기반 생물학적 보호, 탄소질화물 기반 자외선 차단 소재를
                살펴보았습니다.
              </p>
              <strong>
                차단 기능, 색 변화 기능, 생체영향평가를 연결하는 연구 방향을
                탐색했습니다.
              </strong>
            </div>
          </div>
        </section>

        <section
          className="project-detail__section project-experiments"
          aria-labelledby="project-experiments-title"
        >
          <div className="project-detail__inner">
            <SectionHeading
              number="05"
              eyebrow="SKIN MODEL EXPERIMENTS"
              id="project-experiments-title"
              title="피부모델의 제작 원리부터 UV 비교 실험까지"
              lead="피부모델의 구조와 제작 과정을 학습하고, 선크림 도포 여부와 UV 노출에 따른 반응을 비교하기 위한 실험을 수행했습니다."
            />

            <div className="experiment-timeline">
              <article className="experiment-entry">
                <header className="experiment-entry__heading">
                  <p>1차 실험</p>
                  <time dateTime="2026-09-01">2026년 9월 1일</time>
                  <h3>피부모델을 이해하고, 표피세포를 직접 시딩하다</h3>
                  <p>
                    전층배양피부와 피부 오가노이드의 개념 및 제작 원리를 학습하고,
                    표피 형성을 위한 표피세포 시딩을 수행했습니다.
                  </p>
                </header>

                <div className="experiment-entry__gallery experiment-entry__gallery--first">
                  <figure className="project-figure">
                    <Image
                      src={siteAssetPath("/images/project/experiment-seeding.jpg")}
                      alt="연구실 안전 작업대에서 표피세포 시딩을 수행하는 프로젝트 참여자"
                      width={1400}
                      height={1867}
                      sizes="(min-width: 1024px) 37vw, 92vw"
                    />
                    <figcaption>표피 형성을 위한 표피세포 시딩 수행.</figcaption>
                  </figure>
                  <figure className="project-figure">
                    <Image
                      src={siteAssetPath("/images/project/experiment-lab.jpg")}
                      alt="지도교수와 프로젝트팀이 피부모델 실험을 학습한 연구실 활동 사진"
                      width={1800}
                      height={1380}
                      sizes="(min-width: 1024px) 49vw, 92vw"
                    />
                    <figcaption>
                      지도교수와 함께 피부모델 제작 원리와 실험 과정을 학습한 연구실 활동.
                    </figcaption>
                  </figure>
                </div>

                <ol className="experiment-activities">
                  {experimentOneActivities.map((activity) => (
                    <li key={activity.title}>
                      <span>{activity.number}</span>
                      <div><h4>{activity.title}</h4><p>{activity.body}</p></div>
                    </li>
                  ))}
                </ol>
              </article>

              <article className="experiment-entry">
                <header className="experiment-entry__heading">
                  <p>2차 실험</p>
                  <time dateTime="2026-09-18">2026년 9월 18일</time>
                  <h3>도포 여부와 UV 노출에 따른 비교 조건을 구성하다</h3>
                  <p>
                    총 7개의 인공피부 시료를 세 조건으로 나누어, 선크림 도포 여부와 UV
                    노출에 따른 피부모델 반응을 비교하기 위한 실험을 수행했습니다.
                  </p>
                </header>

                <div className="sample-groups" aria-label="총 7개 시료의 비교군 구성">
                  {sampleGroups.map((group) => (
                    <div key={group.label}><strong>{group.count}</strong><span>{group.label}</span></div>
                  ))}
                </div>

                <div className="experiment-entry__second-layout">
                  <figure className="project-figure">
                    <Image
                      src={siteAssetPath("/images/project/experiment-samples.jpg")}
                      alt="PDMS 링 안에 선크림 도포를 마치고 UV 조사를 앞둔 인공피부 시료"
                      width={1600}
                      height={1200}
                      sizes="(min-width: 1024px) 46vw, 92vw"
                    />
                    <figcaption>UV 조사를 앞두고 선크림 도포를 마친 인공피부 시료.</figcaption>
                  </figure>

                  <div className="experiment-process">
                    <h4>실험 과정</h4>
                    <ol>
                      {experimentSteps.map((step, index) => (
                        <li key={step}>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <p>{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <dl className="experiment-conditions">
                  {experimentConditions.map((condition) => (
                    <div key={condition.term}><dt>{condition.term}</dt><dd>{condition.value}</dd></div>
                  ))}
                </dl>

                <p className="experiment-entry__status">
                  실험 수행 과정을 정리한 단계이며, 선크림의 보호 효과에 대한 분석
                  결과는 추후 측정 자료를 바탕으로 작성할 예정입니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="project-detail__section project-collaboration"
          aria-labelledby="project-collaboration-title"
        >
          <div className="project-detail__inner">
            <SectionHeading
              number="06"
              eyebrow="COLLABORATION LOG"
              id="project-collaboration-title"
              title="멘토링을 통해 구체화한 프로젝트의 방향"
              lead="수행계획 검토부터 조사 결과 공유와 사용자 의견 수집 방식 보완까지, 기업과 대학의 멘토링을 통해 활동을 구체화했습니다."
            />

            <ol className="meeting-timeline">
              <li className="meeting-entry">
                <div className="meeting-entry__date">
                  <time dateTime="2026-06-21">2026.06.21</time>
                  <span>온라인 킥오프</span>
                </div>
                <article>
                  <div className="meeting-entry__meta">
                    <span>오후 5시~7시</span><span>정재현 지도교수와 프로젝트팀</span>
                  </div>
                  <h3>연구의 출발점을 정하다</h3>
                  <p>
                    프로젝트 수행계획서를 검토하고, 협력기업과 제품에 대해 사전에
                    조사한 내용을 공유했습니다. 피부 오가노이드와 배양피부 모델,
                    화장품 효능평가의 기본 개념을 학습했습니다. SPF 등 정량적 평가의
                    원리와 제품 도포 여부에 따른 반응 비교 방식을 살펴보며 후속 연구
                    활용 방향을 논의했습니다.
                  </p>
                  <div className="meeting-entry__tasks">
                    <h4>초기 활동 과제</h4>
                    <ul>
                      <li>산업별 노출환경 문헌 조사</li>
                      <li>기업 미팅을 통한 제품 확보</li>
                      <li>배양피부를 활용한 평가 설계 검토</li>
                    </ul>
                  </div>
                  <div className="meeting-entry__gallery meeting-entry__gallery--kickoff">
                    <figure className="project-figure">
                      <Image
                        src={siteAssetPath("/images/project/kickoff-online-redacted.jpg")}
                        alt="참가자 숫자 식별자를 가린 2026년 6월 온라인 킥오프 화상회의 화면"
                        width={535}
                        height={538}
                        sizes="(min-width: 768px) 31vw, 92vw"
                      />
                      <figcaption>프로젝트 수행계획과 초기 활동을 논의한 온라인 킥오프.</figcaption>
                    </figure>
                    <figure className="project-figure project-figure--native-size">
                      <Image
                        src={siteAssetPath("/images/project/skin-model-training-redacted.jpg")}
                        alt="참가자 목록을 제외한 전층배양피부 구조와 제작 원리 교육 슬라이드 공유 화면"
                        width={348}
                        height={246}
                        sizes="348px"
                      />
                      <figcaption>피부모델 구조와 제작 원리를 살펴본 온라인 회의.</figcaption>
                    </figure>
                  </div>
                </article>
              </li>

              <li className="meeting-entry">
                <div className="meeting-entry__date">
                  <time dateTime="2026-07-16">2026.07.16</time>
                  <span>기업 대면 미팅</span>
                </div>
                <article>
                  <div className="meeting-entry__meta">
                    <span>오후 7시~9시</span><span>숭실대학교 테크스테이션</span>
                    <span>남상미 기업멘토, 정재현 지도교수와 프로젝트팀</span>
                  </div>
                  <h3>기업의 기술과 조사 방향을 연결하다</h3>
                  <p>
                    협력기업으로부터 제품을 전달받고, 제품의 특징과 기술적 배경에 관한
                    설명을 들었습니다. 조사 활동을 두 개 조로 나누어 역할을 분담하고,
                    제품 체험평가와 설문조사 계획을 수립했습니다.
                  </p>
                  <div className="meeting-entry__split">
                    <div>
                      <h4>역할 분담</h4>
                      <ul>
                        <li>1조: 기존 출시 제품과 관련 기술 조사</li>
                        <li>2조: 산업현장 사례, 자외선·생활방사선 노출환경, 적용 분야 분석</li>
                      </ul>
                    </div>
                    <div>
                      <h4>체험평가 계획</h4>
                      <p>
                        팀원 1인당 4명씩 <strong>총 20명을 목표</strong>로 제품 체험과
                        설문조사를 계획했습니다. 설문 항목과 재료비 사용 계획을 논의하고,
                        매주 토요일 오후 3시 온라인 정기회의를 운영하기로 했습니다.
                      </p>
                    </div>
                  </div>
                  <figure className="project-figure meeting-entry__wide-photo">
                    <Image
                      src={siteAssetPath("/images/project/company-meeting.jpg")}
                      alt="숭실대학교 테크스테이션에서 기업멘토와 프로젝트팀이 제품과 조사 방향을 논의하는 모습"
                      width={1800}
                      height={1350}
                      sizes="(min-width: 1024px) 68vw, 92vw"
                    />
                    <figcaption>
                      기업멘토와 제품의 특징, 조사 및 체험평가 방향을 논의한 대면 미팅.
                    </figcaption>
                  </figure>
                </article>
              </li>

              <li className="meeting-entry">
                <div className="meeting-entry__date">
                  <time dateTime="2026-08-08">2026.08.08</time>
                  <span>온라인 기업 멘토링</span>
                </div>
                <article>
                  <div className="meeting-entry__meta">
                    <span>오후 5시~7시</span><span>남상미 기업멘토와 프로젝트팀</span>
                  </div>
                  <h3>조사 결과에 피드백을 더하다</h3>
                  <p>
                    각 조가 제품·기술 조사와 산업환경 분석 결과를 발표하고, 국내외 특허
                    동향을 공유했습니다. 자체적으로 시행한 제품 체험평가와 설문조사
                    내용도 설명했습니다.
                  </p>
                  <div className="meeting-entry__split">
                    <div>
                      <h4>주요 피드백</h4>
                      <p>
                        응답자 특성에 따른 분석을 위해 성별과 나이 항목을 보완할 필요가
                        있다는 조언을 받았습니다. 학생들이 제품을 사용하고 후기를 남길 수
                        있는 교내 캠페인이나 체험 부스 운영 방안도 제안되었습니다.
                      </p>
                    </div>
                    <div>
                      <h4>후속 논의</h4>
                      <p>
                        중앙동아리 등과 연계한 체험 활동을 검토하고, 사용자 의견 수집
                        방식과 후속 활동 방향을 보완했습니다.
                      </p>
                      <span className="project-status">제안·검토 단계</span>
                    </div>
                  </div>
                  <p className="meeting-entry__no-photo">
                    이 일정과 연결된 촬영 날짜 확인 사진이 없어 텍스트 기록으로 구성했습니다.
                  </p>
                </article>
              </li>
            </ol>

            <figure className="project-figure collaboration-record">
              <Image
                src={siteAssetPath("/images/project/online-collaboration-redacted.jpg")}
                alt="학생 숫자 식별자를 가린 프로젝트팀의 온라인 화상회의 화면"
                width={1800}
                height={830}
                sizes="(min-width: 1024px) 72vw, 92vw"
              />
              <figcaption>
                온라인 협업 기록. 촬영 날짜가 확인되지 않아 특정 미팅과 연결하지 않았습니다.
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="project-detail__section project-outputs"
          aria-labelledby="project-outputs-title"
        >
          <div className="project-detail__inner">
            <SectionHeading
              number="07"
              eyebrow="CONTENTS & OUTCOMES"
              id="project-outputs-title"
              title="조사와 실험의 경험을, 공유할 수 있는 기록으로"
              lead="프로젝트의 과정과 주요 내용을 카드뉴스, 블로그, 포트폴리오로 정리하기 위한 제작 방향을 논의했습니다."
            />

            <div className="project-outputs__intro">
              <div>
                <p className="project-outputs__date">
                  활동 날짜 <time dateTime="2026-09-08">2026년 9월 8일</time>
                </p>
                <p className="project-detail__body">
                  팀원 전원이 모여 SNS 활동과 최종 결과물의 제작 방향을 논의했습니다.
                  인스타그램에서는 프로젝트의 배경과 주요 활동, 조사 내용을 핵심적으로
                  전달하고, 블로그에서는 멘토링과 실험 과정, 조사 결과를 자세하게
                  기록하기로 했습니다.
                </p>
              </div>
              <figure className="project-figure">
                <Image
                  src={siteAssetPath("/images/project/content-planning.jpg")}
                  alt="프로젝트팀이 회의실 화면을 보며 콘텐츠 제작 방향을 논의하는 모습"
                  width={1600}
                  height={1200}
                  sizes="(min-width: 1024px) 48vw, 92vw"
                />
                <figcaption>현재 진행 상황과 향후 콘텐츠 제작 방향을 논의한 회의.</figcaption>
              </figure>
            </div>

            <ScrollReveal>
              <div className="project-outputs__grid">
                {projectOutputs.map((output) => (
                  <article data-reveal-item key={output.title}>
                    <span>{output.number}</span>
                    <h3>{output.title}</h3>
                    <p>{output.body}</p>
                    <small>제작 방향 논의 단계</small>
                  </article>
                ))}
              </div>
            </ScrollReveal>

            <div className="project-outputs__note">
              <p>
                사업에서 요구하는 필수 제출물과 함께 팀의 활동을 요약한 포트폴리오를
                제작하기로 했습니다. 외부 관계자가 프로젝트를 쉽게 확인할 수 있도록
                온라인 포트폴리오·활동 소개 홈페이지 연결 방안과 인쇄물의 QR 활용
                계획도 논의했습니다.
              </p>
              <span>
                공개 주소와 완료 여부가 확인되지 않아 외부 링크와 QR코드는 제공하지 않습니다.
              </span>
            </div>
          </div>
        </section>

        <section
          className="project-detail__section project-people"
          aria-labelledby="project-people-title"
        >
          <div className="project-detail__inner">
            <SectionHeading
              number="08"
              eyebrow="PEOPLE"
              id="project-people-title"
              title="다섯 명의 시선, 하나의 연구 방향"
              lead="숭실대학교 화학공학과 학생 5명이 기업과 대학의 멘토링을 바탕으로 제품 조사, 산업환경 분석, 특허 검토와 피부모델 실험을 함께 수행했습니다."
            />

            <div className="project-people__layout">
              <section aria-labelledby="students-title">
                <p className="project-people__label">PROJECT TEAM</p>
                <h3 id="students-title">참여 학생</h3>
                <ul className="project-people__students">
                  {students.map((student, index) => (
                    <li key={student.name}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{student.name}</strong>
                      <small>{student.role}</small>
                    </li>
                  ))}
                </ul>
              </section>

              <section aria-labelledby="mentors-title">
                <p className="project-people__label">MENTORS</p>
                <h3 id="mentors-title">멘토</h3>
                <ul className="project-people__mentors">
                  {mentors.map((mentor) => (
                    <li key={mentor.role}>
                      <span>{mentor.role}</span>
                      <strong>{mentor.name}</strong>
                      <small>{mentor.affiliation}</small>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
