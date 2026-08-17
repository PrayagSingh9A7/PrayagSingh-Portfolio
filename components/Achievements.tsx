import { achievements } from "@/data/achievements";
import { SectionHeader } from "@/components/SectionHeader";

export function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <SectionHeader kicker="Achievements" title="Academic and problem-solving signals." />
        <div className="achievement-list">
          {achievements.map((item) => (
            <article
              className="achievement-row"
              key={item.title}
            >
              <span>{item.title}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
