import { SectionHeader } from "@/components/SectionHeader";

const facts = [
  { value: "9.03", label: "CGPA" },
  { value: "AIR 8659", label: "GATE CSE 2026" },
  { value: "14+", label: "Public repositories" },
  { value: "200+", label: "DSA problems" }
];

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <SectionHeader kicker="About" title="Data science roots. Product builder instincts.">
          Prayag is a final-year B.Tech Data Science student focused on shipping useful software across web, mobile,
          cloud, and intelligent systems. The through-line is practical engineering: understand the problem, choose
          the right tools, and build the product end to end.
        </SectionHeader>
        <div className="facts-grid">
          {facts.map((fact) => (
            <div className="fact-card" key={fact.label}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
