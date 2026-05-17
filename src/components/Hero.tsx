import { profile } from "../content/profile";

export default function Hero() {
  return (
    <section
      id="intro"
      className="min-h-screen flex flex-col justify-center pt-14 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-serif font-normal mb-4 tracking-tight">
            {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl">
            {profile.tagline}
          </p>
          <p className="text-sm text-muted mt-2">
            {profile.location} · {profile.relocation}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-10">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-paper rounded-md text-sm font-medium hover:bg-charcoal-light transition-colors"
          >
            <EmailIcon />
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-md text-sm font-medium text-charcoal hover:border-accent hover:text-accent transition-colors"
          >
            <GithubIcon />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-md text-sm font-medium text-charcoal hover:border-accent hover:text-accent transition-colors"
          >
            <LinkedInIcon />
            LinkedIn
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-md text-sm font-medium text-charcoal hover:border-accent hover:text-accent transition-colors"
          >
            <DownloadIcon />
            Résumé
          </a>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {profile.metrics.map((m) => (
            <div key={m.label} className="p-4 rounded-lg bg-charcoal/[0.02] border border-border-light">
              <div className="text-2xl font-serif font-medium text-charcoal">
                {m.value}
              </div>
              <div className="text-sm text-muted mt-0.5">{m.label}</div>
              {m.sublabel && (
                <div className="text-xs text-muted/70 mt-0.5">{m.sublabel}</div>
              )}
            </div>
          ))}
        </div>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2">
          {profile.chips.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 6L2 7" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
    </svg>
  );
}
