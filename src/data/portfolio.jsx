import { MdEmail } from "react-icons/md";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiPostman,
  SiFigma,
  SiFramer,
  SiElectron,
} from "react-icons/si";

import {
  LuWebhook,
  LuDatabase,
  LuBrackets,
  LuBoxes,
  LuNetwork,
} from "react-icons/lu";
import { label } from "framer-motion/client";


// ============================================================
// CORE SKILLS
// ============================================================

export const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    category: "Frontend",
  },

  {
    name: "JavaScript",
    icon: <SiJavascript />,
    category: "Frontend",
  },

  {
    name: "HTML",
    icon: <SiHtml5 />,
    category: "Frontend",
  },

  {
    name: "CSS",
    icon: <SiCss />,
    category: "Frontend",
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "Frontend",
  },

  {
    name: "Node.js",
    icon: <FaNodeJs />,
    category: "Backend",
  },

  {
    name: "Express.js",
    icon: <SiExpress />,
    category: "Backend",
  },

  {
    name: "REST APIs",
    icon: <LuWebhook />,
    category: "Backend",
  },

  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    category: "Database",
  },

  {
    name: "MongoDB",
    icon: <SiMongodb />,
    category: "Database",
  },

  {
    name: "Java",
    icon: <FaJava />,
    category: "Programming",
  },

  {
    name: "Data Structures",
    icon: <LuBrackets />,
    category: "CS Fundamentals",
  },
];


// ============================================================
// ADDITIONAL TOOLS
// ============================================================

export const additionalSkills = [
  {
    name: "Vite",
    icon: <SiVite />,
  },

  {
    name: "Git",
    icon: <SiGit />,
  },

  {
    name: "GitHub",
    icon: <FaGithub />,
  },

  {
    name: "Postman",
    icon: <SiPostman />,
  },

  {
    name: "Axios",
    icon: <LuWebhook />,
  },

  {
    name: "Multer",
    icon: <LuDatabase />,
  },

  {
    name: "Figma",
    icon: <SiFigma />,
  },

  {
    name: "Framer Motion",
    icon: <SiFramer />,
  },

  {
    name: "GSAP",
    icon: <span>G</span>,
  },

  {
    name: "Electron",
    icon: <SiElectron />,
  },

  {
    name: "OOP",
    icon: <LuBoxes />,
  },

  {
    name: "DBMS",
    icon: <LuDatabase />,
  },

  {
    name: "Computer Networks",
    icon: <LuNetwork />,
  },
];


// ============================================================
// PROJECTS
// ============================================================

export const projects = [
  // {
  //   id: "001",

  //   title: "Fintech Payment System",

  //   desc:
  //     "A full-stack fintech system exploring digital payment infrastructure, bank routing, VPA mapping, transactions and NPCI-style payment flows using Node.js, Express and PostgreSQL.",

  //   tags: [
  //     "Node.js",
  //     "Express.js",
  //     "PostgreSQL",
  //     "REST API",
  //   ],

  //   featured: true,

  //   link: "#",
  // },

  {
    id: "002",

    title: "College Department Website",

    desc:
      "A role-based college attendance platform designed around students, representatives, moderators, faculty, advisors and administrators with timetable and attendance session management.",

    tags: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],

    featured: true,

    link: "#",
  },

  {
    id: "003",

    title: "GitHub Monitor",

    desc:
      "A GitHub monitoring application using OAuth and webhooks to receive and process repository events including pushes, pull requests and issues through an event-driven backend.",

    tags: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "GitHub API",
    ],

    featured: true,

    link: "#",
  },

  {
    id: "004",

    title: "Vizha Web",

    desc:
      "A digital event storytelling platform concept for creating personalized wedding, birthday and special-event websites with cinematic interactions and custom visual experiences.",

    tags: [
      "React",
      "Vite",
      "JavaScript",
      "GSAP",
      "Framer Motion",
    ],

    featured: true,

    link: "#",
  },
];


// ============================================================
// STATS
// ============================================================

export const stats = [
  {
    num: "3rd",
    label: "Year CSE",
  },

  {
    num: "5+",
    label: "Projects & Experiments",
  },

  {
    num: "MERN",
    label: "Primary Stack",
  },

  {
    num: "∞",
    label: "Things to Build",
  },
  {
    num:"1 Yr+",
    label:"Professional Experience"
  },

];


// ============================================================
// CONTACT
// ============================================================

export const contactLinks = [
  {
    icon: <MdEmail />,
    label: "Email",
    value: "ragul4172@gmail.com",
    href: "mailto:ragul4172@gmail.com",
  },

  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/ragul023",
    href: "https://github.com/ragul023",
  },

  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/ragulr23",
    href: "https://linkedin.com/in/ragulr23",
  },
];


// ============================================================
// EXPERIENCE
// ============================================================

export const experiences = [
  {
    id: "01",
    type: "INTERNSHIP",

    organization: "TNLEA",

    role: "Website Development Intern",

    period: "INTERNSHIP",

    description:
      "Worked as part of the website development team, contributing to web development tasks and gaining practical experience working with real-world development workflows.",

    tags: [
      "Web Development",
      "React",
      "JavaScript",
      "Git",
      "GitHub",
    ],

    status: "FIELD EXPERIENCE",

    icon: "laptop",
  },

{
  id: "02",
  type: "OPEN SOURCE",

  organization: "Avenx",

  role: "Open Source Contributor",

  period: "CONTRIBUTOR",

  description:
    "Enhanced Avenx.js routing capabilities by contributing route-level redirect handling and route metadata support to AvenxRouter. Worked across the router and route-matching layers, enabling declarative navigation and metadata propagation while following the project's existing architecture and testing workflow.",

  tags: [
    "JavaScript",
    "AvenxRouter",
    "Route Matching",
    "Open Source",
    "Unit Testing",
    "GitHub",
  ],

  status: "PUBLIC CONTRIBUTION",

  icon: "github",
},
];