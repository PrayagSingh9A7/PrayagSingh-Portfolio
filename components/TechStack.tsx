import { skillGroups } from "@/data/skills";
import { SectionHeader } from "@/components/SectionHeader";

export function TechStack() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <SectionHeader kicker="Skills" title="Engineering toolkit.">
          Categorized tools for interfaces, APIs, cloud-backed systems, and core computer science.
        </SectionHeader>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(" · ")}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
