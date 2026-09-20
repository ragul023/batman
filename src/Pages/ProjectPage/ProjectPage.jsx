import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { LuArrowUpRight, LuTerminal } from "react-icons/lu";
import Cursor from "../../components/Cursor";

import { projectData, projectCategories } from "../../data/projectData.jsx";

import "./ProjectPage.css";
import Navbar from "../../components/Navbar.jsx";

// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className={`project-card ${
        project.featured ? "project-card-featured" : ""
      }`}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* ================================================== */}
      {/* TOP BAR */}
      {/* ================================================== */}

      <div className="project-card-top">
        <span className="project-id">MISSION {project.id}</span>

        <span className="project-status">
          <span className="status-dot" />
          {project.status}
        </span>
      </div>

      {/* ================================================== */}
      {/* PROJECT VISUAL */}
      {/* ================================================== */}

      <div className="project-visual">
        <div className="project-visual-grid" />

        <span className="project-visual-code">{project.accent}</span>

        <div className="project-visual-corner">
          <LuTerminal />
        </div>

        <span className="project-visual-number">{project.id}</span>
      </div>

      {/* ================================================== */}
      {/* CONTENT */}
      {/* ================================================== */}

      <div className="project-card-content">
        <div className="project-classification">{project.classification}</div>

        <h2 className="project-title">{project.title}</h2>

        <p className="project-description">{project.description}</p>

        {/* ==================================================
            STACK
        ================================================= */}

        <div className="project-stack">
          {project.stack.map((technology) => (
            <span key={technology} className="project-stack-item">
              {technology}
            </span>
          ))}
        </div>

        {/* ==================================================
            ACTIONS
        ================================================= */}

        <div className="project-actions">
          <a
            href={project.github}
            className="project-action"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />

            <span>SOURCE</span>

            <LuArrowUpRight />
          </a>

          <a
            href={project.live}
            className="project-action"
            target="_blank"
            rel="noreferrer"
          >
            <FaExternalLinkAlt />

            <span>LIVE</span>

            <LuArrowUpRight />
          </a>
        </div>
      </div>

      {/* ================================================== */}
      {/* GOLD ACCENT */}
      {/* ================================================== */}

      <div className="project-card-accent" />
    </motion.article>
  );
}

// ============================================================
// PROJECT DETAIL
// ============================================================

function ProjectDetail({ project }) {
  return (
    <motion.div
      className="project-detail"
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        height: 0,
      }}
    >
      <div className="project-detail-inner">
        <div>
          <span className="detail-label">SYSTEM OVERVIEW</span>

          <p>{project.longDescription}</p>
        </div>

        <div>
          <span className="detail-label">KEY SYSTEMS</span>

          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

// ============================================================
// PROJECTS PAGE
// ============================================================

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const [expandedProject, setExpandedProject] = useState(null);

  // ==========================================================
  // FILTER
  // ==========================================================

  const filteredProjects = useMemo(() => {
    if (activeCategory === "ALL") {
      return projectData;
    }

    return projectData.filter(
      (project) => project.category.toUpperCase() === activeCategory,
    );
  }, [activeCategory]);

  // ==========================================================
  // TOGGLE DETAILS
  // ==========================================================

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <>
      <Cursor />
      <Navbar/>
      <main className="projects-page">
        {/* ================================================== */}
        {/* HERO */}
        {/* ================================================== */}

        <section className="projects-hero">
          <motion.div
            className="projects-hero-content"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="projects-eyebrow">
              <span>MISSIONS / ARCHIVE</span>

              <span>2024 — 2026</span>
            </div>

            <h1>Missions</h1>

            <p>
              Systems, experiments and products I've built while learning how to
              turn ideas into working software.
            </p>
          </motion.div>

          <div className="hero-coordinate">RGL / PROJECT ARCHIVE</div>
        </section>

        {/* ================================================== */}
        {/* FILTER */}
        {/* ================================================== */}

        <section className="projects-controls">
          <div className="projects-count">
            <span className="count-number">
              {String(filteredProjects.length).padStart(2, "0")}
            </span>

            <span>MISSIONS FOUND</span>
          </div>

          <div className="project-filters">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* PROJECT GRID */}
        {/* ================================================== */}

        <section className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <React.Fragment key={project.id}>
                <ProjectCard project={project} index={index} />

                {/* DETAILS */}

                {expandedProject === project.id && (
                  <ProjectDetail project={project} />
                )}
              </React.Fragment>
            ))}
          </AnimatePresence>
        </section>

        {/* ================================================== */}
        {/* EXPAND CONTROLS */}
        {/* ================================================== */}

        <div className="project-expand-area">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => toggleProject(project.id)}
              className="hidden-project-trigger"
            >
              {expandedProject === project.id ? "CLOSE" : ""}
            </button>
          ))}
        </div>

        {/* ================================================== */}
        {/* FOOTER */}
        {/* ================================================== */}

        <section className="projects-footer">
          <div className="projects-footer-line" />

          <p>MORE MISSIONS ARE CURRENTLY UNDER CONSTRUCTION.</p>

          <span>END OF ARCHIVE</span>
        </section>
      </main>
    </>
  );
}
