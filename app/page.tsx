import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Certifications } from "@/components/Certifications";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { GithubSection } from "@/components/GithubSection";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <ProjectExplorer />
        <About />
        <Experience />
        <TechStack />
        <Achievements />
        <Certifications />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
