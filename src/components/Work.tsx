import { useState } from "react";
import { projects } from "../content/projects";
import type { Project } from "../content/projects";
import { SectionHeader } from "./SystemOverview";

export default function Work() {
  const heroProject = projects.find((p) => p.hero);
  const supporting = projects.filter((p) => !p.hero);

  return (
    <section id="services" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Deployed Services"
          title="Selected work — production scope."
          sub="Each card is a system I owned end-to-end or led on the front. Architecture, tradeoffs, and outcome — no fluff."
        />

        <div className="mt-10 grid gap-5">
          {heroProject && <FeaturedCard project={heroProject} />}

          <div className="grid md:grid-cols-2 gap-5">
            {supporting.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="panel p-6 md:p-8 relative overflow-hidden">
      <div
        className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(closest-side, rgba(74,222,128,0.10), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative grid md:grid-cols-[1fr_auto] items-start gap-4 mb-5">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="status-pill">
              <span className="pulse-dot" aria-hidden="true" /> Live
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6c7585]">
              Featured · Hero Project
            </span>
          </div>
          <h3 className="text-[1.6rem] md:text-[1.9rem] font-semibold tracking-[-0.02em] text-[#e6ebf2]">
            {project.title}
          </h3>
          <p className="text-[#aeb6c2] mt-2 max-w-[42rem]">{project.hook}</p>
        </div>

        <dl className="font-mono text-[11px] text-[#6c7585] grid grid-cols-2 gap-x-6 gap-y-1 md:text-right md:block">
          <div className="flex md:justify-end gap-2">
            <dt>role:</dt>
            <dd className="text-[#e6ebf2]">Frontend Lead · Scrum Master</dd>
          </div>
          <div className="flex md:justify-end gap-2 mt-1">
            <dt>realtime:</dt>
            <dd className="text-[#4ade80]">WebSockets</dd>
          </div>
        </dl>
      </div>

      <div className="relative flex flex-wrap gap-1.5 mb-6">
        {project.stack.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <div className="relative panel-2 p-4 mb-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4ade80] mb-3">
          // architecture decisions
        </div>
        <ul className="space-y-1.5">
          {project.architectureNotes.map((note, i) => (
            <li
              key={i}
              className="flex gap-2 text-[14px] text-[#aeb6c2] leading-relaxed"
            >
              <span className="text-[#4ade80]/80 font-mono">{`0${i + 1}`}</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>

      {project.caseStudy && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-mono text-[12px] text-[#4ade80] hover:text-[#86efac] transition-colors"
          >
            {expanded ? "› collapse case study" : "› read full case study"}
          </button>

          {expanded && (
            <div className="mt-5 space-y-5 border-t border-[#1d2330] pt-5">
              {project.caseStudy.map((s) => (
                <div key={s.heading}>
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4ade80] mb-1.5">
                    // {s.heading.toLowerCase()}
                  </h4>
                  <p className="text-[14px] text-[#aeb6c2] leading-relaxed">
                    {s.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      <div className="relative flex gap-4 mt-6 pt-4 border-t border-[#1d2330]">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-[#aeb6c2] hover:text-[#4ade80] transition-colors"
          >
            ↗ repository
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] text-[#aeb6c2] hover:text-[#4ade80] transition-colors"
          >
            ↗ live demo
          </a>
        )}
      </div>
    </article>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel p-5 flex flex-col">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="text-[1.05rem] font-semibold text-[#e6ebf2] tracking-[-0.01em]">
          {project.title}
        </h4>
        <span className="status-pill !text-[10px]">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#4ade80]"
            aria-hidden="true"
          />
          Active
        </span>
      </div>
      <p className="text-[14px] text-[#aeb6c2] leading-relaxed">
        {project.hook}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.stack.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-4 space-y-1.5 pt-4 border-t border-[#1d2330]">
        {project.architectureNotes.slice(0, 2).map((note, i) => (
          <li
            key={i}
            className="flex gap-2 text-[12.5px] text-[#aeb6c2] leading-relaxed"
          >
            <span className="text-[#4ade80]/70 font-mono">▸</span>
            <span>{note}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-4 mt-auto pt-4">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11.5px] text-[#aeb6c2] hover:text-[#4ade80] transition-colors"
          >
            ↗ repo
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11.5px] text-[#aeb6c2] hover:text-[#4ade80] transition-colors"
          >
            ↗ demo
          </a>
        )}
      </div>
    </article>
  );
}
