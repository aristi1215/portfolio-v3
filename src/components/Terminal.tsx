import { useState, useRef, useEffect, useCallback } from "react";
import { profile } from "../content/profile";
import { projects } from "../content/projects";
import { skills } from "../content/skills";
import quotes from "../content/quotes.json";

interface OutputLine {
  type: "command" | "output" | "error" | "system";
  text: string;
}

const PROMPT = "juan@athens-os:~$ ";

const BOOT_TEXT = [
  "▓▓▓ ATHENS-OS v1.0 — Philosophical Engineering Terminal ▓▓▓",
  "",
  "Initializing knowledge base...",
  "Loading engineering principles...",
  "Mounting project archive...",
  "",
  "System ready. Type 'help' for available commands.",
];

function getCommandOutput(input: string): OutputLine[] {
  const cmd = input.trim().toLowerCase();

  if (cmd === "help") {
    return [
      { type: "system", text: "Available commands:" },
      { type: "output", text: "  help                    — Show this help" },
      { type: "output", text: "  boot                    — System initialization" },
      { type: "output", text: "  load projects           — List projects with links" },
      { type: "output", text: "  query philosophy        — Random philosophical insight" },
      { type: "output", text: "  skills                  — Engineering competencies" },
      { type: "output", text: "  contact                 — Get in touch" },
      { type: "output", text: "  clear                   — Clear terminal" },
    ];
  }

  if (cmd === "boot" || cmd === "initialize consciousness") {
    return BOOT_TEXT.map((t) => ({ type: "system" as const, text: t }));
  }

  if (cmd === "load projects" || cmd === "open archive") {
    return [
      { type: "system", text: "── Project Archive ──" },
      ...projects.map((p) => ({
        type: "output" as const,
        text: `  ${p.title} — ${p.hook}${p.demoUrl ? ` [demo: ${p.demoUrl}]` : ""}${p.repoUrl ? ` [repo: ${p.repoUrl}]` : ""}`,
      })),
    ];
  }

  if (cmd === "query philosophy") {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return [
      { type: "system", text: `"${quote.classical}"` },
      { type: "output", text: "" },
      { type: "output", text: `→ ${quote.engineering}` },
      { type: "output", text: "" },
      { type: "output", text: `  — ${quote.note}` },
    ];
  }

  if (cmd === "skills") {
    return [
      { type: "system", text: "── Engineering Competencies ──" },
      ...skills.map((g) => ({
        type: "output" as const,
        text: `  [${g.group}] ${g.items.join(", ")}`,
      })),
    ];
  }

  if (cmd === "contact") {
    return [
      { type: "system", text: "── Contact Channels ──" },
      { type: "output", text: `  Email:    ${profile.email}` },
      { type: "output", text: `  GitHub:   ${profile.github}` },
      { type: "output", text: `  LinkedIn: ${profile.linkedin}` },
    ];
  }

  if (cmd === "clear") {
    return [];
  }

  if (cmd === "") {
    return [];
  }

  return [
    {
      type: "error",
      text: `Command not found: '${input.trim()}'. Type 'help' for available commands.`,
    },
  ];
}

export default function Terminal() {
  const [output, setOutput] = useState<OutputLine[]>([
    { type: "system", text: "ATHENS-OS Terminal — type 'help' to begin." },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, []);

  useEffect(scrollToBottom, [output, scrollToBottom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input;

    if (cmd.trim().toLowerCase() === "clear") {
      setOutput([]);
      setInput("");
      return;
    }

    const result = getCommandOutput(cmd);
    setOutput((prev) => [
      ...prev,
      { type: "command", text: `${PROMPT}${cmd}` },
      ...result,
    ]);

    if (cmd.trim()) {
      setHistory((prev) => [...prev.slice(-19), cmd]);
    }
    setHistoryIdx(-1);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIdx = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(newIdx);
      if (history.length > 0) {
        setInput(history[history.length - 1 - newIdx] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = historyIdx - 1;
      if (newIdx < 0) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(newIdx);
        setInput(history[history.length - 1 - newIdx] || "");
      }
    }
  };

  return (
    <section id="terminal" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif mb-4">Console</h2>
        <p className="text-muted text-sm mb-8">
          An interactive terminal — explore projects, skills, and philosophy.
        </p>

        <div
          className="rounded-xl border border-border overflow-hidden bg-[#1a1a1a] text-[#e0ddd8] font-mono text-sm"
          role="region"
          aria-label="Interactive terminal"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#252525] border-b border-[#333]">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-[#888]">athens-os</span>
          </div>

          {/* Output */}
          <div
            ref={outputRef}
            className="p-4 h-80 overflow-y-auto"
            aria-live="polite"
            onClick={() => inputRef.current?.focus()}
          >
            {output.map((line, i) => (
              <div
                key={i}
                className={`whitespace-pre-wrap leading-relaxed ${
                  line.type === "command"
                    ? "text-[#7a9aaa]"
                    : line.type === "error"
                      ? "text-[#d48a8a]"
                      : line.type === "system"
                        ? "text-[#8a8a5a]"
                        : "text-[#c8c4bf]"
                }`}
              >
                {line.text || "\u00A0"}
              </div>
            ))}

            {/* Input line */}
            <form onSubmit={handleSubmit} className="flex items-center mt-1">
              <span className="text-[#7a9aaa] shrink-0">{PROMPT}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent outline-none text-[#e0ddd8] caret-accent"
                aria-label="Terminal input"
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
