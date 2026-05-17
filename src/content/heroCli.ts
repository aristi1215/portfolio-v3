import { profile } from "./profile";
import { education, experience } from "./experience";
import { projects } from "./projects";
import quotesRaw from "./quotes.json";
import { skills } from "./skills";

/** Welcome banner (shown once when the CLI mounts). */
export const HERO_CLI_WELCOME_LINES = [
  "Interactive tty — Juan's portfolio metadata.",
  "",
  'Try  `help`    list commands.',
  'Try  `info --skills --experience --projects --philosophy`',
] as const;

export type HeroCliRunResult =
  | { kind: "text"; output: string }
  | { kind: "clear" }
  | { kind: "noop" };

const QUOTES = quotesRaw as {
  classical: string;
  engineering: string;
  note?: string;
}[];

type Topic =
  | "skills"
  | "experience"
  | "projects"
  | "philosophy"
  | "education"
  | "contact";

const FLAGS: Record<string, Topic[]> = {
  skills: ["skills"],
  skill: ["skills"],
  s: ["skills"],

  experience: ["experience"],
  exp: ["experience"],
  xp: ["experience"],
  x: ["experience"],
  work: ["experience"],
  e: ["experience"],

  projects: ["projects"],
  project: ["projects"],
  p: ["projects"],

  philosophy: ["philosophy"],
  life: ["philosophy"],
  quotes: ["philosophy"],
  quote: ["philosophy"],
  l: ["philosophy"],
  ph: ["philosophy"],

  education: ["education"],
  edu: ["education"],

  contact: ["contact"],
  c: ["contact"],
};

function stripWrapper(flag: string): string {
  if (flag.startsWith("--")) return flag.slice(2).toLowerCase();
  if (flag.startsWith("-") && flag.length > 1) return flag.slice(1).toLowerCase();
  return flag.toLowerCase();
}

export function runHeroCliLine(line: string): HeroCliRunResult {
  const trimmed = line.trim();
  if (!trimmed) return { kind: "noop" };

  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const verb = tokens[0]!.toLowerCase();
  const rest = tokens.slice(1);

  if (verb === "clear") {
    return { kind: "clear" };
  }

  if (verb === "help" || trimmed === "?") {
    return { kind: "text", output: formatHelp() };
  }

  if (verb === "whoami") {
    if (rest.length) {
      return {
        kind: "text",
        output: "`whoami` takes no arguments. See `help`.",
      };
    }
    return { kind: "text", output: formatWhoami() };
  }

  if (verb === "info") {
    const topics = new Set<Topic>();

    if (rest.length === 0) {
      return { kind: "text", output: formatInfoUsage() };
    }

    for (const tok of rest) {
      if (!tok.startsWith("-")) {
        return {
          kind: "text",
          output: `Unexpected token '${tok}'. Flags must look like --skills or --experience.\n\n${formatInfoUsage()}`,
        };
      }

      const key = stripWrapper(tok);
      const map = FLAGS[key];
      if (!map) {
        return {
          kind: "text",
          output: `Unknown flag '${tok}'. See \`help\` for accepted topics.`,
        };
      }

      map.forEach((t) => topics.add(t));
    }

    const parts: string[] = [];
    for (const t of [...topicsOrder(topics)]) parts.push(renderTopic(t));
    return { kind: "text", output: parts.join("\n\n") };
  }

  return {
    kind: "text",
    output: `command not found: ${verb}. Type \`help\`.`,
  };
}

function topicsOrder(set: Set<Topic>): Topic[] {
  const order: Topic[] = [
    "skills",
    "experience",
    "projects",
    "education",
    "philosophy",
    "contact",
  ];
  return order.filter((t) => set.has(t));
}

function formatInfoUsage(): string {
  return [
    "usage: info [flags]",
    "",
    "  --skills           tech stack slices (grouped)",
    "  --experience       roles · summaries",
    "  --education        formal training",
    "  --projects         shipped / ongoing work",
    "  --philosophy       life + engineering worldview (quotes)",
    "  --contact          email + profiles",
    "",
    "combine flags, e.g.  info --skills --projects",
  ].join("\n");
}

function formatHelp(): string {
  return [
    "commands:",
    "",
    "  info [flags …]      portfolio dumps (combine flags)",
    "  whoami              identity snapshot",
    "  help | ?            commands",
    "  clear               reset transcript",
    "",
    "flags (long / short examples):",
    "  --skills -s · --experience -e -x (--xp)",
    "  --education (--edu)",
    "  --projects -p · --philosophy --life -l (--ph)",
    "  --contact -c",
    "",
    "run info with zero flags for the full synopsis.",
    "",
    formatInfoUsage(),
  ].join("\n");
}

function formatWhoami(): string {
  return [
    profile.name,
    profile.tagline,
    `${profile.location} · ${profile.relocation}`,
    `stack fingerprint: ${profile.chips.slice(0, 5).join(", ")} …`,
  ].join("\n");
}

function renderTopic(t: Topic): string {
  switch (t) {
    case "skills":
      return formatSkillsSection();
    case "experience":
      return formatExperienceSection();
    case "education":
      return formatEducationSection();
    case "projects":
      return formatProjectsSection();
    case "philosophy":
      return formatPhilosophySection();
    case "contact":
      return formatContactSection();
  }
}

function formatSkillsSection(): string {
  const body = skills
    .map((g) => {
      const line = `${g.group}\n${g.items.join(", ")}`;
      if (g.description) return `${line}\n  ↳ ${g.description}`;
      return line;
    })
    .join("\n\n");
  return `● skills — grouped\n\n${body}`;
}

function formatExperienceSection(): string {
  const rows = experience.map((r) => {
    const concur = r.concurrent ? " · concurrent role" : "";
    const bullets = r.highlights?.length
      ? `\n${r.highlights.map((h) => `    · ${h}`).join("")}`
      : "";
    const head =
      `${r.company} (${r.duration}) · ${r.title}${concur}` +
      `\n  ${r.startDate} → ${r.endDate} · ${r.location}`;
    return `${head}\n  ${r.summary}${bullets}`;
  });
  return `● experience\n\n${rows.join("\n\n")}`;
}

function formatEducationSection(): string {
  const rows = education.map(
    (e) => `${e.institution}\n  ${e.degree}\n  ${e.dates}`,
  );
  return `● education\n\n${rows.join("\n\n")}`;
}

function formatProjectsSection(): string {
  const rows = projects.map(
    (p) =>
      `${p.title}\n  ${p.hook}\n  tags: ${p.stack.slice(0, 7).join(", ")}`,
  );
  return `● projects\n\n${rows.join("\n\n")}`;
}

function formatPhilosophySection(): string {
  const rows = QUOTES.map((q, i) => {
    const cap = `#${String(i + 1).padStart(2, "0")}`;
    const note = q.note ? `\n      note: ${q.note}` : "";
    return `  ${cap} life\n       ${q.classical}\n\n  ${cap} craft\n       ${q.engineering}${note}`;
  });
  return `● philosophy · life × engineering (${QUOTES.length} excerpts)\n\n${rows.join("\n\n")}`;
}

function formatContactSection(): string {
  return [
    "● contact",
    "",
    `email     ${profile.email}`,
    `github    ${profile.github}`,
    `linkedin  ${profile.linkedin}`,
    `résumé    ${profile.resumeUrl}`,
  ].join("\n");
}
