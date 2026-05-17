# Implementation roadmap (Vite + React + TypeScript)

**Baseline**: root `package.json` — Vite, React 19, TypeScript. Add Tailwind, fonts, optional Framer Motion (light use).

## Phase 0 — Foundations

- Single-page app, hash routes for anchors (`#work`, …)
- Sticky header nav + skip link
- Tailwind + design tokens (CSS variables)
- Focus styles, semantic landmarks, `prefers-reduced-motion` baseline

## Phase 1 — Visual system

- Fonts (subset / `font-display: swap`)
- Global styles; marble/statue assets from `src/assets/ui/` per **`03-visual-design-system.md`**

## Phase 2 — Core + content

- Implement `src/content/*` per **`06-content-schema.md`**
- Sections: Hero, Work (Beach Point + cards), Experience, Skills, Footer/contact, résumé download

## Phase 3 — Signature interactions

- Terminal + command registry
- Quotes panel (shared JSON)
- Knowledge graph SVG
- Project card hover / accordion

## Phase 4 — Polish

- Ambient layer (optional, reduced-motion gated)
- Magic UI effect on **name only** (discover via Magic UI MCP in Cursor if available)
- Privacy-friendly analytics (Plausible / Umami / Cloudflare Web Analytics)

## Phase 5 — Pre-launch

- Lighthouse (performance + a11y)
- Copy vs evidence pass
- Open Graph image + meta tags

## Deploy

- Default assumption: **Vercel** or similar static host; env for analytics if needed.
