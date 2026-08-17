"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            {profile.title}
          </motion.p>
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {profile.name}
          </motion.h1>
          <motion.p
            className="hero-intro"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28 }}
          >
            {profile.subtitle}
          </motion.p>
          <motion.p
            className="availability-line"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            Available for internships · collaborations · software opportunities
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38 }}
          >
            <a className="button primary" href="#work">
              View My Work <ArrowRight size={17} />
            </a>
            <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub
            </a>
          </motion.div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
            Selected Work
          </a>
        </div>
        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-frame">
            <Image
              src="/profile.jpg"
              alt="Prayag Singh portrait"
              fill
              sizes="(max-width: 900px) 86vw, 38vw"
              className={`portrait-image ${imageLoaded && !imageFailed ? "is-visible" : ""}`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageFailed(true)}
              priority
            />
            <div className={`portrait-fallback ${imageFailed || !imageLoaded ? "is-visible" : ""}`} aria-hidden="true">
              <span>PS</span>
              <strong>Portrait placeholder</strong>
            </div>
            <div className="portrait-note">Building & shipping</div>
            <div className="portrait-stack">React · Node · Python · Cloud</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
