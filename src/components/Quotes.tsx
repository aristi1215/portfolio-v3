import { useState, useCallback, useMemo } from "react";
import quotes from "../content/quotes.json";
import { SectionHeader } from "./SystemOverview";

export default function Quotes() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];
  const total = quotes.length;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  // Pull author + topic from `note`, e.g. "Socrates — on deliberate practice"
  const { author, topic } = useMemo(() => {
    const n = quote.note ?? "";
    const [a, t] = n.split("—").map((s) => s.trim());
    return { author: a || "—", topic: t || "" };
  }, [quote.note]);

  return (
    <section id="codex" className="relative px-6 py-20 overflow-hidden">
      <div
        className="pointer-events-none absolute -top-20 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(167,139,250,0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <SectionHeader
            eyebrow="Codex"
            title="Classical wisdom · engineering lens."
            sub="A small library of principles I keep close. Cycle through them."
          />
          <div className="font-mono text-[11px] text-[#6c7585]">
            entry{" "}
            <span className="text-[#e6ebf2]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[#3a4151]">/</span>
            {String(total).padStart(2, "0")}
          </div>
        </div>

        <div className="mt-10 grid lg:grid-cols-[1fr_1fr] gap-5">
          {/* Quote panel */}
          <article className="panel relative overflow-hidden">
            <div className="window-chrome">
              <span className="dot" style={{ background: "#fb7185" }} />
              <span className="dot" style={{ background: "#f59e0b" }} />
              <span className="dot" style={{ background: "#4ade80" }} />
              <span className="ml-2 text-[#6c7585]">codex/{author.toLowerCase().replace(/\s+/g, "-")}.md</span>
              <span className="ml-auto text-[10px] text-[#4a5263]">md</span>
            </div>

            <div className="p-7 md:p-9">
              <span className="font-serif text-[5rem] leading-none text-[#1d2330] select-none">
                "
              </span>
              <p className="mt-2 font-serif text-[1.6rem] md:text-[1.85rem] leading-[1.35] text-[#e6ebf2] italic">
                {quote.classical}
              </p>
              <div className="mt-7 flex items-center gap-3">
                <span className="h-px flex-1 bg-gradient-to-r from-[#4ade80]/40 to-transparent" />
                <p className="font-mono text-[11.5px] text-[#aeb6c2]">
                  <span className="text-[#a78bfa]">{author}</span>
                  {topic && (
                    <>
                      {" "}
                      <span className="text-[#4a5263]">·</span>{" "}
                      <span className="text-[#6c7585]">{topic}</span>
                    </>
                  )}
                </p>
              </div>
            </div>
          </article>

          {/* Engineering interpretation panel */}
          <article className="codepad scanlines">
            <div className="window-chrome">
              <span className="text-[#4ade80]">▸</span>
              <span>juan@athens-os:~$</span>
              <span className="text-[#aeb6c2]">interpret --lens=engineering</span>
              <span className="ml-auto text-[10px] text-[#4a5263]">
                exit 0
              </span>
            </div>

            <div className="p-6 md:p-7 font-mono text-[13.5px] leading-[1.75] text-[#aeb6c2]">
              <div className="text-[#4a5263] mb-3">
                // translation: principle → practice
              </div>
              <div className="flex gap-3">
                <span className="text-[#4ade80] shrink-0">→</span>
                <p className="text-[#e6ebf2]">{quote.engineering}</p>
              </div>

              <div className="mt-7 flex items-center gap-3">
                <button
                  onClick={prev}
                  className="btn-ghost !py-1.5 !px-2.5 !text-[11px]"
                  aria-label="Previous insight"
                >
                  <ChevronLeft />
                  prev
                </button>
                <button
                  onClick={next}
                  className="btn-ghost !py-1.5 !px-2.5 !text-[11px]"
                  aria-label="Next insight"
                >
                  next
                  <ChevronRight />
                </button>

                <span className="ml-auto flex items-center gap-1.5">
                  {quotes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIndex(i)}
                      aria-label={`Go to insight ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index
                          ? "w-6 bg-[#4ade80] shadow-[0_0_8px_#4ade8088]"
                          : "w-1.5 bg-[#1d2330] hover:bg-[#2a3242]"
                      }`}
                    />
                  ))}
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ChevronLeft() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}
function ChevronRight() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}
