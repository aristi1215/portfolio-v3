import { SectionHeader } from "./SystemOverview";

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14 items-start">
        <div>
          <SectionHeader eyebrow="The Engineer" title="What I build, and why." />
        </div>

        <div className="space-y-5 text-[15.5px] leading-[1.75] text-[#aeb6c2]">
          <p>
            I'm a full-stack engineer based in Vancouver. My happy zone is
            where a typed React/TypeScript front end meets a NodeJS/Express API
            and a real database — robust enough to survive production.
          </p>
          <p>
            At <span className="text-[#e6ebf2]">Beach Point Med</span>, I led
            the frontend team and ran Scrum for a JWT-secured reservations platform with WebSocket-driven real-time slots. At{" "}
            <span className="text-[#e6ebf2]">Infera US</span>, I focused
            on architecture cleanup and full-stack delivery for partner
            integrations.
          </p>
          <p>
            I care about the details that compound: feature-based directories
            that don't rot, error and loading patterns that stay consistent,
            and a tight loop between ship → measure → adjust. 
          </p>

          <div className="mt-6 panel p-4 font-mono text-[12px]">
            <div className="grid grid-cols-2 gap-y-2 gap-x-6">
              <Fact k="education" v="Langara · CS Dip. (Dec 2025)" />
              <Fact k="focus" v="Full-stack · Realtime · DX" />
              <Fact k="cert" v="AWS CCP — Dec 2025" />
              <Fact k="lang" v="EN · FR (DELF B2) · ES" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start gap-2">
      <span className="text-[#fb7185] shrink-0">{k}:</span>
      <span className="text-[#e6ebf2]">{v}</span>
    </div>
  );
}
