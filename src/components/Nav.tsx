import { useState, useEffect } from "react";

const links = [
  { href: "#system", label: "System" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#services", label: "Services" },
  { href: "#runtime", label: "Projects" },
  { href: "#codex", label: "Philosophy" },
  { href: "#contact", label: "Connect" },
];

export default function Nav() {
  const [active, setActive] = useState("#system");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = links.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#07090d]/75 border-b border-[#1d2330]"
          : "bg-transparent border-b border-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#system"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          <span
            className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#1d2330] bg-[#0e1219] font-mono text-[11px] font-bold text-[#4ade80] group-hover:border-[#4ade80]/50 transition-colors"
            aria-hidden="true"
          >
            JA
            <span className="absolute -inset-px rounded-md bg-[#4ade80]/0 group-hover:bg-[#4ade80]/[0.04] transition-colors" />
          </span>
          <span className="hidden sm:flex items-center gap-2 text-[12px] font-mono">
            <span className="text-[#aeb6c2]">juan</span>
            <span className="text-[#6c7585]">@</span>
            <span className="text-[#38bdf8]">athens-os</span>
            <span className="text-[#6c7585]">:</span>
            <span className="text-[#4ade80]">~$</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 panel-2 px-1 py-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-3 py-1.5 rounded-md text-[12px] font-mono transition-all ${
                  active === link.href
                    ? "text-[#4ade80] bg-[#4ade80]/10"
                    : "text-[#aeb6c2] hover:text-[#e6ebf2] hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[#6c7585]">/</span>
                {link.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-primary !py-1.5 !px-3 !text-[11px]"
        >
          <span className="pulse-dot !w-1.5 !h-1.5" aria-hidden="true" />
          Available
        </a>

        <MobileMenu active={active} />
      </div>
    </nav>
  );
}

function MobileMenu({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[#aeb6c2] hover:text-[#e6ebf2]"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg width="22" height="22" viewBox="0 0 20 20" fill="currentColor">
          {open ? (
            <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
          ) : (
            <path
              d="M3 5h14M3 10h14M3 15h14"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          )}
        </svg>
      </button>
      {open && (
        <div className="absolute top-16 left-3 right-3 panel p-3">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-mono ${
                    active === link.href
                      ? "text-[#4ade80] bg-[#4ade80]/10"
                      : "text-[#aeb6c2]"
                  }`}
                >
                  <span className="text-[#6c7585]">/</span>
                  {link.label.toLowerCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
