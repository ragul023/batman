import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BatLogo } from "./BatLogo";
import "./Navbar.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Arsenal" },
  { to: "/projects", label: "Missions" },
  { href: "#contact", label: "Signal" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSectionLink = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", href);
    }
  };

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <Link to="/" className="nav-logo">
        <img src="/logo.png" alt="logo" width={"60px"} height={"28px"} />
        RAGUL
      </Link>
      <button
        type="button"
        className="nav-toggle"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="primary-navigation" className="nav-links">
        {links.map((l) => (
          <li key={l.href || l.to}>
            {l.href ? (
              <a href={l.href} onClick={(event) => handleSectionLink(event, l.href)}>
                {l.label}
              </a>
            ) : (
              <Link to={l.to} onClick={() => setMenuOpen(false)}>
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
