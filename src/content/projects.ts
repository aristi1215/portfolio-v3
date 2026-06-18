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
    id: "visionflow",
    title: "VisionFlow",
    hook:
      "No-code computer vision platform for video intelligence — upload footage, design visual workflows in a node editor, and extract structured insights for security, social content, and analytics.",
    stack: [
      "TypeScript",
      "React",
      "Vite",
      "Express",
      "BullMQ",
      "Redis",
      "Supabase",
      "Google GenAI",
      "AWS S3",
      "Cloudinary",
    ],
    repoUrl: "https://github.com/aristi1215/visionFlow",
    architectureNotes: [
      "Monorepo with shared types, React frontend (@xyflow/react workflow editor), and Express API workers",
      "Async video processing via BullMQ + Redis — long-running CV jobs without blocking the UI",
      "Pluggable vision backends (Google GenAI) with S3/Cloudinary media pipeline for upload and delivery",
      "Architecture designed for limitless expandability — new models, nodes, and output formats without rewriting the core",
    ],
  },
  {
    id: "gumloop-mobile",
    title: "Gumloop Mobile",
    hook:
      "Mobile command center for Gumloop automations — connect via the public API to monitor runs, trigger workflows, get failure alerts, and review audit logs from your phone.",
    stack: [
      "Expo",
      "React Native",
      "TypeScript",
      "NativeWind",
      "Supabase",
      "TanStack Query",
      "expo-notifications",
    ],
    repoUrl: "https://github.com/aristi1215/gumloop-mobile",
    architectureNotes: [
      "Production Gumloop OpenAPI mapping with mock/live adapter swap for development without credentials",
      "Background notification watcher detects run state transitions and delivers local push alerts with deep linking",
      "Supabase auth, RLS, notification prefs/history, and run cache for enterprise-grade mobile ops",
      "expo-router file-based navigation with dashboard, flow detail, audit logs, and settings surfaces",
    ],
  },
  {
    id: "wrapped-media-marketing",
    title: "Wrapped Media Marketing",
    hook:
      "Campaign operations hub for vehicle-wrap marketing — manage drivers, live GPS and heatmaps, clients, payroll, and client-ready PDF reports in one authenticated dashboard.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Supabase",
      "Mapbox GL",
      "TanStack Query",
      "Recharts",
      "jsPDF",
    ],
    repoUrl: "https://github.com/aristi1215/wrapped-media-marketing",
    architectureNotes: [
      "Multi-module admin dashboard: campaigns, driver pool, live map, CRM-lite clients, and payroll CSV export",
      "Supabase Auth + PostgreSQL with protected routes and realtime-ready data layer",
      "Mapbox GL integration for fleet GPS tracking and heatmap visualization",
      "PDF report generation and form-heavy CRUD flows with React Hook Form + Zod validation",
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
      "Feature-folder routing with use-case driven architecture (LandingPage, UserMain, 404)",
      "Real-time reservation flows complemented by REST CRUD endpoints",
      "Deployed demo on Pages with production-minded UX across booking and admin journeys",
    ],
  },
  {
    id: "neetcode-solutions",
    title: "NeetCode Solutions",
    hook:
      "Interview-ready algorithm solutions across graphs, dynamic programming, arrays, and more — a living record of disciplined problem-solving and the fundamentals behind how I write production code.",
    stack: ["C++", "Data Structures", "Algorithms", "Graphs", "Dynamic Programming"],
    repoUrl: "https://github.com/aristi1215/neetcode-submissions-9phgelro",
    architectureNotes: [
      "20+ accepted solutions organized by topic — two pointers, BFS/DFS, heaps, DP tabulation, and more",
      "Solutions target optimal Big-O complexity with readable, review-ready implementations",
      "Synced from NeetCode.io — demonstrates deliberate practice, not random LeetCode grinding",
      "Pattern recognition skills that transfer directly to production architecture and debugging",
    ],
  },
];
