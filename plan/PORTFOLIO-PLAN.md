# Portfolio strategy and development plan (Juan Aristizabal)

Master reference — also split into topic files in this folder for smaller context windows.

---

## Executive positioning (what we are selling)

- **Primary audience**: technical screeners + hiring managers at **early-stage startups** (broad applications, “full-stack breadth,” high ownership tone).
- **One-line identity (banner)**: **Full-stack engineer — React/TypeScript + Python (FastAPI) APIs + SQL**, with demonstrable product shipping habits.
- **Proof strategy (intentionally unconventional)**: credibility should not hinge on Cloudflare demos. Lead with **employer work + GitHub/repo artifacts + case studies**, and treat deployed demos as **supporting evidence** in a projects index (still linked, but not framed as “the proof anchor”).
- **Honest constraint we will design around**: **Beach Point Reservations** is the **hero deep-dive**, but it was **not deployed** during your involvement; you **owned frontend/UI architecture leadership**. The site will avoid apologetic tones; it will emphasize **decisions, architecture, tradeoffs, delivery under Scrum**, and a **strong GitHub narrative** (README, screenshots) rather than live traffic metrics.

### Sharpening the “discipline / continuous learning” wedge

That motivation is real, but employers buy **judgment + outcomes + reliability**. We will reframe the wedge on-page as:

- **Predictable delivery** (Scrum leadership, stakeholder communication, ticket throughput where safe to state)
- **Maintainability mindset** (architecture cleanup narrative matches Infera story)
- **Technical growth trajectory** (skills graph + “what I’m strengthening next,” measured—not vibes)

## Visual system (your clarified constraints)

- **80%**: recruiter-grade clarity—scannable hierarchy, restrained motion, crisp typography, plenty of whitespace, “luxury editorial / premium product” feeling.
- **20%**: subtle classical atmosphere as **purely visual mood** (marble/statue textures, column rhythm, grid textures, cinematic spacing)—**not** a personal “philosophy biography.”
- **Explicitly de-emphasized**: chef / oratory / academic philosophy as **non-central** narrative. Optional **small** “Beyond code” blurb (3–5 bullets max), only if it humanizes without diluting engineering focus.
- **Magic UI (implementation note)**: your name should get a **single premium focal effect** sourced from Magic UI patterns via the Magic UI MCP during implementation; it must stay **subtle** and aligned with the editorial baseline (no gimmick).

## Information architecture (proposed site map)

1. **Hero / above-the-fold**
   - Name + role banner + location + relocation note (lightweight)
   - Primary CTAs: **Email, GitHub, LinkedIn**
   - Secondary CTA: **Download résumé (PDF)**
   - **Metrics strip** (3–5 items max): **v1 may use placeholder values** in code/content config; replace when final numbers are ready. Agreed headline inputs: **2.5 years** experience, **100+** shipped functionalities (see Metrics). See “Metrics display spec” below.
   - “What I build” chips: React/TS, FastAPI/Python, SQL, RN (secondary), cloud basics (secondary)
2. **Selected work (case studies)**
   - **Beach Point Reservations (hero case study)**:
     - Problem/context → responsibilities (frontend ownership) → system overview → frontend architecture → API integration boundaries → data model highlights → engineering decisions/tradeoffs → Scrum delivery story → risks/limitations (deployment neutral)
     - Proof module: README screenshots + setup + architecture diagram + “how to run locally”
   - **Supporting projects** (concise cards, expandable details):
     - A/B testing platform and AI QA system: framed as **supporting demonstrations**, not the credibility spine
     - Langara Groups App (mobile + Supabase)
     - Optional condensed employer capsules (Infera/Dream Venture) depending on narrative length
3. **Experience timeline**
   - **Month/year-accurate ranges** with honest handling of overlap: **May–Aug 2024** spans concurrent **part-time / split-commitment** roles (Dream Venture + Infera + Beach Point). **DALEROS** is a **short, non-competing row** (minimized prominence per your direction).
4. **Skills + engineering mindset**
   - Structured skills (not a giant tag cloud): group by **frontend**, **backend**, **data**, **platform/cloud**, **quality** (tests/observability), **security (light mention only)**
5. **Knowledge graph section (lightweight)**
   - Static graph derived from a curated JSON model: nodes = skills/projects/concepts; edges = relationships
   - Keep it performant: prefer **SVG + lightweight layout** (or a tiny force simulation capped) rather than heavy graph libs unless necessary
6. **Philosophy terminal (bounded novelty)**
   - Thematic command language (your examples), local-only execution, fast, keyboard accessible
   - Must degrade gracefully: site remains fully usable with terminal ignored
7. **Quotes interaction (local JSON only)**
   - Randomized + interactive mapping to engineering interpretation (strictly as **design metaphor**, not implying formal philosophy study)
