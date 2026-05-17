import { useState } from "react";
import { projects } from "../content/projects";
import type { Project } from "../content/projects";

export default function Work() {
  const heroProject = projects.find((p) => p.hero);
  const supporting = projects.filter((p) => !p.hero);

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">Selected Work</h2>

        {heroProject && <CaseStudy project={heroProject} />}

        <div className="mt-16">
          <h3 className="text-xl font-serif mb-6 text-muted">
            Supporting Projects
          </h3>
          <div className="grid gap-4">
            {supporting.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudy({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-xl p-6 md:p-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="text-xs font-medium text-accent uppercase tracking-wider">
            Hero Project
          </span>
          <h3 className="text-2xl font-serif mt-1">{project.title}</h3>
          <p className="text-muted mt-2">{project.hook}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 text-xs rounded-full bg-charcoal/5 text-stone border border-border-light"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Architecture Notes */}
      <div className="mb-6 p-4 rounded-lg bg-accent/[0.03] border border-accent/10">
        <h4 className="text-sm font-medium text-accent mb-2">
          Key Architecture Decisions
        </h4>
        <ul className="space-y-1.5">
          {project.architectureNotes.map((note, i) => (
            <li key={i} className="text-sm text-stone flex gap-2">
              <span className="text-accent/60 mt-0.5">→</span>
              {note}
            </li>
          ))}
        </ul>
      </div>

      {/* Case Study Content */}
      {project.caseStudy && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm font-medium text-accent hover:text-accent-dark transition-colors mb-4"
          >
            {expanded ? "Collapse case study ↑" : "Read full case study ↓"}
          </button>

          {expanded && (
            <div className="space-y-6 border-t border-border-light pt-6">
              {project.caseStudy.map((section) => (
                <div key={section.heading}>
                  <h4 className="text-sm font-medium text-charcoal uppercase tracking-wider mb-2">
                    {section.heading}
                  </h4>
                  <p className="text-stone text-sm leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {/* Links */}
      <div className="flex gap-3 mt-6 pt-4 border-t border-border-light">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-accent hover:text-accent-dark transition-colors"
          >
            View Repository →
          </a>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-border rounded-lg p-5 hover:border-accent/30 transition-all hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="font-medium text-charcoal">{project.title}</h4>
            {project.demoUrl && (
              <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-green-50 text-green-700 border border-green-200">
                Live Demo
              </span>
            )}
          </div>
          <p className="text-sm text-muted mt-1">{project.hook}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded-full bg-charcoal/5 text-stone"
          >
            {tech}
          </span>
        ))}
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs text-accent hover:text-accent-dark mt-3 transition-colors"
      >
        {expanded ? "Less ↑" : "Architecture details ↓"}
      </button>

      {expanded && (
        <ul className="mt-3 space-y-1.5 border-t border-border-light pt-3">
          {project.architectureNotes.map((note, i) => (
            <li key={i} className="text-xs text-stone flex gap-2">
              <span className="text-accent/60">→</span>
              {note}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-3 mt-3">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:text-accent-dark"
          >
            Repo
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-accent hover:text-accent-dark"
          >
            Demo
          </a>
        )}
      </div>
    </div>
  );
}
