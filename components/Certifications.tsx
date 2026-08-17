import { BadgeCheck } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeader } from "@/components/SectionHeader";

export function Certifications() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader kicker="Certifications" title="Certifications" />
        <div className="cert-grid">
          {certifications.map((certification) => (
            <div className="cert-item" key={certification}>
              <BadgeCheck size={18} />
              <span>
                <strong>{certification.split(" - ")[0]}</strong>
                {certification.split(" - ")[1]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
