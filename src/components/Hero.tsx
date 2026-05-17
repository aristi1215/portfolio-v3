import { useState, type ReactNode } from "react";

import { profile } from "../content/profile";

import HeroInteractiveCli from "./HeroInteractiveCli";

export default function Hero() {
  const [heroCodePane, setHeroCodePane] = useState<0 | 1>(0);

  return (
    <section
      id="system"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden"
    >
      {/* Decorative background grid + glow */}
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-[0.4]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(74,222,128,0.10), rgba(56,189,248,0.05) 40%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto grid min-w-0 lg:grid-cols-[.7fr_0.66fr] gap-10 lg:gap-12 items-center">
        {/* ── Left column ─────────────────────────────── */}
        <div className="fade-up min-w-0">
          <h1 className="text-[clamp(2.5rem,6vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.03em] mb-5">
            <span className="title-grad">{profile.name}</span>
          </h1>

          <p className="font-mono text-[15px] text-[#aeb6c2] mb-3">
            <span className="text-[#fb7185]">const</span>{" "}
            <span className="text-[#e6ebf2]">role</span>{" "}
            <span className="text-[#6c7585]">=</span>{" "}
            <span className="text-[#4ade80]">"Full-Stack Engineer"</span>
            <span className="text-[#6c7585]">;</span>
          </p>
          <p className="text-[17px] md:text-[18px] text-[#aeb6c2] max-w-[38rem] lg:max-w-none leading-relaxed mb-6">
            React/TypeScript front-of-house. FastAPI &amp; SQL behind the
            counter. I build resilient, real-time products that ship — from
            JWT-secured medical platforms to WebSocket reservation systems.
          </p>

          <p className="font-mono text-[12px] text-[#6c7585] mb-8 flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>
              <span className="text-[#4a5263]">$</span> location
              <span className="text-[#6c7585]">→</span>{" "}
              <span className="text-[#aeb6c2]">{profile.location}</span>
            </span>
            <span>
              <span className="text-[#4a5263]">$</span> relocate
              <span className="text-[#6c7585]">→</span>{" "}
              <span className="text-[#4ade80]">true</span>
            </span>
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <ArrowIcon />
              Initiate Contact
            </a>
            <a
              href={profile.resumeUrl}
              className="btn-ghost"
              aria-label="Download résumé"
            >
              <DownloadIcon />
              Download Résumé
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="GitHub"
            >
              <GithubIcon />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {profile.chips.map((chip) => (
              <span key={chip} className="chip">
                <span className="text-[#4ade80]">▸</span>
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right column: code + profile.json cards ──── */}
        <div className="fade-up min-w-0" style={{ animationDelay: "120ms" }}>
          <div className="relative">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[24px] blur-2xl"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(74,222,128,0.18), rgba(56,189,248,0.10) 40%, transparent 75%)",
              }}
              aria-hidden="true"
            />

            <div
              className="flex justify-start gap-2 mb-3 font-mono text-[11px] text-[#8e97a8] items-center rounded-lg px-2 py-1.5 shadow-[0_8px_24px_-16px_rgba(0,0,0,0.75)] backdrop-blur-sm"
              role="tablist"
              aria-label="Switch between overview and quick info CLI"
              onKeyDown={(e) => {
                if (e.key === "ArrowLeft") {
                  e.preventDefault();
                  setHeroCodePane(0);
                } else if (e.key === "ArrowRight") {
                  e.preventDefault();
                  setHeroCodePane(1);
                }
              }}
            >
              <button
                type="button"
                role="tab"
                id="hero-tab-snippet"
                aria-selected={heroCodePane === 0}
                aria-controls="hero-pane-snippet"
                tabIndex={heroCodePane === 0 ? 0 : -1}
                className={`cursor-pointer rounded-md px-3 py-1.5 font-semibold border transition-colors tracking-wide ${
                  heroCodePane === 0
                    ? "border-[#4ade80]/55 text-[#e6ebf2] bg-[#4ade80]/12 shadow-[inset_0_0_0_1px_rgba(74,222,128,0.12)]"
                    : "border-[#283040] text-[#aeb6c2] bg-white/[0.03] hover:border-[#4ade80]/30 hover:bg-white/[0.06] hover:text-[#e6ebf2]"
                }`}
                onClick={() => setHeroCodePane(0)}
              >
                overview
              </button>
              <button
                type="button"
                role="tab"
                id="hero-tab-cli"
                aria-selected={heroCodePane === 1}
                aria-controls="hero-pane-cli"
                tabIndex={heroCodePane === 1 ? 0 : -1}
                className={`cursor-pointer rounded-md px-3 py-1.5 font-semibold border transition-colors tracking-wide whitespace-nowrap leading-tight ${
                  heroCodePane === 1
                    ? "border-[#4ade80]/55 text-[#e6ebf2] bg-[#4ade80]/12 shadow-[inset_0_0_0_1px_rgba(74,222,128,0.12)]"
                    : "hero-cli-tab-pulse border-[#283040] text-[#aeb6c2] bg-white/[0.03] hover:border-[#4ade80]/30 hover:bg-white/[0.06] hover:text-[#e6ebf2]"
                }`}
                onClick={() => setHeroCodePane(1)}
              >
                quick info CLI
              </button>
            </div>

            <div className="overflow-x-hidden rounded-[14px]">
              <div
                className="flex transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none"
                style={{
                  transform: `translateX(-${heroCodePane * 50}%)`,
                  width: "200%",
                }}
              >
                <div
                  id="hero-pane-snippet"
                  role="tabpanel"
                  aria-labelledby="hero-tab-snippet"
                  {...(heroCodePane !== 0 && { "aria-hidden": true })}
                  className="w-1/2 shrink-0 min-w-[50%] max-w-[50%]"
                >
                  {/* Code window — untouched visual */}
                  <div className="relative codepad scanlines shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
                    <div className="window-chrome">
                      <span className="dot" style={{ background: "#fb7185" }} />
                      <span className="dot" style={{ background: "#f59e0b" }} />
                      <span className="dot" style={{ background: "#4ade80" }} />
                      <span className="ml-2 text-[#6c7585]">
                        ~/portfolio/src/Engineer.ts
                      </span>
                      <span className="ml-auto text-[#4a5263] text-[10px]">
                        TS · 23 lines
                      </span>
                    </div>
                    <pre className="overflow-x-auto no-scrollbar p-5 text-[12.5px] leading-[1.7]">
                      <code>
                        <Line n={1}>
                          <span className="tok-com">// Resilient by design</span>
                        </Line>
                        <Line n={2}>
                          <span className="tok-key">export class</span>{" "}
                          <span className="tok-typ">Engineer</span>
                          <span className="tok-pun"> {"{"}</span>
                        </Line>
                        <Line n={3} indent={1}>
                          <span className="tok-key">private readonly</span>{" "}
                          <span className="tok-var">_stack</span>
                          <span className="tok-pun">:</span>{" "}
                          <span className="tok-typ">Stack</span>
                          <span className="tok-pun">;</span>
                        </Line>
                        <Line n={4} indent={1}>
                          <span className="tok-key">private readonly</span>{" "}
                          <span className="tok-var">_principles</span>
                          <span className="tok-pun">:</span>{" "}
                          <span className="tok-typ">string</span>
                          <span className="tok-pun">[];</span>
                        </Line>
                        <Line n={5}> </Line>
                        <Line n={6} indent={1}>
                          <span className="tok-key">async</span>{" "}
                          <span className="tok-fn">ship</span>
                          <span className="tok-pun">(</span>
                          <span className="tok-var">scope</span>
                          <span className="tok-pun">:</span>{" "}
                          <span className="tok-typ">Scope</span>
                          <span className="tok-pun">):</span>{" "}
                          <span className="tok-typ">Promise</span>
                          <span className="tok-pun">{"<"}</span>
                          <span className="tok-typ">Outcome</span>
                          <span className="tok-pun">{"> {"}</span>
                        </Line>
                        <Line n={7} indent={2}>
                          <span className="tok-key">const</span>{" "}
                          <span className="tok-var">plan</span>{" "}
                          <span className="tok-pun">=</span>{" "}
                          <span className="tok-key">await</span>{" "}
                          <span className="tok-fn">decompose</span>
                          <span className="tok-pun">(</span>
                          <span className="tok-var">scope</span>
                          <span className="tok-pun">);</span>
                        </Line>
                        <Line n={8} indent={2}>
                          <span className="tok-key">await</span>{" "}
                          <span className="tok-fn">test</span>
                          <span className="tok-pun">(</span>
                          <span className="tok-var">plan</span>
                          <span className="tok-pun">.</span>
                          <span className="tok-var">slices</span>
                          <span className="tok-pun">);</span>
                        </Line>
                        <Line n={9} indent={2}>
                          <span className="tok-key">return</span>{" "}
                          <span className="tok-key">this</span>
                          <span className="tok-pun">.</span>
                          <span className="tok-fn">deploy</span>
                          <span className="tok-pun">(</span>
                          <span className="tok-var">plan</span>
                          <span className="tok-pun">);</span>
                        </Line>
                        <Line n={10} indent={1}>
                          <span className="tok-pun">{"}"}</span>
                        </Line>
                        <Line n={11}>
                          <span className="tok-pun">{"}"}</span>
                        </Line>
                        <Line n={12}> </Line>
                        <Line n={13}>
                          <span className="tok-com">
                            // Currently shipping…
                          </span>
                        </Line>
                        <Line n={14}>
                          <span className="tok-pun">▸ </span>
                          <span className="tok-fn">deploy</span>
                          <span className="tok-pun">(</span>
                          <span className="tok-str">"Open to oportunities"</span>
                          <span className="tok-pun">)</span>
                          <span className="caret" />
                        </Line>
                      </code>
                    </pre>
                  </div>
                </div>
                <div
                  id="hero-pane-cli"
                  role="tabpanel"
                  aria-labelledby="hero-tab-cli"
                  {...(heroCodePane !== 1 && { "aria-hidden": true })}
                  className="w-1/2 shrink-0 min-w-[50%] max-w-[50%] pl-[10px]"
                >
                  <HeroInteractiveCli inactive={heroCodePane !== 1} />
                </div>
              </div>
            </div>

            {/* profile.json card */}
            <div className="mt-4 panel p-4 font-mono text-[12px] leading-relaxed">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#6c7585]">profile.json</span>
                <span className="text-[10px] text-[#4a5263]">
                  read-only · v3.0
                </span>
              </div>
              <pre className="text-[#aeb6c2] overflow-x-auto no-scrollbar">
                {`{
  "name": "${profile.name}",
  "role": "Full-Stack Engineer",
  "stack": ["React", "TypeScript", "Express", "Node.js", "MongoDB"],
  "location": "${profile.location}",
  "status": "Open to startup roles"
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-12">::</div>
    </section>
  );
}

function Line({
  n,
  indent = 0,
  children,
}: {
  n: number;
  indent?: number;
  children: ReactNode;
}) {
  return (
    <div className="flex">
      <span className="select-none w-7 shrink-0 text-right pr-3 text-[#3a4151]">
        {n}
      </span>
      <span style={{ paddingLeft: `${indent * 1.2}rem` }}>{children}</span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
