export interface Project {
  id: string;
  title: string;
  hook: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  hero?: boolean;
  architectureNotes: string[];
  caseStudy?: CaseStudySection[];
}

export interface CaseStudySection {
  heading: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: "beachpoint",
    title: "Beach Point Reservations",
    hook: "Real-time medical facility reservation system with WebSocket integration",
    stack: ["React", "TypeScript", "FastAPI", "WebSockets", "JWT", "Python"],
    repoUrl: "https://github.com/aristi1215",
    hero: true,
    architectureNotes: [
      "Client-side JWT handling with secure token refresh strategy",
      "WebSocket + REST coexistence for real-time and CRUD operations",
      "Feature-based routing with role-based access boundaries",
    ],
    caseStudy: [
      {
        heading: "Context",
        content:
          "Beach Point Med needed a reservation platform for their medical facilities. As Frontend Lead and Scrum Master, I owned the entire client-side architecture within a React + FastAPI/Python stack, collaborating closely with backend engineers and the Product Owner.",
      },
      {
        heading: "Problem",
        content:
          "The platform required real-time booking coordination across multiple courts and time slots, role-based UX for patients, staff, and administrators, and reliable state synchronization between concurrent users.",
      },
      {
        heading: "Responsibilities",
        content:
          "End-to-end frontend ownership: component architecture, routing, state management, API integration patterns, and WebSocket event handling. Led Scrum ceremonies, maintained Jira backlog with the PO, and set technical standards for the client codebase.",
      },
      {
        heading: "Architecture",
        content:
          "Feature-based directory structure with clear routing boundaries. JWT tokens stored client-side with a refresh strategy that maintained session continuity. Centralized error/loading patterns ensured consistent UX across all data-fetching surfaces.",
      },
      {
        heading: "Real-time & APIs",
        content:
          "WebSocket connections for reservation state changes enabled instant UI updates when slots were booked or released. REST endpoints handled CRUD operations, user management, and administrative workflows. Reconnection logic ensured resilience during network interruptions.",
      },
      {
        heading: "UI Systems",
        content:
          "Full design and implementation coverage: patient profiles, admin dashboard with analytics, courts/reservations booking interface, marketing home page, and informational about page. Consistent component patterns and accessibility considerations throughout.",
      },
      {
        heading: "Tradeoffs",
        content:
          "Chose WebSockets over polling for reservation state to minimize latency at the cost of connection management complexity. Kept client state minimal, treating the server as source of truth to avoid synchronization drift. Balanced scope vs. timeline by prioritizing core booking flow over secondary admin features.",
      },
      {
        heading: "Delivery",
        content:
          "Ran two-week sprints with the Product Owner, maintaining a prioritized backlog and clear acceptance criteria. Delivered iteratively with working software each sprint, enabling early stakeholder feedback and scope adjustments without disrupting velocity.",
      },
      {
        heading: "Outcome",
        content:
          "Completed all planned frontend surfaces: reservations, profiles, admin, and marketing pages. The system was architecturally sound and ready for deployment. Demonstrated through comprehensive repo documentation, screenshots, and architecture diagrams.",
      },
    ],
  },
  {
    id: "ab-testing",
    title: "A/B Testing Platform",
    hook: "Statistical experiment management with real-time variant allocation",
    stack: ["React", "TypeScript", "Node.js", "Statistics"],
    repoUrl: "https://github.com/aristi1215",
    demoUrl: "https://aristi1215.github.io",
    architectureNotes: [
      "Chi-square and t-test statistical engines for significance",
      "Real-time variant allocation with configurable traffic splits",
      "Dashboard with live experiment visualization",
    ],
  },
  {
    id: "ai-qa",
    title: "AI QA Automation",
    hook: "Intelligent test generation and quality assurance system",
    stack: ["Python", "OpenAI API", "React", "FastAPI"],
    repoUrl: "https://github.com/aristi1215",
    demoUrl: "https://aristi1215.github.io",
    architectureNotes: [
      "LLM-driven test case generation from natural language specs",
      "Automated regression detection with intelligent diffing",
      "Integration with CI/CD pipelines for continuous quality",
    ],
  },
  {
    id: "langara-groups",
    title: "Langara Groups App",
    hook: "Mobile study group coordination with real-time messaging",
    stack: ["React Native", "Supabase", "TypeScript", "Expo"],
    repoUrl: "https://github.com/aristi1215",
    architectureNotes: [
      "Supabase real-time subscriptions for instant group updates",
      "Cross-platform mobile UI with Expo managed workflow",
      "Role-based group permissions and moderation",
    ],
  },
];
