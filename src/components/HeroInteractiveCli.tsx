import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
} from "react";

import {
  HERO_CLI_WELCOME_LINES,
  runHeroCliLine,
} from "../content/heroCli";

type TranscriptLine =
  | { id: number; role: "out"; text: string }
  | { id: number; role: "in"; text: string };

let cliLineId = 0;
function nextId() {
  cliLineId += 1;
  return cliLineId;
}

function bootstrapHeroCliTranscript(): TranscriptLine[] {
  return [
    {
      id: nextId(),
      role: "out",
      text: HERO_CLI_WELCOME_LINES.join("\n"),
    },
  ];
}

function mergeCliTranscript(
  prev: TranscriptLine[],
  cmd: string,
): TranscriptLine[] {
  const res = runHeroCliLine(cmd.trim());
  if (res.kind === "noop") return prev;
  if (res.kind === "clear") return bootstrapHeroCliTranscript();
  return [
    ...prev,
    { id: nextId(), role: "in", text: cmd },
    { id: nextId(), role: "out", text: res.output },
  ];
}

export default function HeroInteractiveCli({
  inactive = false,
}: {
  /** When false, disables the prompt so focus stays in the snippet tab panel. */
  inactive?: boolean;
}) {
  const baseId = useId().replace(/:/g, "");
  const ttyOutId = `${baseId}-tty-out`;
  const ttyHintId = `${baseId}-tty-hint`;

  const [lines, setLines] = useState<TranscriptLine[]>(
    bootstrapHeroCliTranscript,
  );
  const [draft, setDraft] = useState("");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTail = useCallback(() => {
    requestAnimationFrame(() => {
      scrollerRef.current?.scrollTo({
        top: scrollerRef.current.scrollHeight,
        behavior: "smooth",
      });
    });
  }, []);

  useEffect(() => {
    scrollTail();
  }, [lines, scrollTail]);

  useEffect(() => {
    if (!inactive) return;
    inputRef.current?.blur();
  }, [inactive]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!draft.trim()) return;

    const cmd = draft.trimEnd();
    setDraft("");
    setLines((prev) => mergeCliTranscript(prev, cmd));
  };

  return (
    <div
      className={`relative codepad scanlines shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] flex flex-col min-h-[min(440px,max(340px,calc(100vh-13rem)))] max-h-[min(520px,70vh)] ${
        inactive ? "pointer-events-none select-none" : ""
      }`}
      {...(inactive && { "aria-hidden": true })}
    >
      <div className="window-chrome shrink-0">
        <span className="dot" style={{ background: "#fb7185" }} />
        <span className="dot" style={{ background: "#f59e0b" }} />
        <span className="dot" style={{ background: "#4ade80" }} />
        <span className="ml-2 text-[#6c7585]">~/portfolio · tty1</span>
        <button
          type="button"
          disabled={inactive}
          className="ml-auto text-[#4ade80]/80 hover:text-[#4ade80] hover:underline underline-offset-2 bg-transparent border-0 p-0 cursor-pointer font-mono text-[10px] disabled:opacity-40 disabled:pointer-events-none disabled:no-underline"
          onClick={() => inputRef.current?.focus()}
        >
          focus ⌁
        </button>
      </div>

      <div
        id={ttyOutId}
        ref={scrollerRef}
        className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-5 py-4 text-[12.5px] leading-[1.65]"
        role="log"
        aria-live="polite"
        aria-relevant="additions text"
        aria-label="Interactive terminal transcript"
      >
        {lines.map((row, i) => {
          if (row.role === "out") {
            const prev = lines[i - 1];
            const gap =
              prev === undefined ? "" : prev.role === "in" ? "mt-3" : "mt-8";
            return (
              <div
                key={row.id}
                className={`${gap} text-[#aeb6c2] whitespace-pre-wrap`}
              >
                {row.text}
              </div>
            );
          }

          return (
            <div key={row.id} className="mt-8 flex gap-2.5 whitespace-pre-wrap">
              <span
                className="shrink-0 select-none text-[#4ade80] font-mono text-[11.5px] pt-[1px]"
                aria-hidden="true"
              >
                ❯
              </span>
              <span className="text-[#e6ebf2]">{row.text}</span>
            </div>
          );
        })}
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t border-[#1d2330] px-5 py-3 flex items-center gap-2 shrink-0"
      >
        <label htmlFor={`${baseId}-tty-input`} className="sr-only">
          Terminal command input
        </label>
        <span
          className="font-mono text-[13px] text-[#4a5263] select-none"
          aria-hidden="true"
        >
          ~
        </span>
        <input
          ref={inputRef}
          id={`${baseId}-tty-input`}
          className="flex-1 min-w-0 bg-transparent font-mono text-[12.5px] text-[#e6ebf2] outline-none placeholder:text-[#3a4151] focus-visible:ring-1 focus-visible:ring-[#4ade80]/30 rounded px-1 -mx-1"
          spellCheck={false}
          autoComplete="off"
          autoCorrect="off"
          aria-controls={ttyOutId}
          aria-describedby={ttyHintId}
          placeholder="whoami … info --skills …"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key !== "Escape") return;
            setDraft("");
            inputRef.current?.blur();
          }}
        />
        <kbd className="hidden sm:inline-block font-mono text-[10px] text-[#4a5263] border border-[#1d2330] rounded px-1.5 py-0.5">
          Enter
        </kbd>
      </form>
      <span id={ttyHintId} className="sr-only">
        Commands: help or info flags such as skills projects philosophy.
      </span>
    </div>
  );
}
