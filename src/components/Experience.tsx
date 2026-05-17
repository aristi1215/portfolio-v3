import type { EducationEntry } from "../content/experience";
import { experience, education } from "../content/experience";
import { SectionHeader } from "./SystemOverview";

function IconGraduationCap({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M22 10v6M2 10l10-5 10 5-10 5zM6 12v5c3 3 9 3 12 0v-5"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLayers({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 2l10 5-10 5L2 7l10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EducationCardIcon({ entry }: { entry: EducationEntry }) {
  return entry.icon === "layers" ? <IconLayers /> : <IconGraduationCap />;
}

export default function Experience() {
  return (
    <section id="runtime" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Runtime Log"
          title="Work experience"
          sub="Roles, scope, and outcomes — chronological, redacted only where contracts demand it."
        />

        <div className="mt-10 space-y-3">
          {experience.map((role, i) => (
            <article key={role.id} className="panel p-5 md:p-6 group">
              <div className="grid md:grid-cols-[1fr_auto] gap-3 md:items-start">
                <div className="runtime-row">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="text-[16px] font-semibold text-[#e6ebf2]">
                      {role.title}
                    </h3>
                    {role.concurrent && (
                      <span className="status-pill !border-[#f59e0b]/30 !bg-[#f59e0b]/[0.06] !text-[#f59e0b]">
                        Concurrent
                      </span>
                    )}
                  </div>
                  <p className="font-mono text-[12px] text-[#6c7585] mb-3">
                    <span className="text-[#38bdf8]">{role.company}</span>
                    <span className="mx-2 text-[#3a4151]">·</span>
                    {role.location}
                  </p>
                  <p className="text-[14px] text-[#aeb6c2] leading-relaxed">
                    {role.summary}
                  </p>
                  {role.highlights && (
                    <ul className="mt-3 space-y-1.5">
                      {role.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-[13.5px] text-[#aeb6c2] leading-relaxed"
                        >
                          <span className="text-[#4ade80]/80 font-mono shrink-0">
                            ›
                          </span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="font-mono text-[11.5px] text-[#6c7585] md:text-right md:min-w-[10rem]">
                  <div className="text-[#aeb6c2] whitespace-nowrap">
                    {role.startDate} – {role.endDate}
                  </div>
                  <div className="text-[#4a5263] mt-1">
                    [{String(experience.length - i).padStart(2, "0")}/
                    {String(experience.length).padStart(2, "0")}]
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 panel p-4 font-mono text-[12px] text-[#aeb6c2] flex items-start gap-3">
          <span className="text-[#f59e0b] shrink-0">⚠</span>
          <span>
            <span className="text-[#f59e0b]">overlap_note:</span> May–Aug 2024
            includes concurrent split-commitment roles. All overlap was
            disclosed; outcomes were tracked per engagement.
          </span>
        </div>

        {/* Education */}
        <div className="mt-16">
          <span className="eyebrow">Education</span>
          <div className="flex flex-wrap items-center gap-3 mt-2 mb-6">
            <span className="edu-heading-icon" aria-hidden>
              <IconGraduationCap />
            </span>
            <h3 className="text-[1.4rem] font-semibold tracking-[-0.02em] title-grad">
              Loaded modules.
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu) => (
              <article
                key={edu.institution}
                data-accent={edu.accent}
                className="edu-card panel p-5 md:p-6 group"
              >
                <div className="relative z-[1] flex gap-4">
                  <div className="edu-card-icon-wrap" aria-hidden>
                    <EducationCardIcon entry={edu} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-semibold text-[#e6ebf2] group-hover:text-white transition-colors duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-[13.5px] text-[#aeb6c2] mt-1">
                      {edu.degree}
                    </p>
                    <p className="text-[14px] text-[#aeb6c2]/95 leading-relaxed mt-3">
                      {edu.description}
                    </p>
                    <p className="font-mono text-[11.5px] text-[#6c7585] mt-3 pt-3 border-t border-[#1d2330]/90">
                      <span className="text-[#4a5263]">period:</span>{" "}
                      <span className="text-[#aeb6c2]">{edu.dates}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
