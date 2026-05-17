import { skills } from "../content/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-12">
          Skills & Engineering Mindset
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.group}
              className="p-5 rounded-lg border border-border-light hover:border-accent/20 transition-colors"
            >
              <h3 className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 text-xs rounded-md bg-charcoal/[0.03] text-stone border border-border-light"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
