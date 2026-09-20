import React from "react";
import { BatLogo } from "./BatLogo";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-row">
        <span className="footer-copy">© 2025 Ragul — Built in the Dark</span>

        <a href="#hero" className="footer-logo" aria-label="Back to top">
          <img src="/logo.png" alt="Ragul logo" width="60" height="28" />
        </a>

        <span className="footer-copy">Salem, India</span>
      </div>

      <div className="footer-bottom">
        <span className="footer-status">
          <i /> Signal online
        </span>
        <a href="#hero" className="footer-top">
          Return to surface <span>↑</span>
        </a>
      </div>
    </footer>
  );
}
