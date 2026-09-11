export type ProjectStatus = "IN PRODUCTION" | "UNRELEASED" | "SELF INITIATED";

export interface Project {
  slug: string;
  id: string;
  title: string;
  category: string;
  status: ProjectStatus;
  shortDescription: string;
  role: string;
  scope: string;
  overview: string;
  problem: string;
  approach: string;
  buildDetails: string;
  technologies: string[];
  keyFeatures: string[];
  challenges: string;
  outcome: string;
  learnings: string;
  image: string;
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "manoj-medical-hall",
    id: "01",
    title: "Manoj Medical Hall",
    category: "Healthcare Management Platform",
    status: "IN PRODUCTION",
    shortDescription: "A full-stack healthcare management platform designed around pharmacy, optical store, and eyecare clinic workflows.",
    role: "Full-Stack Developer",
    scope: "End-to-End Development",
    overview: "A comprehensive platform built to handle critical healthcare operations, streamlining processes for pharmacies and eyecare clinics.",
    problem: "Healthcare facilities often rely on fragmented, disconnected systems for patient and inventory management, leading to administrative bottlenecks and inefficiencies.",
    approach: "Developed a centralized, unified system architecture to securely handle clinical workflows alongside real-time inventory and billing management.",
    buildDetails: "Architected using a modern React frontend and a robust Node.js/PostgreSQL backend, utilizing real-time socket connections for synchronized data flow.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.io", "JWT", "PWA"],
    keyFeatures: [
      "Healthcare operations", 
      "Patient management", 
      "Queue management", 
      "Inventory management", 
      "Clinical workflows", 
      "Optical store management", 
      "Billing", 
      "Staff management"
    ],
    challenges: "Ensuring real-time synchronization across different departments (pharmacy, clinic, billing) securely and reliably.",
    outcome: "A unified platform that drastically reduces administrative overhead and streamlines patient care workflows.",
    learnings: "Deepened expertise in relational database modeling for complex healthcare workflows and real-time state management.",
    image: "/manoj-medical-hall.png",
    links: {
      live: "https://mmh-clinic.web.app/",
    }
  },
  {
    slug: "campus-management-platform",
    id: "02",
    title: "Campus Management Platform",
    category: "Education / Management Platform",
    status: "UNRELEASED",
    shortDescription: "A reusable college/campus management platform designed to centralize academic, administrative, and student activity workflows.",
    role: "Full-Stack Developer",
    scope: "Platform Architecture",
    overview: "A generalized, highly reusable platform for educational institutions to securely manage students, academics, and campus activities within a single portal.",
    problem: "Educational institutions struggle with decentralized data management, spanning academics, club activities, and heavy administrative document generation.",
    approach: "Designed a modular architecture that cleanly separates strict academic records from dynamic student life services within a unified dashboard.",
    buildDetails: "Built as a scalable web application capable of handling complex relational data for student activities, attendance tracking, and dynamic certificate generation.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "TypeScript"],
    keyFeatures: [
      "Student management", 
      "Attendance", 
      "Academic results", 
      "Certificate generation", 
      "Student services", 
      "Clubs", 
      "Campus activities", 
      "Publications / magazines"
    ],
    challenges: "Designing a flexible, scalable data model capable of being adapted and reused across different types of educational institutions.",
    outcome: "A robust, reusable foundation for campus administration that handles everything from daily attendance to formal certificate generation.",
    learnings: "Gained significant experience in building multi-tenant-ready architectures and complex document generation systems.",
    image: "/logo.png",
    links: {
      live: "https://dce-vert.vercel.app/"
    }
  },
  {
    slug: "medikit",
    id: "03",
    title: "Medikit",
    category: "SIH-Based Healthcare Platform",
    status: "SELF INITIATED",
    shortDescription: "A healthcare platform designed to simplify access to common healthcare services through a centralized digital experience.",
    role: "Full-Stack Developer",
    scope: "Frontend & Backend Integration",
    overview: "A dedicated initiative aimed at centralizing healthcare access, consolidating services from doctor appointments to emergency assistance in one place.",
    problem: "Patients face significant difficulties navigating disparate, disconnected systems to find available doctors, track hospital beds, and access emergency services.",
    approach: "Created a centralized digital hub that aggregates critical healthcare data and services into a single, easily accessible user interface.",
    buildDetails: "Leveraged Firebase ecosystem for rapid development and real-time data synchronization crucial for emergency healthcare scenarios.",
    technologies: ["React", "Node.js", "Express", "Firebase", "Firestore", "Firebase Authentication"],
    keyFeatures: [
      "Doctor appointments", 
      "Emergency assistance", 
      "Hospital information", 
      "Bed availability", 
      "Medicine tracking", 
      "Healthcare access"
    ],
    challenges: "Structuring NoSQL Firestore collections to efficiently query complex availability data in real-time.",
    outcome: "A functional, responsive platform that successfully demonstrates the viability of centralized digital healthcare access.",
    learnings: "Refined skills in product thinking for specialized healthcare solutions and integrating highly scalable NoSQL databases.",
    image: "/logo.png",
    links: {
      live: "https://medikit-247.web.app/"
    }
  },
  {
    slug: "elementum",
    id: "04",
    title: "Elementum",
    category: "Interactive Frontend / UI Experiment",
    status: "SELF INITIATED",
    shortDescription: "An interactive frontend experience created to explore modern UI design, advanced web animation, responsive layouts, and visual effects.",
    role: "Frontend Developer",
    scope: "UI/UX & Animation",
    overview: "An experimental frontend project focused entirely on pushing the boundaries of web engineering, interaction design, and visual storytelling.",
    problem: "Standard web layouts often lack the tactile feedback and dynamic visual engagement necessary to truly elevate a brand's digital presence.",
    approach: "Focused heavily on scroll-based interactions, custom cursor mechanics, and micro-animations to create a highly engaging, immersive user journey.",
    buildDetails: "Built utilizing GSAP and ScrollTrigger for high-performance, timeline-based animations paired strictly with Vanilla CSS for ultimate styling control.",
    technologies: ["React", "Vite", "GSAP", "ScrollTrigger", "Vanilla CSS"],
    keyFeatures: [
      "Interactive UI", 
      "Advanced animations", 
      "Scroll-based interactions", 
      "Custom cursor", 
      "Hover effects", 
      "Responsive layouts", 
      "Visual design", 
      "Frontend experimentation"
    ],
    challenges: "Ensuring complex, scroll-linked GSAP animations remain performant and jank-free across different devices and mobile screen sizes.",
    outcome: "A polished, highly interactive frontend showcase demonstrating extreme attention to visual detail and interaction engineering.",
    learnings: "Mastered advanced GSAP timelines, ScrollTrigger mechanics, and the intricacies of high-performance DOM manipulation.",
    image: "/logo.png",
    links: {
      live: "https://aman-40.github.io/trams/"
    }
  }
];
