import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  FaBriefcase,
  FaGithub,
  FaCodeBranch,
  FaLaptopCode,
} from "react-icons/fa";

import { experiences } from "../data/portfolio.jsx";

import "./Experience.css";


// ============================================================
// ICON HANDLER
// ============================================================

function ExperienceIcon({ type }) {
  switch (type) {
    case "github":
      return <FaGithub />;

    case "laptop":
      return <FaLaptopCode />;

    default:
      return <FaBriefcase />;
  }
}


// ============================================================
// EXPERIENCE CARD
// ============================================================

function ExperienceCard({ experience, index }) {
  const [ref, inView] = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.article
      ref={ref}
      className="experience-card"

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
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
    >

      {/* ================================================
          TOP BAR
      ================================================= */}

      <div className="experience-top">

        <div className="experience-number">
          {experience.id}
        </div>

        <div className="experience-type">
          {experience.type}
        </div>

        <div className="experience-status">

          <span className="status-dot" />

          {experience.status}

        </div>

      </div>


      {/* ================================================
          MAIN CONTENT
      ================================================= */}

      <div className="experience-main">

        {/* ICON */}

        <div className="experience-icon">

          <ExperienceIcon
            type={experience.icon}
          />

        </div>


        {/* CONTENT */}

        <div className="experience-content">

          <p className="experience-organization">
            {experience.organization}
          </p>


          <h3 className="experience-role">
            {experience.role}
          </h3>


          <p className="experience-period">
            {experience.period}
          </p>


          <p className="experience-description">
            {experience.description}
          </p>


          {/* ==========================================
              TAGS
          =========================================== */}

          {experience.tags?.length > 0 && (

            <div className="experience-tags">

              {experience.tags.map((tag) => (

                <span
                  key={tag}
                  className="experience-tag"
                >
                  {tag}
                </span>

              ))}

            </div>

          )}

        </div>

      </div>


      {/* ================================================
          FOOTER
      ================================================= */}

      <div className="experience-footer">

        <span className="experience-classification">

          {experience.type === "OPEN SOURCE"
            ? "PUBLIC CONTRIBUTION"
            : "FIELD EXPERIENCE"}

        </span>


        <FaCodeBranch />

      </div>


      {/* GOLD ACCENT */}

      <div className="experience-accent" />

    </motion.article>
  );
}


// ============================================================
// EXPERIENCE SECTION
// ============================================================

export default function Experience() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });


  return (
    <section
      id="experience"
      className="experience"
    >

      {/* ================================================
          HEADER
      ================================================= */}

      <motion.div
        ref={ref}
        className="experience-header"

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

        <div>

          <p className="section-label">
            FIELD RECORD
          </p>

          <h2 className="section-title">
            Experience
            <br />
            Log
          </h2>

        </div>


        <div className="experience-intro">

          <span className="experience-index">
            02 / FIELD OPERATIONS
          </span>

          <p>
            Real-world development experience,
            collaboration and contributions
            beyond personal projects.
          </p>

        </div>

      </motion.div>


      {/* ================================================
          EXPERIENCE TIMELINE
      ================================================= */}

      <div className="experience-timeline">

        <div className="timeline-line" />


        {experiences.map((experience, index) => (

          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />

        ))}

      </div>


      {/* ================================================
          BOTTOM
      ================================================= */}

      <motion.div
        className="experience-bottom"

        initial={{
          opacity: 0,
        }}

        whileInView={{
          opacity: 1,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >

        <FaBriefcase />

        <span>
          BUILDING EXPERIENCE ONE MISSION AT A TIME
        </span>

      </motion.div>

    </section>
  );
}