import { profile } from "../content/profile";
import { SectionHeader } from "./SystemOverview";

export default function Footer() {
  return (
    <>
      <section
        id="contact"
        className="relative px-6 pt-20 pb-10 overflow-hidden"
      >
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(74,222,128,0.10), transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Establish Connection"
            title="Let's build something resilient."
            sub="Open to full-stack roles at startups and product teams. Quick to respond — async-friendly."
          />

          <div className="mt-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-5">
            <div className="codepad scanlines">
              <div className="window-chrome">
                <span className="dot" style={{ background: "#fb7185" }} />
                <span className="dot" style={{ background: "#f59e0b" }} />
                <span className="dot" style={{ background: "#4ade80" }} />
                <span className="ml-2 text-[#6c7585]">
                  juan@athens-os:~$
                </span>
                <span className="ml-auto text-[10px] text-[#4a5263]">
                  ttys001
                </span>
              </div>
              <div className="p-6 md:p-7 font-mono text-[13px] leading-[1.85]">
                <Line cmd="check --availability" />
                <div className="pl-4 text-[#aeb6c2]">
                  <span className="text-[#4ade80]">●</span> status:{" "}
                  <span className="text-[#e6ebf2]">
                    Available for startup roles
                  </span>
                </div>
                <div className="pl-4 text-[#aeb6c2]">
                  <span className="text-[#4ade80]">●</span> response:{" "}
                  <span className="text-[#e6ebf2]">&lt; 24h, async-friendly</span>
                </div>
                <div className="pl-4 text-[#aeb6c2]">
                  <span className="text-[#4ade80]">●</span> base:{" "}
                  <span className="text-[#e6ebf2]">
                    {profile.location} · open to relocation
                  </span>
                </div>

                <div className="mt-5">
                  <Line cmd="cat ~/.contact" />
                  <div className="pl-4">
                    <pre className="text-[#aeb6c2] whitespace-pre-wrap">
                      {`{
  "email":    "${profile.email}",
  "github":   "${profile.github.replace("https://", "")}",
  "linkedin": "${profile.linkedin.replace("https://", "")}"
}`}
                    </pre>
                  </div>
                </div>

                <div className="mt-5">
                  <span className="text-[#4ade80]">▸</span>{" "}
                  <span className="text-[#aeb6c2]">juan@athens-os:~$</span>{" "}
                  <span className="caret" />
                </div>
              </div>
            </div>

            <div className="panel p-6 flex flex-col gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4ade80] mb-2">
                  // primary channel
                </p>
                <a
                  href={`mailto:${profile.email}`}
                  className="block font-mono text-[15px] text-[#e6ebf2] hover:text-[#4ade80] transition-colors break-all"
                >
                  {profile.email}
                </a>
              </div>

              <div className="grid gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="btn-primary justify-center"
                >
                  <ArrowIcon />
                  Send Message
                </a>
                <a
                  href={profile.resumeUrl}
                  className="btn-ghost justify-center"
                >
                  <DownloadIcon />
                  Download Résumé
                </a>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost justify-center !py-2"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost justify-center !py-2"
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1d2330]">
        <div className="max-w-6xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-3 font-mono text-[11.5px] text-[#6c7585]">
          <p>
            <span className="text-[#4ade80]">●</span> © {new Date().getFullYear()}{" "}
            {profile.name} · built with React, TypeScript & Vite
          </p>
          <p>
            <span className="text-[#4a5263]">[</span>{profile.location}
            <span className="text-[#4a5263]">]</span> · v3.0
          </p>
        </div>
      </footer>
    </>
  );
}

function Line({ cmd }: { cmd: string }) {
  return (
    <div className="flex items-center gap-2 mb-1">
      <span className="text-[#4ade80]">▸</span>
      <span className="text-[#6c7585]">juan@athens-os:~$</span>
      <span className="text-[#aeb6c2]">{cmd}</span>
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
