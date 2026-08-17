import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s build something useful.</h2>
        <p>Open to interesting engineering problems, collaborations, internships, and software opportunities.</p>
        <div className="hero-buttons centered">
          <a className="button primary" href={`mailto:${profile.email}`}>
            <Mail size={17} /> Email Me
          </a>
          <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a className="button secondary" href={profile.leetcode} target="_blank" rel="noreferrer">
            <Code2 size={17} /> LeetCode
          </a>
        </div>
      </div>
    </section>
  );
}
