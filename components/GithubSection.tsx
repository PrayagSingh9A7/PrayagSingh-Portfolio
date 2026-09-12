import { Github, GitPullRequestArrow, Star } from "lucide-react";
import { profile } from "@/data/profile";

export function GithubSection() {
  return (
    <section className="github-band">
      <div className="container github-grid">
        <div>
         <p className="section-kicker">The Craft</p>
<h2>Built through curiosity. Refined through practice.</h2>
<p>
  Every project is an opportunity to explore, experiment, and turn what I learn into
  something meaningful.
</p>
          <a className="button primary small" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} /> @{profile.handle}
          </a>
        </div>
        <div className="github-panel" aria-label="GitHub activity representation">
          <div><Github size={18} /><span>14+ public repositories referenced</span></div>
          <div><GitPullRequestArrow size={18} /><span>Project-first learning trail</span></div>
          <div><Star size={18} /><span>Full-stack, mobile, cloud, and AI builds</span></div>
        </div>
      </div>
    </section>
  );
}
