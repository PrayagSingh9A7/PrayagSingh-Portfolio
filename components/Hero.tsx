"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { profile } from "@/data/profile";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroRef.current?.style.setProperty("--hero-x", `${x * 14}px`);
    heroRef.current?.style.setProperty("--hero-y", `${y * 10}px`);
    heroRef.current?.style.setProperty("--hero-rotate-x", `${y * -2.5}deg`);
    heroRef.current?.style.setProperty("--hero-rotate-y", `${x * 3}deg`);
  };

  const resetPointer = () => {
    heroRef.current?.style.setProperty("--hero-x", "0px");
    heroRef.current?.style.setProperty("--hero-y", "0px");
    heroRef.current?.style.setProperty("--hero-rotate-x", "0deg");
    heroRef.current?.style.setProperty("--hero-rotate-y", "0deg");
  };

  return (
    <section className="hero" id="top" ref={heroRef} onPointerMove={handlePointerMove} onPointerLeave={resetPointer}>
      <div className="hero-depth-scene" aria-hidden="true">
        <span className="hero-orb hero-orb-back" />
        <span className="hero-orb hero-orb-front" />
        <span className="hero-float-card hero-float-card--top">SYSTEMS / 01</span>
        <span className="hero-float-card hero-float-card--bottom">BUILDING &amp; SHIPPING</span>
        <span className="hero-grid-plane" />
      </div>
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
          Open to opportunities worth building for. 🔥
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
          
        </div>
        <motion.div
          className="portrait-wrap"
          initial={{ opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="portrait-scene">
            <div className="portrait-halo portrait-halo--outer" />
            <div className="portrait-halo portrait-halo--inner" />
            <div className="portrait-orbit portrait-orbit--one" />
            <div className="portrait-orbit portrait-orbit--two" />
            <span className="portrait-particle portrait-particle--one" />
            <span className="portrait-particle portrait-particle--two" />
            <span className="portrait-particle portrait-particle--three" />
            <span className="portrait-particle portrait-particle--four" />
            <div className="portrait-frame">
              <div className="portrait-frame-back" />
              <div className="portrait-image-wrap">
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
                <div className="portrait-glass-sheen" />
              </div>
              <div className="portrait-metal-corner portrait-metal-corner--tl" />
              <div className="portrait-metal-corner portrait-metal-corner--br" />
              <div className="portrait-note">Building &amp; shipping</div>
              <div className="portrait-stack">Full-Stack · AI · Cloud · Product Engineering</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
