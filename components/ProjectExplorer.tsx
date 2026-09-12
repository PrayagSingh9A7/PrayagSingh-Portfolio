"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { compactProjects, type ProjectCategory } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";

const filters: Array<"All" | ProjectCategory> = ["All", "Web", "Mobile", "AI", "Cloud"];

export function ProjectExplorer() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = useMemo(
    () => compactProjects.filter((project) => active === "All" || project.categories.includes(active)),
    [active]
  );

  return (
    <section className="section explorer-section">
      <div className="container">
        <SectionHeader kicker="More Builds" title="A broader project library.">
          A broader view of the repositories across web, mobile, cloud, and AI.
        </SectionHeader>
        <div className="filter-row" role="tablist" aria-label="Project category filters">
          {filters.map((filter) => (
            <button
              type="button"
              key={filter}
              className={active === filter ? "active" : ""}
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="compact-grid">
          {visible.map((project) => (
            <article className="compact-card" key={project.name}>
              <div className={`project-thumb ${project.categories[0].toLowerCase()}`} aria-hidden="true">
                {project.image ? (
                  <Image src={project.image} alt="" fill sizes="(max-width: 700px) 100vw, 30vw" />
                ) : (
                  <>
                    <span />
                    <span />
                    <span />
                  </>
                )}
              </div>
              <div>
                <span>{project.categories.join(" / ")}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <div className="tag-row compact">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="compact-actions">
                {project.live ? (
                  <a className="mini-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`${project.name} live demo`}>
                    Live Demo <ExternalLink size={15} />
                  </a>
                ) : null}
                <a className="mini-link" href={project.repo} target="_blank" rel="noreferrer" aria-label={`${project.name} GitHub`}>
                  GitHub <Github size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