8. **Ambient interactions**
   - Cursor glow / subtle particles / light distortion: **opt-in or reduced-motion respected**, must be off or minimized under `prefers-reduced-motion`
9. **Testimonials**
   - **v1: omit entirely** (no empty scaffold, no “coming soon”). Add later when quotes exist.
10. **Footer**
    - Contact + social + small legal (optional) + “built with…” minimal

**v1 explicitly out of scope (per your answers)**: blog/technical notes publishing system (can be added later).

## Recruiter psychology packaging (what each section must accomplish)

- **Hero**: instant comprehension + trust + next action in 10 seconds.
- **Case study**: demonstrate **thinking** (tradeoffs), not feature bragging.
- **Work history**: clarify scope, reduce confusion (dates, role type, tech); **do not imply full-time exclusivity** where roles overlapped part-time.
- **Skills**: map to job postings (ATS-friendly synonyms) without looking like keyword stuffing.
- **Interactions**: increase memorability **without** hurting scan speed.

## Metrics strategy (tiered + agreed hero copy)

### Agreed headline metrics (your direction — May 2026)

- **Years of experience**: use **2.5** (consistent across site, résumé, LinkedIn).
- **Shipped functionalities**: **100+**, framed as a **cumulative count across your professional experience to date** (tickets, features, fixes, and similar delivered items aggregated across roles—not a single-project count). Optional micro-copy under the stat or in FAQ: *“Cumulative across roles and projects.”*
- **Implementation**: the hero strip may ship with **placeholder numbers** for any remaining slots (e.g. future performance KPIs); **you will replace** these in content/config when ready.

### Credibility rule (when replacing placeholders)

For **final** public copy, prefer numbers you can defend (**Tier A–C** as in prior drafts). During **design/development**, placeholders are acceptable per your request.

- **Tier A**: measured (p95, bundle size, bytes, error rates).
- **Tier B**: substantiated proxies (tickets/PRs in a defined window—worded carefully).
- **Tier C**: qualitative proof paired with diagrams/screenshots (no fake percentages).

**Beach Point** case study depth remains **Tier C-heavy** on engineering (WebSockets, JWT client boundaries, UI scope) unless you add measured KPIs later.

### Metrics display spec (hero strip)

- **Slots (example)**: **2.5 yrs** · **100+ shipped** · **AWS CCP** (or cert year) · **1–2 placeholders** (e.g. “— ms p95” or “TBD”) until you set final KPIs.
- **Supporting demos**: linked from project cards; avoid inventing **live user** or **traffic** metrics without data.

See **`employment-education-facts.md`** for certs, education, employment, and Beach Point ownership bullets.

## Beach Point hero case study — narrative outline (copy scaffold)

Use this order for the long-form case study (same story can be shortened for cards). Tone: **clarity over hype**.

1. **Context** — reservation product for Beach Point Med; your role: **frontend lead + Scrum Master**; stack: **React**, **FastAPI/Python** backend (mention team context in one sentence).
2. **Problem** — what uncertainty existed (coordination complexity, real-time booking expectations, role-based UX)—stay factual, not marketing fluff.
3. **Responsibilities** — what you owned end-to-end on the **client** (architecture, major surfaces, ceremony with PO, Jira/Scrum).
4. **Architecture** — client structure (routing, state, feature boundaries); where **JWT** lives (storage, refresh strategy if applicable—only what’s true); error/loading patterns.
5. **Real-time + APIs** — **WebSocket** for reservations: what messages/events, reconnection or fallback stance, how REST + WS coexist (high level).
6. **UI systems** — surfaces you named: profile, admin, courts/reservations, marketing pages; accessibility and consistency choices (brief).
7. **Tradeoffs** — 2–3 bullets (e.g. WS vs polling, client state vs server source of truth, scope vs time)—this is the “mid-level signal.”
8. **Delivery** — Scrum: how backlog/priority worked with PO; **no fictional velocity**; optional Tier B if you have ticket/sprint evidence.
9. **Outcome / limitations** — **no public deployment** during your tenure: pivot to **what was demonstrably completed** (screens, flows, repo). Optional: short Loom walkthrough.
10. **Links** — GitHub, teammates’ areas as “backend owned by team” if needed.

## Beach Point — GitHub README uplift checklist (proof module)

Ship these so the repo carries weight when the site points to it:

- [ ] **Hero screenshot** (or 2–3) of main flows: reservations, admin, profile.
- [ ] **Architecture diagram** (PNG/SVG): browser → React app → REST + WebSocket → API (no secret URLs).
- [ ] **Local setup**: prerequisites, `.env.example` (sanitized keys), `npm`/`pnpm` commands, how to point at mock or dev API if public API is private.
- [ ] **Feature list** mapped to your ownership (align with JWT, WS, pages above).
- [ ] **Tech table**: React version band, FastAPI (as consumed), state router, etc.
- [ ] **Security note** (non-sensitive): how auth tokens are handled on client at a high level.
- [ ] **License** or “private / educational use” if applicable.

