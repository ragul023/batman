// ============================================================
// PROJECT DATA
// ============================================================

export const projectData = [

  // ==========================================================
  // PROJECT 01
  // ==========================================================

  {
    id: "001",

    classification: "FINTECH SYSTEM",

    title: "Fintech Payment System",

    shortTitle: "PAYMENT CORE",

    description:
      "A full-stack fintech system built to explore how digital payment infrastructure can be modelled, routed and processed through interconnected financial services.",

    longDescription:
      "This project focuses on modelling a payment ecosystem with bank accounts, virtual payment addresses, transaction processing, bank mapping and NPCI-style routing. The system is designed around a modular backend architecture with PostgreSQL as the primary database.",

    category: "Backend / Fintech",

    status: "IN DEVELOPMENT",

    featured: true,

    year: "2026",

    stack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "JavaScript",
    ],

    highlights: [
      "Payment transaction flow",
      "Bank routing architecture",
      "VPA mapping",
      "Transaction processing",
      "PostgreSQL data modelling",
      "Modular backend architecture",
    ],

    github: "#",

    live: "#",

    accent: "FIN",
  },


  // ==========================================================
  // PROJECT 02
  // ==========================================================

  {
    id: "002",

    classification: "COLLEGE SYSTEM",

    title: "Smart Attendance System",

    shortTitle: "ATTENDANCE CORE",

    description:
      "A role-based college attendance platform designed around students, representatives, moderators, faculty, advisors and administrators.",

    longDescription:
      "The system is designed to model a complete college attendance workflow. It includes role-based access, timetable management, attendance sessions and separate workflows for students, representatives, moderators, faculty, advisors and administrators.",

    category: "Full Stack",

    status: "IN DEVELOPMENT",

    featured: true,

    year: "2026",

    stack: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
    ],

    highlights: [
      "Role-based architecture",
      "Student management",
      "Staff workflows",
      "Timetable management",
      "Attendance sessions",
      "PostgreSQL schema design",
    ],

    github: "#",

    live: "#",

    accent: "ATT",
  },


  // ==========================================================
  // PROJECT 03
  // ==========================================================

  {
    id: "003",

    classification: "DEVELOPER TOOL",

    title: "GitHub Monitor",

    shortTitle: "REPOSITORY WATCH",

    description:
      "A developer-focused monitoring system that receives GitHub events and processes repository activity through an event-driven backend.",

    longDescription:
      "The project connects with GitHub through OAuth and webhook integrations. Repository activity such as pushes, pull requests and issues is received by the backend and dispatched to dedicated event handlers for processing.",

    category: "Full Stack / Developer Tools",

    status: "BUILT",

    featured: true,

    year: "2026",

    stack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub API",
      "Webhooks",
    ],

    highlights: [
      "GitHub OAuth",
      "Webhook integration",
      "Event dispatcher",
      "Push event handling",
      "Pull request handling",
      "Issue event handling",
    ],

    github: "#",

    live: "#",

    accent: "GH",
  },


  // ==========================================================
  // PROJECT 04
  // ==========================================================

  {
    id: "004",

    classification: "DIGITAL EXPERIENCE",

    title: "Vizha Web",

    shortTitle: "EVENT STORIES",

    description:
      "A digital event storytelling concept focused on creating personalized websites for weddings, birthdays, anniversaries and other special occasions.",

    longDescription:
      "Vizha Web explores how traditional event invitations can become interactive digital experiences. The concept combines cinematic visual design, animations and personalized storytelling to create custom event websites.",

    category: "Frontend / Product",

    status: "BUILDING",

    featured: true,

    year: "2026",

    stack: [
      "React",
      "JavaScript",
      "Vite",
      "GSAP",
      "Framer Motion",
      "CSS",
    ],

    highlights: [
      "Cinematic UI",
      "Interactive storytelling",
      "Event websites",
      "Responsive design",
      "Animation systems",
      "Custom visual experiences",
    ],

    github: "#",

    live: "#",

    accent: "VIZ",
  },


  // ==========================================================
  // PROJECT 05
  // ==========================================================

  {
    id: "005",

    classification: "PERSONAL SYSTEM",

    title: "Developer Portfolio",

    shortTitle: "PERSONAL HQ",

    description:
      "A cinematic developer portfolio designed around a Batman-inspired visual identity to document projects, skills, experience and the developer journey.",

    longDescription:
      "The portfolio is designed as a personal command center rather than a conventional resume website. The interface uses a dark visual system, gold accents, motion and mission-inspired terminology to present technical work and experience.",

    category: "Frontend / UI",

    status: "BUILDING",

    featured: false,

    year: "2026",

    stack: [
      "React",
      "JavaScript",
      "Vite",
      "Framer Motion",
      "CSS",
    ],

    highlights: [
      "Custom visual identity",
      "Responsive interface",
      "Motion design",
      "Component architecture",
      "Data-driven sections",
      "Interactive UI",
    ],

    github: "#",

    live: "#",

    accent: "HQ",
  },

];


// ============================================================
// PROJECT CATEGORIES
// ============================================================

export const projectCategories = [
  "ALL",
  "FULL STACK",
  "BACKEND / FINTECH",
  "DEVELOPER TOOLS",
  "FRONTEND / PRODUCT",
  "FRONTEND / UI",
];