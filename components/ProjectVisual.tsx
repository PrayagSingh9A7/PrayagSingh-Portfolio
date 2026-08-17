import Image from "next/image";
import type { FeaturedProject } from "@/data/projects";

type ProjectVisualProps = {
  project: FeaturedProject;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  return (
    <aside className="project-visual" aria-label={`${project.title} project preview`}>
      <div className="project-image-frame">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="project-image"
        />
      </div>
    </aside>
  );
}