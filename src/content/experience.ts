export interface Role {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
  summary: string;
  highlights?: string[];
  concurrent?: boolean;
}

export const experience: Role[] = [
  {
    id: "daleros",
    title: "Full-Stack Software Engineer · Technical Partnerships",
    company: "DALEROS EVENTS",
    location: "Vancouver, BC",
    startDate: "Feb 2025",
    endDate: "Dec 2025",
    duration: "11 mo",
    summary:
      "Full-stack development with technical partnership responsibilities for event management platform.",
  },
  {
    id: "infera",
    title: "Software Development Lead",
    company: "Infera US",
    location: "United States",
    startDate: "May 2024",
    endDate: "Sep 2024",
    duration: "5 mo",
    summary:
      "Led software development efforts focusing on architecture cleanup, maintainability improvements, and team coordination.",
    highlights: [
      "Architecture cleanup and maintainability improvements",
      "Technical leadership and stakeholder communication",
    ],
    concurrent: true,
  },
  {
    id: "beachpoint",
    title: "Frontend Web Developer · Scrum Master",
    company: "Beach Point Med",
    location: "Colombia",
    startDate: "May 2024",
    endDate: "Aug 2024",
    duration: "4 mo",
    summary:
      "Frontend lead and Scrum Master for a medical reservation platform. Owned client-side architecture, WebSocket integration, and full UI coverage.",
    highlights: [
      "JWT auth/authorization on the frontend",
      "Client routing and architecture ownership",
      "WebSocket real-time reservations",
      "REST API consumption patterns",
      "Full UI: profile, admin, courts/reservations, home, about",
    ],
    concurrent: true,
  },
  {
    id: "dreamventure",
    title: "Software Developer",
    company: "Dream Venture Studios",
    location: "Miami, FL",
    startDate: "Dec 2023",
    endDate: "Jul 2024",
    duration: "8 mo",
    summary:
      "Software development across multiple projects and domains, contributing to rapid product delivery in a startup environment.",
    concurrent: true,
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
  dates: string;
  description: string;
  /** Visual accent for hover glow / icon tint */
  accent: "cyan" | "violet";
  /** Inline SVG variant for the card */
  icon: "cap" | "layers";
}

export const education: EducationEntry[] = [
  {
    institution: "Langara College",
    degree: "Diploma in Computer Studies (Computer Science)",
    dates: "Sept 2024 – Dec 2025",
    description:
      "Diploma in Computer Studies with a strong base in programming, databases, networking, and software architecture—from fundamentals through maintainable design. Coursework also covers systems analysis (requirements, process modeling), plus business context and professional communication so technical work stays aligned with stakeholders and team delivery.",
    accent: "cyan",
    icon: "cap",
  },
  {
    institution: "CESDE University",
    degree: "Software Development / Computer Software Engineering",
    dates: "Jan 2021 – Dec 2023",
    description:
      "Diploma centered on programming, structured databases, and software architecture, with repeated practice in agile ceremonies, backlog refinement, and iterative delivery. Leadership-focused modules rounded out the technical track—prioritization, collaboration, and guiding small teams through design and implementation decisions.",
    accent: "violet",
    icon: "layers",
  },
];
