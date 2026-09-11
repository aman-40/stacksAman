export interface Experience {
  id: string;
  company: string;
  roleTitle: string;
  date: string;
  description: string;
  role: string;
  focus: string[];
  contribution: string;
}

export const experiences: Experience[] = [
  {
    id: "01",
    company: "[COMPANY NAME]",
    roleTitle: "SOFTWARE DEVELOPMENT INTERN",
    date: "[DATE]",
    description: "TODO: Short description of actual responsibilities during the internship.",
    role: "Software Development Intern",
    focus: [
      "TODO: Actual area 1",
      "TODO: Actual area 2"
    ],
    contribution: "TODO: Actual contributions"
  },
  {
    id: "02",
    company: "[COMPANY / CLIENT]",
    roleTitle: "CONTRACT DEVELOPER",
    date: "[DATE]",
    description: "TODO: Short description of actual responsibilities as a contract developer.",
    role: "Contract Developer",
    focus: [
      "TODO: Actual area 1",
      "TODO: Actual area 2"
    ],
    contribution: "TODO: Actual contributions"
  },
  {
    id: "03",
    company: "CONFIDENTIAL CLIENT",
    roleTitle: "CONTRACT DEVELOPER",
    date: "[DATE]",
    description: "TODO: Short description of actual responsibilities without exposing confidential info.",
    role: "Contract Developer",
    focus: [
      "TODO: Actual area 1",
      "TODO: Actual area 2"
    ],
    contribution: "TODO: Actual contributions"
  }
];
