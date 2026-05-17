export interface Project {
  id: string;
  title: string;
  hook: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  hero?: boolean;
  /** Optional metadata rows shown on the featured hero card */
  heroMetrics?: { label: string; value: string }[];
  architectureNotes: string[];
  caseStudy?: CaseStudySection[];
}

export interface CaseStudySection {
  heading: string;
  content: string;
}

export const projects: Project[] = [
  {
    id: "withsmith",
    title: "Withsmith",
    hook:
      "AI session intelligence and safety layer for coding agents — command gatekeeper, debugging recorder, and structured evidence so dashboards and teammates can replay what actually happened.",
    stack: [
      "Python",
      "TypeScript",
      "React",
      "Express",
      "Prisma",
      "JavaScript",
      "HTML",
      "CSS",
      "Shell",
      "Makefile",
    ],
    repoUrl: "https://github.com/aristi1215/Withsmith",
    demoUrl: "https://blackbox-agents.pages.dev",
    hero: true,
    heroMetrics: [
      { label: "focus", value: "Agent safety · session evidence" },
      { label: "surface", value: "Python CLI · dashboard UI" },
    ],
    architectureNotes: [
      "`AGENT_WIT.yaml` contract gates commands with allow / ask / deny patterns before execution",
      "`witsmith run` logs observable evidence only — stdout/stderr, git diffs, exit codes, trace summaries — no hidden chain-of-thought",
      "JSONL session artifacts under `.witsmith/` for replay, analysis, and future memory/context integrations",
      "Repo spans CLI (`uv`), frontend workspace, and backend hooks for APIs and persistence",
    ],
    caseStudy: [
      {
        heading: "Context",
        content:
          "Withsmith (evolved from an earlier Blackbox naming thread) targets the gap between autonomous coding agents and accountable engineering: agents propose risky commands, but teams need receipts. The README frames it as a local safety, recorder, and evidence layer that integrates around existing workflows.",
      },
      {
        heading: "Problem",
        content:
          "Without structured gates and telemetry, agent sessions produce ambiguous narratives — hard to audit, reproduce, or hand off. The design insists on observable evidence (commands, decisions, outputs, git state) rather than speculative summaries.",
      },
      {
        heading: "Architecture",
        content:
          "The repository is organized into CLI (`apps/cli/witsmith`), backend workspace for APIs/data, and frontend workspace for dashboard/demo surfaces. Session lifecycle is intended to wrap the existing CLI rather than fork a parallel command surface.",
      },
      {
        heading: "CLI behavior",
        content:
          "Core flows include `witsmith run`, amend/rescue tooling, scaffold, version, and server mode. Runs resolve the repo contract, classify commands as allow/ask/deny, optionally execute, and append structured JSON events for downstream consumers.",
      },
      {
        heading: "Safety contract",
        content:
          "Teams declare intent via YAML patterns (e.g., allow tests, ask on risky migrations, deny destructive SQL or force-push). Runtime material stays under `.witsmith/` while contracts stay at project roots unless adapters move them.",
      },
      {
        heading: "Outcome",
        content:
          "The pinned README positions Withsmith as an incremental adoption path: reinforce discipline today with gates + logs; grow toward richer dashboards and memory-backed sessions tomorrow — always labeling inference separately from observed facts.",
      },
    ],
  },
  {
    id: "langara-groups-app",
    title: "Langara Groups App",
    hook:
      "Full-stack student collaboration platform for discovering classmates, forming study groups, and organizing course-centric communities outside scattered Discord threads.",
    stack: ["TypeScript", "React", "JavaScript", "REST API"],
    repoUrl: "https://github.com/aristi1215/langara-groups-app",
    architectureNotes: [
      "Layered client → REST API → persistence stack tuned for Langara-specific workflows",
      "Authentication, group discovery, and course/interest tagging centered UX",
      "Responsive UI aimed at replacing informal invite chains with durable academic networks",
    ],
  },
  {
    id: "jobvault",
    title: "JobVault",
    hook:
      "Privacy-first job application tracker — unified observability across channels, bounded follow-ups, and honest silence tracking without recruiter spam.",
    stack: ["TypeScript", "Next.js", "AWS CDK", "Lambda", "HTML", "CSS", "JavaScript"],
    repoUrl: "https://github.com/aristi1215/JobVault",
    architectureNotes: [
      "Monorepo split across Next.js web app, Lambda-first API, browser extension lane, shared parsing/types",
      "Infrastructure-as-code posture via CDK stacks covering auth, mail ingestion, and core services",
      "Product guarantees emphasize allowlisted inbox ingestion and transparent absence-of-signal UX",
    ],
  },
  {
    id: "demo-architecture-patterns",
    title: "Architecture Patterns Demo",
    hook:
      "Production-grade CRUD reference showcasing clean architecture — decoupled React client and Express API designed so databases or transports can be swapped without rewriting UI semantics.",
    stack: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    repoUrl: "https://github.com/aristi1215/demo-architecture-patterns",
    architectureNotes: [
      "Separation of concerns with modular backend boundaries and dependency inversion friendly seams",
      "Prisma-backed PostgreSQL today with intentional seams for swapping persistence adapters",
      "Documentation stresses replaceability — REST today, GraphQL or managed backends tomorrow without UI churn",
    ],
  },
  {
    id: "beachpoint-med",
    title: "Beach Point MED",
    hook:
      "Medical reservation platform frontend — WebSocket-backed coordination with JWT-aware client routing and comprehensive surfaces for patients, staff, and admins.",
    stack: ["React", "JavaScript", "HTML", "CSS", "WebSockets", "JWT", "REST"],
    repoUrl: "https://github.com/DoseiBrayin/BeachPointMED",
    demoUrl: "https://beachpointmed.pages.dev/",
    architectureNotes: [
      "Feature-folder routing aligned with Spanish/English README structural conventions from the upstream repo",
      "Real-time reservation flows complemented by REST CRUD endpoints",
      "Deployed demo hosted on Pages with production-minded UX coverage across booking + admin journeys",
    ],
  },
  {
    id: "west-canna-ecommerce",
    title: "West Canna Ecommerce",
    hook:
      "Modern full-stack ecommerce build exploring storefront UX, authentication, reusable component systems, and database-backed merchandising workflows.",
    stack: ["TypeScript", "React", "JavaScript", "CSS", "PostgreSQL", "REST API"],
    repoUrl: "https://github.com/aristi1215/west-canna-ecommerce",
    architectureNotes: [
      "Layered storefront → API → persistence architecture emphasizing scalable UI primitives",
      "Cart, catalog, PDP flows with auth-aware behaviors mirroring production ecommerce expectations",
      "PostgreSQL + PL/pgSQL footprint from GitHub signals richer DB-side logic where appropriate",
    ],
  },
];
