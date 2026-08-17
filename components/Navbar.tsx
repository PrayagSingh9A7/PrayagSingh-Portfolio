"use client";

import { AnimatePresence, motion, useScroll } from "framer-motion";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => scrollY.on("change", (latest) => setScrolled(latest > 24)), [scrollY]);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Prayag Singh home">
          PRAYAG SINGH
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <a className="icon-button" href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
            <Github size={18} />
          </a>
          <a className="icon-button" href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin size={18} />
          </a>
          {profile.resume ? (
            <a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          ) : (
            <span className="nav-resume disabled" aria-disabled="true" title="Add public/resume.pdf to enable this link">
              Resume
            </span>
          )}
        </div>
        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <div className="mobile-actions">
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              {profile.resume ? (
                <a href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
              ) : (
                <span aria-disabled="true">Resume</span>
              )}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