## Visual design system — v1 spec (80/20 editorial + classical mood)

**Principles**

- Default UI reads as **modern editorial**: strong type scale, calm neutrals, one disciplined accent.
- Classical layer is **texture + light + grid**, not ornament everywhere.

**Typography (implementation-ready direction)**

- **Display / headings**: high-contrast editorial serif or sharp neo-serif (`Fraunces`, `Instrument Serif`, or `Playfair Display`) — use for H1–H2 only; **max two weights**.
- **Body / UI**: clean grotesk or humanist sans (`Inter`, `DM Sans`, or `Source Sans 3`); **16–18px** base, comfortable line height (1.5–1.65).
- **Code / terminal**: monospaced (`JetBrains Mono`, `IBM Plex Mono`, or `Geist Mono`); terminal font size **not** smaller than **13–14px** for readability.

**Color**

- **Base**: near-black / off-white (prefer **true dark or true light** theme for v1—not both—to limit complexity). Optional: **single** “paper” off-white with charcoal text for marble pairing.
- **Accent**: one restrained color only—**stone blue**, **bronze**, or **muted gold** at **low saturation**; use for links, focus rings, primary button.
- **Classical mood**: marble/statue images **desaturated**, **low contrast** vs text; never behind dense body copy without scrim/overlay.

**Texture & imagery** (`src/assets/ui/`)

- Marble/statue assets: **opacity ≤ 20–35%** in large areas; **edge fades** so UI never fights the texture.
- **Parallax**: avoid on mobile; if used desktop-only, amplitude **≤ 8–12px**.

**Motion**

- Default transitions **150–220ms**, **ease-out**; section reveals **once** on scroll (respect `prefers-reduced-motion`: **disable** parallax, particle, and decorative transforms).
- Magic UI on **name only**; no competing “hero” effects elsewhere in the fold.

**Layout**

- **12-column** grid mentally; content **max-width ~64–72rem**; ample lateral padding.

## Single-page IA — scroll order & navigation

**Vertical order (sticky top nav anchors)**

| Anchor ID | Section | Purpose |
| --- | --- | --- |
| `intro` | Hero | Identity + CTAs + metrics strip |
| `work` | Selected work | Beach Point deep-dive + project cards |
| `experience` | Timeline | Roles + part-time overlap clarity |
| `skills` | Skills | Grouped competencies + AWS/DELF line |
| `graph` | Knowledge graph | Concept relationships |
| `terminal` | Philosophy terminal | Optional delight (skip link in nav: “Archive” or “Console”) |
| `quotes` | Quotes | Or merge below terminal as sub-block if space is tight |
| `contact` | Footer / contact | Email + social + résumé |

**Recommendation**: merge **Quotes** visually **under** or **adjacent to** Terminal (shared “archive” mood) to reduce scroll length—optional decision at build.

## Interaction specifications

### Philosophy terminal (local-only)

- **Prompt**: `juan@athens-os:~$` (or shortened `athens~$` on mobile).
- **Commands** (thematic; implement as a **command registry** map: `string → handler`):

| Command | Behavior |
| --- | --- |
| `help` | List commands (keep in set for discoverability). |
| `boot` / `initialize consciousness` | Short “system boot” text + link hints (typewriter optional, **skippable**). |
| `load projects` / `open archive` | Print project list + **links** (GitHub, demos when relevant). |
| `query philosophy` | Pull one random quote + engineering mapping from same JSON as Quotes section (single source of truth). |
| `skills` | Abbreviated skills summary or jump-scroll to `#skills`. |
| `contact` | Emit mailto + LinkedIn/GitHub lines. |
| `clear` | Clear terminal buffer. |
| **↑ / ↓** | Command history (last **20** commands); store in memory only (no localStorage required for v1). |
| Unknown | Friendly error line; suggest `help`. |

- **Accessibility**: focus trap **inside** terminal panel when open; **Esc** closes if modal; if inline, **Tab** order correct; screen reader: `aria-live="polite"` on output region.
- **Performance**: no external requests; all strings in bundle.

### Knowledge graph

- **Data file**: `src/content/knowledge-graph.json` (or `.ts` export).
- **Schema (minimal)**
  - `nodes`: `{ "id": string, "label": string, "type": "skill" | "project" | "concept", "group"?: string }`
  - `edges`: `{ "from": string, "to": string, "label"?: string }`
