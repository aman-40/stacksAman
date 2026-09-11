export interface TimelineNode {
  id: string;
  date: string;
  title: string;
  subtitle?: string;
  description: string;
  focus?: string[];
  link?: string;
}

export const experiences: TimelineNode[] = [
  {
    id: "01",
    date: "August 2023",
    title: "Started Computer Science",
    subtitle: "Darbhanga College of Engineering",
    description: "Started B.Tech in Computer Science & Engineering. This marked the beginning of my formal computer science journey."
  },
  {
    id: "02",
    date: "September 2023",
    title: "🥈 2nd Winner — College Ideathon",
    description: "Participated in a college ideathon and secured 2nd place in the PPT presentation. This was one of my first experiences presenting a technical idea after joining college.",
    focus: ["Ideation", "Product thinking", "Problem solving", "Technical presentation"]
  },
  {
    id: "03",
    date: "September 2023",
    title: "🥈 2nd Winner — Science Exhibition",
    description: "Built and presented a home appliance automation prototype using Arduino Uno. Secured 2nd place in the science exhibition. This introduced me to the relationship between software and physical hardware.",
    focus: ["Arduino Uno", "Electronics", "Automation", "Hardware/software interaction", "Prototyping"]
  },
  {
    id: "04",
    date: "2023–2024",
    title: "Early Frontend Exploration",
    description: "Instead of only learning through tutorials, I started building projects and experimenting with visual experiences.",
    focus: ["HTML", "CSS", "JavaScript", "React", "GSAP", "Locomotive Scroll", "Responsive design", "Web animations", "Interactive UI"]
  },
  {
    id: "05",
    date: "2023–2024",
    title: "Soda — Interactive Beverage Showcase",
    subtitle: "Early Experiments",
    description: "Early frontend project created as an interactive showcase for a beverage brand. One of the main experiments was creating a 3D-style beverage can experience. This project represents an early stage of my frontend journey.",
    focus: ["React", "GSAP", "Locomotive Scroll", "Smooth scrolling", "Scroll-based animations", "Interactive UI", "CSS", "3D-style visual effects"],
    link: "https://drinks-unfinished.web.app/"
  },
  {
    id: "06",
    date: "September 2024",
    title: "Medikit — Internal SIH Selection",
    description: "Internally Selected for SIH 2024. A healthcare platform focused on doctor appointments, emergency assistance, hospital bed availability, and medicine tracking.",
    focus: ["React", "Node.js", "Express", "Firebase", "Firestore", "Firebase Authentication"]
  },
  {
    id: "07",
    date: "2025",
    title: "AI-Based Career Path Project",
    subtitle: "Internal SIH Selection",
    description: "Internally Selected for SIH 2025. The concept explored using AI to help users understand possible career paths based on factors such as interests, skills, goals, and user inputs.",
    focus: ["AI", "Career guidance", "Recommendation systems", "Product ideation", "Problem solving"]
  },
  {
    id: "08",
    date: "June 2025",
    title: "Frontend Developer",
    subtitle: "RKV Solution Pvt. Ltd. — Patna, Bihar",
    description: "My first professional software development experience. Developed responsive frontend interfaces, implemented UI components, and contributed within a professional development environment.",
    focus: ["Frontend functionality", "Usability", "UI components", "Responsive interfaces"]
  },
  {
    id: "09",
    date: "April–May 2026",
    title: "Full-Stack Developer",
    subtitle: "RKV Solution Pvt. Ltd. — Patna, Bihar",
    description: "Represented my progression from frontend development into full-stack engineering. Built responsive interfaces, integrated backend APIs, and worked with databases and application workflows.",
    focus: ["Frontend", "Backend", "REST APIs", "Databases", "Application logic", "Authentication"]
  },
  {
    id: "10",
    date: "August 2026",
    title: "AI Evaluator / AI Fellow — Contract",
    subtitle: "Handshake AI",
    description: "Participated in a contract-based AI evaluation program. Evaluated AI-generated outputs, assessed accuracy, relevance, and quality, and checked instruction adherence. Gave me exposure to systematic AI evaluation and a different perspective on AI systems.",
    focus: ["AI evaluation", "Output accuracy", "Instruction adherence"]
  },
  {
    id: "11",
    date: "2026–Present",
    title: "Building StackAman",
    description: "Continuing to build independent projects, improve my full-stack skills, experiment with frontend experiences, and develop StackAman as my personal developer identity and software studio.",
    focus: ["Full-stack development", "Frontend engineering", "Backend", "Databases", "System design", "APIs", "AI-assisted development"]
  },
  {
    id: "12",
    date: "May 2027",
    title: "Expected Graduation",
    subtitle: "B.Tech — Computer Science & Engineering",
    description: "Expected graduation from Darbhanga College of Engineering with a degree in Computer Science and Engineering."
  }
];
