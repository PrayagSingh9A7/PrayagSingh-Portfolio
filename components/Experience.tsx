import { Cloud } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <SectionHeader kicker="Experience" title="Cloud training with practical systems context.">
          Practical cloud training, architecture fundamentals, and deployment-focused learning.
        </SectionHeader>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-mark"><Cloud size={18} /></div>
              <div>
                <p className="period">{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.company}</span>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