- **Layout**: **static positions** for v1 (predictable, cheap) or **preset radial** layers: inner ring = you / core stack, outer = projects. Avoid uncapped force simulation on mobile.
- **Interaction**: hover edge highlights path; optional **click** node → scroll to related project/skill section.
- **Cap**: ≤ **24 nodes**, ≤ **36 edges** for v1.

### Project cards

- **Default**: title, one-line hook, stack pills, links (repo / demo).
- **Hover (desktop)**: reveal **one** extra panel: “Architecture note” or “Key decisions” (2–3 bullets from content JSON—not generic).
- **Expand (all breakpoints)**: `details` / accordion for **technical depth** (stack, constraints, your role). **One card expanded at a time** optional to reduce noise.
- **Motion**: max **translateY -2px** + shadow; no heavy parallax.
- **Supporting demos** (A/B, AI QA): badge **Live demo** when URL exists.

### Quotes (local JSON)

- **File**: `src/content/quotes.json` — array of `{ "classical": string, "engineering": string, "note"?: string }`.
- **UI**: random on load + **next** button; optional same pool as terminal `query philosophy`.

### Ambient cursor / particles

- **Default off** or **subtle on desktop only**; **disabled** when `prefers-reduced-motion`.
- **Particle cap**: ≤ **40**; **single** rAF loop; alpha low. Cursor glow: **max ~120px** blur, low opacity.

## Content architecture (repo file layout — suggested)

```
src/content/
  profile.ts          // name, tagline, metrics (2.5, 100+, placeholders), links, resume URL
  experience.ts       // roles with dates, short vs long description
  projects.ts         // Beach Point + supporting projects (case study body, links)
  skills.ts           // grouped skills
  knowledge-graph.json
  quotes.json
```

Resume PDF lives in `public/resume.pdf` (or CDN URL constant in `profile.ts`).

## Technical implementation roadmap (aligned to your repo)

Current codebase is a minimal root `package.json` Vite + React 19 + TypeScript starter with almost no UI stack yet. Recommended phased approach:

### Phase 0 — Foundations (quality gates)

- **Single-page** layout with **hash anchors** (`#work`, `#experience`, …) and sticky nav; skip-to-content link.
- Global layout grid, typography scale, spacing tokens (Tailwind theme extension).
- Accessibility defaults: semantic headings, focus styles, keyboard traps avoided in terminal/modals
- `prefers-reduced-motion` policy for all animations

### Phase 1 — Visual system

- Add Tailwind + **CSS variables** for light/dark if you choose one mode; map tokens from “Visual design system” above.
- Self-host or `@font-face` chosen Google fonts (subset for performance).
- Image pipeline for textures in `src/assets/ui/` (repo already has UI assets)

### Phase 2 — Core sections + content wiring

- Add `src/content/*` modules per “Content architecture” above; hero metrics read from **`profile.ts`** (easy swap of placeholders).
- Build: Hero, Experience, Skills, Beach Point case study + supporting project cards, footer/contact, résumé download

### Phase 3 — Signature interactions (bounded)

- Terminal component (**command registry** per “Philosophy terminal” table)
- Quotes JSON + UI (shared pool with terminal `query philosophy`)
- Project cards (hover + accordion; content-driven architecture notes)
- Knowledge graph (static JSON → SVG; caps per spec)

### Phase 4 — Polish + trust upgrades

- **Ambient layer** (cursor/particles) gated by `prefers-reduced-motion`
- Magic UI name treatment (via Magic UI MCP tool discovery during implementation)
- Framer Motion sparingly (or CSS-first motion where possible)
- Privacy-friendly analytics wiring (Plausible/Umami/Cloudflare Web Analytics—choose based on hosting)

### Phase 5 — Pre-launch checklist

- Lighthouse performance pass (interaction budget)
- Copy audit for claims vs evidence
- OG image + metadata for sharing

## Risks / mitigations (explicit)

- **Risk**: “Not deployed” hero project can look weak if the case study is thin. **Mitigation**: ship a **museum-quality** GitHub README + crisp architecture story + screenshots + local demo recording (optional short Loom).
- **Risk**: headline metrics that sound inflated without context. **Mitigation**: for **100+**, keep the **cumulative / career-wide** framing explicit (tooltip, footnote, or short sublabel); replace **placeholders** with defensible values before high-stakes applications if possible.

## Content dependencies (before final public copy)

- **Hero metrics**: use **2.5**, **100+** (cumulative definition above), cert line, and **placeholders** as needed; swap placeholders for evidenced KPIs when you are ready.
- **Beach Point README uplift**: screenshots, architecture diagram, local run, sanitized env vars.
- **Résumé PDF** as single source of truth; remove PDF export artifacts (broken hyperlinks).
- **Testimonials**: v1 omitted unless real quotes exist.
- **GitHub hygiene**: pin Beach Point + 1–2 strongest repos.
