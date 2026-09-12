import Image from "next/image";
import type { FeaturedProject } from "@/data/projects";

type ProjectVisualProps = {
  project: FeaturedProject;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <aside className={`project-visual ${project.image ? "" : "project-visual--mobile"}`} aria-label={`${project.title} project preview`}>
      <div className="project-visual-shadow" aria-hidden="true" />
      <div className="project-visual-backplate" aria-hidden="true" />
      <div className="project-image-frame">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className={`project-image project-image--${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          />
        ) : (
          <div className="mobile-project-preview" aria-hidden="true">
            <div className="mobile-project-screen">
              <span className="mobile-project-notch" />
              <span className="mobile-project-label">ZESTUP</span>
              <strong>Fresh recipes<br />for every mood.</strong>
              <div className="mobile-project-recipe">
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}
        <div className="project-image-reflection" aria-hidden="true" />
      </div>
      <span className="project-depth-label">{project.categories.join(" / ")}</span>
    </aside>
  );
}