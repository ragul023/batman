import React from "react";
import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaDownload,
} from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";

import "./Resume.css";

export default function Resume() {
  return (
    <>
            <section
      id="resume"
      className="resume"
    >

      <div className="resume-container">

        {/* ==================================================
            HEADER
        ================================================== */}

        <motion.div
          className="resume-header"

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
            amount: 0.2,
          }}

          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div>

            <p className="section-label">
              CLASSIFIED FILE
            </p>

            <h2 className="section-title">
              My
              <br />
              Dossier
            </h2>

          </div>


          <div className="resume-code">

            <span>
              FILE
            </span>

            <strong>
              RGL-RES-001
            </strong>

          </div>

        </motion.div>


        {/* ==================================================
            RESUME CARD
        ================================================== */}

        <motion.div
          className="resume-card cursor-area"

          initial={{
            opacity: 0,
            y: 35,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.15,
          }}

          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/* ==============================================
              FILE INFORMATION
          =============================================== */}

          <div className="resume-file">

            <motion.div
              className="resume-icon"

              whileHover={{
                y: -5,
                rotate: -3,
              }}

              transition={{
                duration: 0.3,
              }}
            >
              <FaFilePdf />
            </motion.div>


            <div className="resume-info">

              <span className="resume-type">
                RESUME / CV
              </span>

              <h3>
                Ragul — Full Stack Developer
              </h3>

              <p>
                My education, technical skills,
                projects, experience and
                development journey.
              </p>

            </div>

          </div>


          {/* ==============================================
              DOWNLOAD BUTTON
          =============================================== */}

          <a
            href="/resume.pdf"
            download="Ragul_Resume.pdf"
            className="resume-download cursor-hover"
            aria-label="Download Ragul's resume"
          >

            <FaDownload />

            <span>
              DOWNLOAD RESUME
            </span>

            <LuArrowUpRight />

          </a>


          {/* ==============================================
              GOLD ACCENT
          =============================================== */}

          <div className="resume-accent" />

        </motion.div>


        {/* ==================================================
            FOOTER
        ================================================== */}

        <motion.div
          className="resume-footer"

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
            duration: 0.5,
            delay: 0.25,
          }}
        >

          <span>
            LAST UPDATED
          </span>

          <span>
            2026
          </span>

          <span className="resume-footer-line" />

          <span>
            READY FOR DEPLOYMENT
          </span>

        </motion.div>

      </div>

    </section>
    </>

  );
}