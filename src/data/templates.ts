export interface Template {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image?: string;
  technologies: string[];
  href: string;
}

export const templates: Template[] = [
  {
    id: "modern-cafe",
    title: "Modern Cafe Website",
    category: "Business",
    tags: ["cafe", "coffee", "restaurant", "food", "business", "landing page"],
    description: "A modern responsive website for cafes and food businesses with interactive menus and bookings.",
    image: "/logo.png", // Using existing placeholder/logo
    technologies: ["Next.js", "Tailwind", "GSAP"],
    href: "/contact?interest=modern-cafe",
  },
  {
    id: "healthcare-platform",
    title: "Hospital Management",
    category: "Applications",
    tags: ["hospital", "clinic", "management", "healthcare", "admin panel", "dashboard"],
    description: "A centralized platform for managing clinical workflows, patients, and pharmacy inventory.",
    image: "/manoj-medical-hall.png", 
    technologies: ["React", "Node.js", "PostgreSQL", "Socket.io"],
    href: "/projects/manoj-medical-hall",
  },
  {
    id: "campus-portal",
    title: "School & College Portal",
    category: "Applications",
    tags: ["school", "college", "student", "education", "dashboard", "university"],
    description: "A comprehensive campus management platform for academics and student activities.",
    image: "/logo.png",
    technologies: ["React", "Express", "PostgreSQL", "Prisma"],
    href: "/projects/campus-management-platform",
  },
  {
    id: "saas-landing",
    title: "SaaS Landing Page",
    category: "Professional",
    tags: ["saas", "software", "startup", "landing page", "corporate", "business"],
    description: "High-conversion landing page optimized for SaaS products and digital startups.",
    image: "/logo.png",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    href: "/contact?interest=saas-landing",
  },
  {
    id: "admin-dashboard",
    title: "Analytics Dashboard",
    category: "Applications",
    tags: ["dashboard", "admin panel", "analytics", "finance", "crm", "data"],
    description: "A complex data visualization dashboard for internal tooling and CRM management.",
    image: "/logo.png",
    technologies: ["React", "Recharts", "Tailwind", "Node.js"],
    href: "/contact?interest=admin-dashboard",
  },
  {
    id: "creative-portfolio",
    title: "Creative Portfolio",
    category: "Professional",
    tags: ["portfolio", "agency", "freelancer", "personal brand", "design"],
    description: "An immersive, interactive portfolio for creatives and agencies.",
    image: "/logo.png",
    technologies: ["Vite", "GSAP", "ScrollTrigger", "Vanilla CSS"],
    href: "/projects/elementum",
  },
  {
    id: "ecommerce-store",
    title: "E-commerce Storefront",
    category: "Business",
    tags: ["e-commerce", "store", "shop", "retail", "business"],
    description: "A high-performance headless e-commerce frontend designed for modern retail.",
    image: "/logo.png",
    technologies: ["Next.js", "Tailwind", "Stripe API"],
    href: "/contact?interest=ecommerce-store",
  },
  {
    id: "real-estate",
    title: "Real Estate Listings",
    category: "Business",
    tags: ["real estate", "property", "agency", "business"],
    description: "Property listing and real estate agency platform with dynamic filtering.",
    image: "/logo.png",
    technologies: ["Next.js", "PostgreSQL", "Tailwind"],
    href: "/contact?interest=real-estate",
  }
];
