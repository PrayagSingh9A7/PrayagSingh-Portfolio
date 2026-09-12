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
       <SectionHeader
  kicker="About"
  title={
    <>
      Thinking beyond the <span className="accent-text">code.</span>
      <br />
      Building beyond the <span className="accent-text">obvious.</span>
    </>
  }
>
  I’m a final-year B.Tech Data Science student who enjoys turning ambitious ideas into
  thoughtful digital products — blending <strong>engineering, design, and AI</strong> with
  a strong focus on creating experiences that actually matter.
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
