# Visual design system (v1)

**Ratio**: ~**80%** modern editorial / professional · ~**20%** Greek/Roman **mood** (texture, spacing, light)—**not** a biography of philosophy.

## Typography

- **Display (H1–H2)**: editorial serif or neo-serif — e.g. Fraunces, Instrument Serif, Playfair Display; **max two weights**.
- **Body / UI**: Inter, DM Sans, or Source Sans 3; base **16–18px**, line-height **1.5–1.65**.
- **Terminal / code**: JetBrains Mono, IBM Plex Mono, or Geist Mono; terminal **≥ 13–14px**.

## Color

- Pick **one** base mode for v1 (**light** *or* **dark**) to reduce scope; optional warm “paper” light + charcoal.
- **One accent**: low-saturation stone blue, bronze, or muted gold — links, focus ring, primary button.
- Marble/statue imagery: **desaturated**, never compete with text (use scrim if needed).

## Texture and assets

- Use files under **`src/assets/ui/`** (e.g. `marble_texture.png`, statue PNGs, `temple-column.png`).
- Large-area texture: **opacity ~20–35%**, feathered edges.
- **Parallax**: desktop-only if used; amplitude **≤ 8–12px**; **off on mobile**.

## Motion

- Transitions **150–220ms**, ease-out; scroll reveals once.
- **`prefers-reduced-motion`**: disable decorative parallax, particles, heavy transforms.
- **Magic UI**: **name only** — subtle; no second “hero” competing effect.

## Layout

- Max content width **~64–72rem**; comfortable horizontal padding; implicit **12-column** rhythm.
