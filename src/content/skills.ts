export interface SkillGroup {
  group: string;
  items: string[];
  /** Short intro under the faux terminal — highlights context like your old portfolio. */
  description?: string;
}

export const skills: SkillGroup[] = [
  {
    group: "Frontend",
    description:
      "Strong product-side engineering — components, UX polish, and data on the glass.",
    items: [
      "HTML5 & CSS",
      "Tailwind CSS",
      "React",
      "TypeScript",
      "Next.js",
      "Framer Motion",
      "Redux",
      "TanStack Query",
      "Zustand",
    ],
  },
  {
    group: "Backend",
    description:
      "APIs and services in Node/Python; intermediate footing in JVM-style and systems langs when needed.",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "Python",
      "FastAPI",
      "GraphQL",
      "WebSockets",
      "PHP (intermediate)",
      "Java (intermediate)",
      "C++ (intermediate)",
      "Bash",
    ],
  },
  {
    group: "Data",
    description: "Relational first; document stores when the model fits.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQL", "Redis", "Supabase"],
  },
  {
    group: "Cloud & Platform",
    description:
      "Shipped workloads on AWS and the edge/CDN tier; Docker for repeatable environments.",
    items: [
      "AWS",
      "S3",
      "EC2",
      "ECS",
      "Edge / serverless workers",
      "Cloudflare",
      "Vercel",
      "Docker",
      "CI/CD",
      "GitHub Actions",
    ],
  },
  {
    group: "Mobile",
    description:
      "Production-style React Native delivery; Bubble for fast validation. Stretching toward native stacks.",
    items: ["React Native", "Bubble", "Kotlin · learning", "Swift · learning"],
  },
  {
    group: "Quality & Testing",
    description: "Catch regressions before users do.",
    items: ["Jest", "React Testing Library", "Cypress", "Playwright", "ESLint"],
  },
  {
    group: "Security",
    description:
      "Security-minded builds — auth, crypto basics, DB + browser posture. Offensive concepts studied ethically in sandboxed/lab contexts.",
    items: [
      "Networking",
      "Auth/Authorization",
      "Hashing/encryption",
      "XSS",
      "Clickjacking",
      "Cookie security"
    ],
  },
  {
    group: "Practices",
    description: "How the work actually ships with a team.",
    items: [
      "Scrum / Agile",
      "Git / GitHub",
      "Code review",
      "Technical documentation",
      "System design",
    ],
  },
  {
    group: "Languages",
    description: "I like building trust across regions and teams.",
    items: [
      "Spanish — native",
      "English — bilingual",
      "French — proficient",
      "Portuguese — basic",
    ],
  },
];
