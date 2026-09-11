export interface Service {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export const services: Service[] = [
  {
    id: "01",
    title: "WEB EXPERIENCES",
    description: "Responsive, fast and carefully structured websites designed around the brand, audience and goals.",
    examples: [
      "Business websites",
      "Portfolio websites",
      "Landing pages",
      "Marketing websites",
      "Custom web experiences",
    ],
  },
  {
    id: "02",
    title: "DIGITAL PRODUCTS",
    description: "From early concepts to working products.",
    examples: [
      "SaaS products",
      "Platforms",
      "MVPs",
      "Customer portals",
      "Community platforms",
      "Management systems",
    ],
  },
  {
    id: "03",
    title: "CUSTOM APPLICATIONS",
    description: "Applications built around specific workflows and requirements.",
    examples: [
      "Dashboards",
      "Admin panels",
      "Internal tools",
      "Booking systems",
      "Learning platforms",
      "Data-driven applications",
    ],
  },
  {
    id: "04",
    title: "BACKEND & SYSTEMS",
    description: "The systems behind the experience.",
    examples: [
      "APIs",
      "Authentication",
      "Authorization",
      "Business logic",
      "Data processing",
      "Database systems",
    ],
  },
  {
    id: "05",
    title: "INTEGRATIONS",
    description: "Connect products with the services they need.",
    examples: [
      "Third-party APIs",
      "Payments",
      "Email",
      "Maps",
      "Analytics",
      "Cloud services",
      "AI services",
    ],
  },
  {
    id: "06",
    title: "AUTOMATION",
    description: "Turn repetitive workflows into automated systems.",
    examples: [
      "Data processing",
      "Notifications",
      "Scheduled workflows",
      "API-based automation",
      "Internal tools",
    ],
  },
  {
    id: "07",
    title: "E-COMMERCE",
    description: "Custom digital storefronts and sales workflows.",
    examples: [
      "Online stores",
      "Product catalogs",
      "Checkout",
      "Order management",
      "Customer systems",
    ],
  },
  {
    id: "08",
    title: "AI & INTELLIGENT FEATURES",
    description: "Integrate intelligence into digital products.",
    examples: [
      "AI assistants",
      "AI search",
      "AI API integrations",
      "Document processing",
      "Recommendations",
      "Intelligent automation",
    ],
  },
  {
    id: "09",
    title: "OPTIMIZATION & MAINTENANCE",
    description: "Enhance, scale and secure existing systems.",
    examples: [
      "Bug fixing",
      "Performance optimization",
      "Refactoring",
      "API debugging",
      "Feature improvements",
      "Existing application development",
    ],
  },
];
