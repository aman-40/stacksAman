export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  examples: string[];
  whatYouGet: string[];
  technologies: string[];
}

export const services: Service[] = [
  {
    id: "01",
    title: "Web Development",
    slug: "web-development",
    description: "Fast, accessible, and responsive web experiences built with modern frameworks. Focus on performance, SEO, and flawless user interactions.",
    examples: [
      "Marketing Websites",
      "Landing Pages",
      "Corporate Sites",
      "Interactive Web Experiences",
    ],
    whatYouGet: [
      "Responsive design for all devices",
      "Technical SEO optimization",
      "Performance optimization (Core Web Vitals)",
      "Accessible markup (a11y)",
      "Smooth animations and interactions"
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "GSAP", "Framer Motion"],
  },
  {
    id: "02",
    title: "Full-Stack Development",
    slug: "full-stack-development",
    description: "End-to-end digital products from database architecture to the user interface. Scalable applications built around your exact business logic.",
    examples: [
      "SaaS Platforms",
      "Internal Dashboards",
      "Customer Portals",
      "Complex Web Applications",
    ],
    whatYouGet: [
      "Complete end-to-end architecture",
      "User authentication and roles",
      "Custom business logic implementation",
      "State management",
      "Secure data handling"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "TypeScript", "React"],
  },
  {
    id: "03",
    title: "Backend & APIs",
    slug: "backend-and-apis",
    description: "Robust, secure, and scalable backend systems to power your applications. Designed for high performance and seamless data flow.",
    examples: [
      "RESTful APIs",
      "GraphQL APIs",
      "Microservices",
      "Serverless Functions",
    ],
    whatYouGet: [
      "Secure authentication & authorization",
      "Scalable infrastructure design",
      "Comprehensive API documentation",
      "Rate limiting and security measures",
      "High-performance endpoints"
    ],
    technologies: ["Node.js", "Express", "NestJS", "Python", "GraphQL", "REST"],
  },
  {
    id: "04",
    title: "Database Solutions",
    slug: "database-solutions",
    description: "Efficient data modeling, secure storage, and fast retrieval. Designing database structures that scale with your application.",
    examples: [
      "Relational Databases (SQL)",
      "NoSQL Databases",
      "Data Migration",
      "Schema Design",
    ],
    whatYouGet: [
      "Optimized query performance",
      "Scalable schema design",
      "Data security and backups",
      "Migration strategies",
      "Indexing and caching"
    ],
    technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Drizzle ORM"],
  },
  {
    id: "05",
    title: "API & Third-Party Integration",
    slug: "api-integration",
    description: "Connecting your application with external services to extend functionality without reinventing the wheel.",
    examples: [
      "Payment Gateways (Stripe)",
      "Authentication Providers",
      "CMS Integrations",
      "CRM Connections",
    ],
    whatYouGet: [
      "Seamless data synchronization",
      "Secure webhook handling",
      "Error handling and retry logic",
      "Extensible integration architecture",
      "Automated workflows"
    ],
    technologies: ["Stripe API", "OAuth", "Sanity CMS", "Supabase", "Webhooks"],
  },
  {
    id: "06",
    title: "Optimization & Bug Fixing",
    slug: "optimization-and-bug-fixing",
    description: "Refactoring legacy code, resolving stubborn bugs, and drastically improving the performance of existing applications.",
    examples: [
      "Performance Audits",
      "Code Refactoring",
      "Architecture Upgrades",
      "Security Patching",
    ],
    whatYouGet: [
      "Faster load times",
      "Cleaner, maintainable code base",
      "Reduced technical debt",
      "Improved Lighthouse scores",
      "Stable production environments"
    ],
    technologies: ["Lighthouse", "Chrome DevTools", "TypeScript Migration", "React Profiler"],
  },
];
