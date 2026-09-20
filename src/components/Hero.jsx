import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="hero">
      {/* Bat signal glow */}
      <div className="bat-signal" />

      <motion.p className="hero-eyebrow" {...fadeUp(0.3)}>
        // Full-Stack Developer &amp; Tech Fresher
      </motion.p>

      <motion.h1 className="hero-name" {...fadeUp(0.5)}>
        RAGUL<br />
        <span>RADHAKRISHNAN </span>
      </motion.h1>

      <motion.p className="hero-sub" {...fadeUp(0.7)}>
        Building scalable systems from the shadows of Salem.
        Turning ideas into deployed realities.
      </motion.p>

      <motion.div className="hero-cta" {...fadeUp(0.9)}>
        <a href="#projects" className="btn-primary">View Missions</a>
        <a href="#contact" className="btn-outline">Open a Channel</a>
      </motion.div>

      <div className="hero-bg-text">DARK</div>

      <motion.div className="hero-status" {...fadeUp(1.1)}>
        <span className="hero-line-accent" />
        <span>Est. 2024 · Available for hire</span>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 1 }}
      >
        <div className="scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}
