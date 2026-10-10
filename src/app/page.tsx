import { AboutSection } from "@/components/portfolio/about-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { HeroSection } from "@/components/portfolio/hero-section";
import { JourneySection } from "@/components/portfolio/journey-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { SocialStrip } from "@/components/portfolio/social-strip";

export default function Home() {
  return (
    <>
      <div aria-hidden="true" className="ambient ambient-one" />
      <div aria-hidden="true" className="ambient ambient-two" />

      <SiteHeader />

      <main className="site-main mx-auto w-full max-w-7xl space-y-24 px-5 py-8 sm:px-8 sm:py-12">
        <HeroSection />
        <SocialStrip />
        <AboutSection />
        <SkillsSection />
        <JourneySection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </>
  );
}
