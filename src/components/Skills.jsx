import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  skills,
  additionalSkills,
} from "../data/portfolio.jsx";

import "./Skills.css";


// ============================================================
// CORE SKILL CARD
// ============================================================

function SkillCard({ skill, index }) {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="skill-card"
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Top number */}
      <div className="skill-number">
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* Icon */}
      <div className="skill-icon">
        {skill.icon}
      </div>

      {/* Content */}
      <div className="skill-content">
        <div className="skill-name">
          {skill.name}
        </div>

        <div className="skill-category">
          {skill.category}
        </div>
      </div>

      {/* Bottom accent */}
      <div className="skill-accent" />
    </motion.div>
  );
}


// ============================================================
// ADDITIONAL SKILL CHIP
// ============================================================

function AdditionalSkill({ skill, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="additional-skill"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        duration: 0.35,
        delay: index * 0.04,
      }}
      whileHover={{
        y: -3,
      }}
    >
      <span className="additional-icon">
        {skill.icon}
      </span>

      <span className="additional-name">
        {skill.name}
      </span>
    </motion.div>
  );
}


// ============================================================
// MAIN SKILLS SECTION
// ============================================================

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="skills">

      {/* ================================================== */}
      {/* HEADER */}
      {/* ================================================== */}

      <motion.div
        ref={ref}
        className="skills-header"
        initial={{
          opacity: 0,
          y: 30,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                y: 0,
              }
            : {}
        }
        transition={{
          duration: 0.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        <div className="skills-heading">

          <p className="section-label">
            TECH ARSENAL
          </p>

          <h2 className="section-title">
            Weapons
            <br />
            of Choice
          </h2>

        </div>


        <div className="skills-intro">

          <span className="skills-index">
            01 / ARSENAL
          </span>

          <p>
            Technologies I use to design,
            build and experiment with
            full-stack applications.
          </p>

        </div>

      </motion.div>


      {/* ================================================== */}
      {/* CORE TECHNOLOGIES */}
      {/* ================================================== */}

      <div className="skills-section-heading">

        <div className="heading-line" />

        <span>
          CORE TECHNOLOGIES
        </span>

        <div className="heading-line" />

      </div>


      <div className="skills-grid">

        {skills.map((skill, index) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}

      </div>


      {/* ================================================== */}
      {/* ADDITIONAL TOOLS */}
      {/* ================================================== */}

      <motion.div
        className="additional-section"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{
          duration: 0.6,
        }}
      >

        <div className="additional-header">

          <div>

            <span className="additional-label">
              ALSO IN THE ARSENAL
            </span>

            <h3>
              Tools & Technologies
            </h3>

          </div>

          <span className="additional-count">
            {String(additionalSkills.length).padStart(2, "0")}
          </span>

        </div>


        <div className="additional-grid">

          {additionalSkills.map((skill, index) => (
            <AdditionalSkill
              key={skill.name}
              skill={skill}
              index={index}
            />
          ))}

        </div>

      </motion.div>

    </section>
  );
}