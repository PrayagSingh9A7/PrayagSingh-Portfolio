"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SectionHeader } from "@/components/SectionHeader";

export function FeaturedProjects() {
  return (
    <section className="section" id="work">
      <div className="container">
        <SectionHeader kicker="Selected Work" title="Projects with product shape, not just repository links.">
          Five projects that show the range: full-stack products, cloud-backed systems, AI pipelines, and practical interfaces.
        </SectionHeader>
        <div className="featured-list">
          {featuredProjects.map((project, index) => (
            <motion.article
              className={`featured-card ${index === 0 ? "dominant" : ""} ${index % 2 === 1 ? "reverse" : ""} ${
                index === featuredProjects.length ? "wide" : ""
              }`}
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35 }}
            >
              <div className="project-copy">
                <p className="project-number">{project.categories.join(" / ")}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul>
                  {project.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="tag-row">
                  {project.stack.slice(0, 6).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.live ? (
                    <a className="button primary small" href={project.live} target="_blank" rel="noreferrer">
                      Live Demo <ExternalLink size={15} />
                    </a>
                  ) : null}
                  <a className="button secondary small" href={project.repo} target="_blank" rel="noreferrer">
                    <Github size={15} /> GitHub
                  </a>
                </div>
              </div>
             <ProjectVisual project={project} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
