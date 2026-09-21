import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "시장분석",
    description: "시장 환경과 주요 흐름을 살펴봅니다.",
    href: "/market-analysis",
  },
  {
    number: "02",
    title: "제품소개",
    description: "SARAH SUNCARE의 제품 방향을 소개합니다.",
    href: "/product",
  },
  {
    number: "03",
    title: "프로젝트 소개",
    description: "현장형 기술 문제 해결 프로젝트를 안내합니다.",
    href: "/project",
  },
] as const;

export function ProjectNavigation() {
  return (
    <section
      className="project-navigation"
      id="project-navigation"
      aria-labelledby="project-navigation-title"
    >
      <div className="project-navigation__inner">
        <div className="section-heading">
          <p className="section-heading__eyebrow">EXPLORE</p>
          <h2 id="project-navigation-title">프로젝트 살펴보기</h2>
        </div>

        <nav className="project-grid" aria-label="프로젝트 상세 페이지">
          {projects.map((project) => (
            <Link
              className="project-card"
              href={project.href}
              key={project.href}
              aria-label={`${project.title} 페이지로 이동`}
            >
              <span className="project-card__shape" aria-hidden="true" />
              <span className="project-card__number">{project.number}</span>
              <span className="project-card__content">
                <span className="project-card__title">{project.title}</span>
                <span className="project-card__description">
                  {project.description}
                </span>
              </span>
              <span className="project-card__arrow" aria-hidden="true">
                <svg viewBox="0 0 24 24" focusable="false">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
