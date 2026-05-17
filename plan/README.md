# Portfolio build plan — index for cloud agents

This folder contains the **full product and UX specification** for **Juan Aristizabal’s** portfolio site. Use it as the single source of truth when generating or extending the codebase in this repo (`portfolio-v3`: Vite + React + TypeScript).

## How to use this folder

1. Read **this README**, then **`PORTFOLIO-PLAN.md`** for the complete narrative in one file.
2. Use the **numbered topic files** when you need a smaller context window—each file is self-contained.
3. Implement against **verified facts** in `employment-education-facts.md` so copy stays consistent with résumé.
4. **Do not** treat ChatGPT/Cursor plan files outside this repo as authoritative; this `plan/` directory is what should be committed for handoff.

## Document map

| File | Contents |
| --- | --- |
| [`PORTFOLIO-PLAN.md`](PORTFOLIO-PLAN.md) | **Master document** — entire plan (strategy, IA, metrics, design, interactions, phases, risks). |
| [`01-positioning-and-metrics.md`](01-positioning-and-metrics.md) | Audience, proof strategy, discipline wedge, tiered metrics, hero strip rules. |
| [`02-information-architecture.md`](02-information-architecture.md) | Section list, hash anchors, scroll order, recruiter psychology per section. |
| [`03-visual-design-system.md`](03-visual-design-system.md) | Typography, color, texture, motion, layout, Magic UI note (name only). |
| [`04-beach-point-case-study.md`](04-beach-point-case-study.md) | Hero case study narrative outline + GitHub README checklist. |
| [`05-interactions-spec.md`](05-interactions-spec.md) | Terminal commands, knowledge graph schema/caps, project cards, quotes, ambient effects. |
| [`06-content-schema.md`](06-content-schema.md) | Suggested `src/content/` files, JSON shapes, résumé PDF location. |
| [`07-implementation-roadmap.md`](07-implementation-roadmap.md) | Phases 0–5 aligned to Vite/React; pre-launch checklist. |
| [`employment-education-facts.md`](employment-education-facts.md) | Certs, education, employment table, overlap note, Beach Point ownership bullets. |
| [`08-risks-and-out-of-scope.md`](08-risks-and-out-of-scope.md) | Risks, mitigations, v1 out of scope (blog). |

## Non-negotiables for v1

- **Primary proof**: employer work + GitHub/case studies; Cloudflare demos are **supporting**, not the credibility spine.
- **Hero project**: Beach Point Reservations (deep-dive); **not publicly deployed** during tenure—story leans on engineering + repo quality.
- **Hero metrics**: **2.5** years experience; **100+** shipped items **cumulative across roles**; placeholders OK for extra slots until replaced.
- **DALEROS**: **minimized** on marketing site; detail belongs on résumé.
- **Testimonials**: **omit** section entirely if none (no “coming soon”).
- **Quotes + terminal**: local JSON/bundle only; **no** external API for quotes.
- **Philosophy aesthetic**: **visual mood only** (80% editorial / 20% classical texture)—not a personal philosophy biography.
- **Accessibility**: semantic HTML, visible focus, `prefers-reduced-motion` for decorative motion.

## Repo assets referenced by the plan

- UI textures/statues: `src/assets/ui/` (`marble_texture.png`, statue PNGs, `temple-column.png`).

## Stack reference

See root [`package.json`](../package.json): Vite, React 19, TypeScript. The plan assumes adding Tailwind, fonts, Framer Motion (sparingly), and optional privacy-friendly analytics at deploy time.
