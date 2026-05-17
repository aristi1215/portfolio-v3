export interface SkillGroup {
  group: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "HTML/CSS",
      "Framer Motion",
      "Zustand",
      "Redux",
    ],
  },
  {
    group: "Backend",
    items: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express",
      "REST APIs",
      "WebSockets",
      "GraphQL",
    ],
  },
  {
    group: "Data",
    items: ["PostgreSQL", "SQL", "Supabase", "MongoDB", "Redis"],
  },
  {
    group: "Cloud & Platform",
    items: ["AWS", "Docker", "Vercel", "Cloudflare", "CI/CD", "GitHub Actions"],
  },
  {
    group: "Quality & Testing",
    items: ["Jest", "React Testing Library", "Cypress", "Playwright", "ESLint"],
  },
  {
    group: "Practices",
    items: [
      "Scrum/Agile",
      "Git/GitHub",
      "Code Review",
      "Technical Documentation",
      "System Design",
    ],
  },
];
