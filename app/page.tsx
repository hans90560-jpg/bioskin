import { Hero } from "@/components/hero";
import { ProjectNavigation } from "@/components/project-navigation";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        본문으로 바로가기
      </a>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <ProjectNavigation />
      </main>
    </>
  );
}
