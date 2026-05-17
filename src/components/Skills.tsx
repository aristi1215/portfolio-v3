import { skills } from "../content/skills";
import { SectionHeader } from "./SystemOverview";

const COMMANDS: Record<string, string> = {
  Frontend: "$ cat ~/.frontend",
  Backend: "$ cat ~/.backend",
  Data: "$ psql --list",
  "Cloud & Platform": "$ aws ecs list-clusters",
  Mobile: "$ npx react-native run-ios",
  Security: "$ openssl version -a",
  "Quality & Testing": "$ npm test --watch",
  Practices: "$ git log --oneline",
  Communication: "$ say -- venue=auditorium",
  "Human languages": "$ locale -a",
};

export default function Skills() {
  return (
    <section id="stack" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Languages, frameworks, and skills"
          sub="What I reach for first — grouped by where it lives in the system."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {skills.map((group, i) => (
            <div
              key={group.group}
              className="panel p-5 transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-semibold text-[#e6ebf2]">
                  {group.group}
                </h3>
                <span className="font-mono text-[10px] text-[#4a5263]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="font-mono text-[11.5px] text-[#6c7585] mb-3 flex items-center gap-2">
                <span className="text-[#4ade80]">▸</span>
                {COMMANDS[group.group] ||
                  `$ list --${group.group.toLowerCase().replace(/\s+/g, "-")}`}
                <span className="caret !w-[0.45em]" />
              </div>

              {group.description ? (
                <p className="text-[12px] leading-relaxed text-[#8e97a8] mb-3">
                  {group.description}
                </p>
              ) : null}

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1d2330]">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-[11.5px] font-mono rounded-md bg-white/[0.025] text-[#aeb6c2] border border-[#1d2330] hover:border-[#4ade80]/30 hover:text-[#e6ebf2] transition-colors"
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
