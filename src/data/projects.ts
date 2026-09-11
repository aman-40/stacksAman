export type ProjectStatus = "IN PRODUCTION" | "UNRELEASED" | "SELF INITIATED";

export interface Project {
  slug: string;
  id: string;
  title: string;
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
  image: string; // Placeholder for image
  links?: {
    live?: string;
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "project-one-production",
    id: "01",
    title: "[REAL PRODUCT NAME]",
    status: "IN PRODUCTION",
    shortDescription: "A real-world product currently being used to [actual purpose].",
    role: "[My actual role]",
    scope: "[Actual contribution]",
    overview: "TODO: Add overview for the real product.",
    problem: "TODO: Explain the problem solved.",
    approach: "TODO: Describe the approach taken.",
    buildDetails: "TODO: Explain the build process.",
    technologies: ["React", "Node.js", "TODO: Add real tech"],
    keyFeatures: ["TODO: Feature 1", "TODO: Feature 2"],
    challenges: "TODO: Describe challenges faced.",
    outcome: "TODO: Describe the final outcome and metrics.",
    learnings: "TODO: What did you learn?",
    image: "/images/project1-placeholder.jpg",
    links: {
      live: "#todo-live-link",
    }
  },
  {
    slug: "project-two-unreleased",
    id: "02",
    title: "[PRODUCT NAME]",
    status: "UNRELEASED",
    shortDescription: "A product developed from concept to working implementation but never publicly launched.",
    role: "[Actual role]",
    scope: "[Actual scope]",
    overview: "TODO: Add overview for the unreleased product.",
    problem: "TODO: Explain the problem it aimed to solve.",
    approach: "TODO: Describe the approach taken.",
    buildDetails: "TODO: Explain the build process.",
    technologies: ["Next.js", "TypeScript", "TODO: Add real tech"],
    keyFeatures: ["TODO: Feature 1", "TODO: Feature 2"],
    challenges: "TODO: Describe challenges faced.",
    outcome: "TODO: Describe the final outcome (even if unreleased).",
    learnings: "TODO: What did you learn?",
    image: "/images/project2-placeholder.jpg",
    links: {
      github: "#todo-github-link",
      demo: "#todo-demo-link"
    }
  },
  {
    slug: "project-three-self",
    id: "03",
    title: "[PROJECT NAME]",
    status: "SELF INITIATED",
    shortDescription: "Additional personal project exploring specific technologies and architectural patterns.",
    role: "Creator & Developer",
    scope: "Full-stack development, Design",
    overview: "TODO: Add overview for the self-initiated project.",
    problem: "TODO: Explain the problem it aimed to solve.",
    approach: "TODO: Describe the approach taken.",
    buildDetails: "TODO: Explain the build process.",
    technologies: ["TODO: Add real tech"],
    keyFeatures: ["TODO: Feature 1", "TODO: Feature 2"],
    challenges: "TODO: Describe challenges faced.",
    outcome: "TODO: Describe the outcome.",
    learnings: "TODO: What did you learn?",
    image: "/images/project3-placeholder.jpg",
    links: {
      github: "#todo-github-link"
    }
  }
];
