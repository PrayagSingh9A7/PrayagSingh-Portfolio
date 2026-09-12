"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { SectionHeader } from "@/components/SectionHeader";

export function FeaturedProjects() {
  const handleCardMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const card = event.currentTarget;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    card.style.setProperty("--tilt-x", `${y * -4}deg`);
    card.style.setProperty("--tilt-y", `${x * 5}deg`);
    card.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`);
  };

  const resetCard = (event: React.PointerEvent<HTMLElement>) => {
    const card = event.currentTarget;
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
    card.style.setProperty("--shine-x", "50%");
    card.style.setProperty("--shine-y", "50%");
  };

  return (
    <section className="section" id="work">
      <div className="container">
       <SectionHeader
  kicker="Selected Work"
  title="Built with purpose. Crafted to stand out."
>
      A glimpse into what I build when the idea is worth pursuing.
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
              onPointerMove={handleCardMove}
              onPointerLeave={resetCard}
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
