import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolio.jsx";
import "./Projects.css";

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="project-card"
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
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -4,
      }}
    >
      {/* Mission Number */}

      <div className="project-num">
        {project.id}
      </div>


      {/* Project Title */}

      <h3 className="project-title">
        {project.title}
      </h3>


      {/* Tech Stack */}

      <div className="project-tags">

        {project.tags.map((tag) => (
          <span
            key={tag}
            className="tag"
          >
            {tag}
          </span>
        ))}

      </div>

    </motion.div>
  );
}


export default function Projects() {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="projects"
      className="projects"
    >

      {/* ================================================
          HEADER
      ================================================= */}

      <motion.div
        ref={ref}

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
        }}
      >

        <p className="section-label">
          Case Files
        </p>

        <h2 className="section-title">
          Active
          <br />
          Missions
        </h2>

      </motion.div>


      {/* ================================================
          PROJECTS
      ================================================= */}

      <div className="projects-grid">

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}

      </div>


      {/* ================================================
          VIEW ALL
      ================================================= */}

      <div className="projects-more">

        <Link
          to="/projects"
          className="projects-more-link"
        >
          <span>
            VIEW ALL MISSIONS
          </span>

          <span className="projects-more-arrow">
            →
          </span>
        </Link>

      </div>

    </section>
  );
}