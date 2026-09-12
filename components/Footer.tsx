import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>Prayag Singh</span>
        <span>Designed to think. Built to ship.</span>
        <nav aria-label="Footer links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.leetcode} target="_blank" rel="noreferrer">LeetCode</a>
        </nav>
      </div>
    </footer>
  );
}
