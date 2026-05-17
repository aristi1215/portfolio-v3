import { profile } from "../content/profile";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif mb-4">Get in Touch</h2>
            <p className="text-muted text-sm mb-6">
              Open to opportunities at early-stage startups. Let's build
              something meaningful.
            </p>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.email}`}
                className="block text-sm text-accent hover:text-accent-dark transition-colors"
              >
                {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-accent hover:text-accent-dark transition-colors"
              >
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-accent hover:text-accent-dark transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-end">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-paper rounded-md text-sm font-medium hover:bg-charcoal-light transition-colors w-fit"
            >
              Download Résumé (PDF)
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Juan Aristizabal. Built with React,
            TypeScript & Vite.
          </p>
          <p className="text-xs text-muted">
            Vancouver, BC · Open to relocation
          </p>
        </div>
      </div>
    </footer>
  );
}
