import { experience, education } from "../content/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-charcoal/[0.02]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experience.map((role) => (
              <div key={role.id} className="relative md:pl-8">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-accent bg-paper hidden md:block" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-medium text-charcoal">{role.title}</h3>
                    <p className="text-sm text-muted">
                      {role.company} · {role.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted whitespace-nowrap">
                      {role.startDate} – {role.endDate}
                    </span>
                    {role.concurrent && (
                      <span className="px-2 py-0.5 text-[10px] rounded-full bg-gold/10 text-gold border border-gold/20">
                        Concurrent
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-stone mt-1">{role.summary}</p>

                {role.highlights && (
                  <ul className="mt-3 space-y-1">
                    {role.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-stone flex gap-2">
                        <span className="text-accent/60">·</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Overlap Note */}
        <p className="text-xs text-muted mt-8 p-3 rounded bg-gold/5 border border-gold/10">
          Note: May–Aug 2024 includes concurrent part-time/split-commitment
          roles across multiple companies.
        </p>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-xl font-serif mb-6 text-muted">Education</h3>
          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.institution} className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                <div>
                  <p className="font-medium text-charcoal text-sm">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted">{edu.degree}</p>
                </div>
                <span className="text-sm text-muted">{edu.dates}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
