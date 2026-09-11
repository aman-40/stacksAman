export interface TechnologyCategory {
  title: string;
  items: string[];
}

export const technologies: TechnologyCategory[] = [
  {
    title: "INTERFACES",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS"
    ]
  },
  {
    title: "APPLICATIONS",
    items: [
      "Web Applications",
      "Dashboards",
      "SaaS",
      "Platforms",
      "Custom Software"
    ]
  },
  {
    title: "SYSTEMS",
    items: [
      "APIs",
      "Authentication",
      "Authorization",
      "Business Logic",
      "Data Processing"
    ]
  },
  {
    title: "DATA",
    items: [
      "SQL",
      "PostgreSQL",
      "NoSQL",
      "ORMs"
    ]
  },
  {
    title: "INTEGRATIONS",
    items: [
      "REST APIs",
      "Payments",
      "Email",
      "Maps",
      "Analytics",
      "AI Services"
    ]
  },
  {
    title: "INFRASTRUCTURE",
    items: [
      "Deployment",
      "Cloud",
      "Storage",
      "Caching",
      "Performance"
    ]
  }
];
