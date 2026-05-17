import {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useSyncExternalStore,
} from "react";
import quotes from "../content/quotes.json";
import { SectionHeader } from "./SystemOverview";

const AUTO_ADVANCE_MS = 7800;

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function reducedMotionSubscribeServer() {
  return () => {};
}

function reducedMotionSnapshotServer() {
  return false;
}

export default function Quotes() {
  const [index, setIndex] = useState(0);
  const [pauseHover, setPauseHover] = useState(false);
  const prefersReducedMotion = useSyncExternalStore(
    typeof window !== "undefined" ? subscribeReducedMotion : reducedMotionSubscribeServer,
    getReducedMotionSnapshot,
    reducedMotionSnapshotServer
  );

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

  useEffect(() => {
    if (total <= 1 || prefersReducedMotion) return undefined;

    const id = window.setInterval(() => {
      if (
        pauseHover ||
        document.visibilityState !== "visible" ||
        prefersReducedMotion
      ) {
        return;
      }
      setIndex((i) => (i + 1) % total);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(id);
  }, [pauseHover, prefersReducedMotion, total]);

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
            eyebrow="Philosophy"
            title="Life philosophy."
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

        <div
          className="mt-10 grid gap-5 lg:gap-6 lg:grid-cols-12 lg:items-start"
          onMouseEnter={() => setPauseHover(true)}
          onMouseLeave={() => setPauseHover(false)}
        >
          <figure className="panel overflow-hidden lg:col-span-5 xl:col-span-4 m-0 min-w-0 flex flex-col">
            <figcaption className="window-chrome border-b border-[#1d2330]">
              <span className="dot" style={{ background: "#fb7185" }} />
              <span className="dot" style={{ background: "#f59e0b" }} />
              <span className="dot" style={{ background: "#4ade80" }} />
              <span className="ml-2 text-[#6c7585]">~/codex/studio.png</span>
              <span className="ml-auto text-[10px] text-[#4a5263]">png · 1024²</span>
            </figcaption>
            <div
              className="relative flex flex-1 items-center justify-center p-4 sm:p-5 md:p-6 min-h-[220px]
                bg-[radial-gradient(ellipse_120%_100%_at_50%_0%,rgba(167,139,250,0.12),transparent_55%),linear-gradient(180deg,#0b0f16,#090c12)]"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-80"
                style={{
                  background:
                    "radial-gradient(circle at 48% 32%, rgba(167,139,250,0.14), transparent 42%)",
                }}
                aria-hidden="true"
              />
              <img
                src="/images/greek-statue-looking-computer.png"
                alt="Illustration of a marble statue seated at a modern workspace, tying classical thought to tooling."
                className="relative z-[1] w-full max-h-[min(460px,calc(100vh-12rem))] object-contain
                  drop-shadow-[0_28px_50px_-20px_rgba(0,0,0,0.85)]
                  xl:translate-y-[2%] rounded-md"
                loading="lazy"
                decoding="async"
              />
            </div>
          </figure>

          <div className="lg:col-span-7 xl:col-span-8 min-w-0 flex flex-col gap-5 md:gap-6">
            <article className="panel relative overflow-hidden">
              <div className="window-chrome">
                <span className="dot" style={{ background: "#fb7185" }} />
                <span className="dot" style={{ background: "#f59e0b" }} />
                <span className="dot" style={{ background: "#4ade80" }} />
                <span className="ml-2 text-[#6c7585]">
                  codex/{author.toLowerCase().replace(/\s+/g, "-")}.md
                </span>
                <span className="ml-auto text-[10px] text-[#4a5263]">md</span>
              </div>

              <div className="p-7 md:p-9">
                <span className="font-serif text-[5rem] leading-none text-[#1d2330] select-none">
                  "
                </span>
                <div className="sr-only" aria-live="polite" aria-atomic="true">
                  Insight {index + 1} of {total}: {quote.classical}
                </div>
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
                <span className="text-[#aeb6c2]">
                  interpret --lens=engineering
                </span>
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
                    className="btn-ghost cursor-pointer !py-1.5 !px-2.5 !text-[11px]"
                    aria-label="Previous insight"
                  >
                    <ChevronLeft />
                    prev
                  </button>
                  <button
                    onClick={next}
                    className="btn-ghost cursor-pointer !py-1.5 !px-2.5 !text-[11px]"
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
