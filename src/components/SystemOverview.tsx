import { profile } from "../content/profile";

export default function SystemOverview() {
  return (
    <section id="overview" className="px-6 pb-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="System Overview"
          title="Engineering metrics."
          sub="Snapshot from production work, certifications, and shipped scope."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {profile.metrics.map((m, i) => (
            <div
              key={m.label}
              className="panel p-5 group transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#6c7585]">
                  m{String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="w-2 h-2 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade8088]"
                  aria-hidden="true"
                />
              </div>
              <div className="font-sans font-semibold text-[2.4rem] leading-none tracking-[-0.04em] text-[#e6ebf2] group-hover:text-[#4ade80] transition-colors">
                {m.value}
              </div>
              <div className="mt-3 text-sm text-[#aeb6c2]">{m.label}</div>
              {m.sublabel && (
                <div className="mt-1 font-mono text-[11px] text-[#6c7585]">
                  {m.sublabel}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-[clamp(1.75rem,3.4vw,2.6rem)] font-semibold tracking-[-0.025em] title-grad">
        {title}
      </h2>
      {sub && (
        <p className="text-[#aeb6c2] max-w-2xl text-[15px] leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}
