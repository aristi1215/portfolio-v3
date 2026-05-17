# Interactions specification

## Philosophy terminal

- **No network calls** — all output from bundle/registry.
- **Prompt**: `juan@athens-os:~$` (shorten on small screens if needed).

### Command registry

| Input | Behavior |
| --- | --- |
| `help` | List commands |
| `boot` or `initialize consciousness` | Boot / welcome text (typewriter optional; skippable) |
| `load projects` or `open archive` | Projects + links |
| `query philosophy` | Random entry from **`quotes.json`** (same as Quotes UI) |
| `skills` | Short summary or scroll to `#skills` |
| `contact` | Mailto + social lines |
| `clear` | Clear output |
| ↑ / ↓ | History (last **20**), in-memory |
| other | Error + suggest `help` |

### A11y

- `aria-live="polite"` on output; if modal terminal: **Esc** closes, focus trap; sensible **Tab** order.

## Knowledge graph

- **File**: `src/content/knowledge-graph.json`
- **Nodes**: `{ id, label, type: "skill" | "project" | "concept", group? }`
- **Edges**: `{ from, to, label? }`
- **Caps**: ≤ **24** nodes, ≤ **36** edges
- **Layout**: static or preset radial — avoid heavy force layout on mobile
- Optional: click node → scroll to related section

## Project cards

- Title, hook, stack pills, repo/demo links.
- **Hover (desktop)**: “Architecture / key decisions” (2–3 bullets from JSON).
- **Expand**: accordion for depth; optional single-expand-only.
- **Live demo** badge when URL exists (A/B, AI QA).

## Quotes

- **`src/content/quotes.json`**: `{ classical, engineering, note? }[]`
- Random on load + Next; shared pool with `query philosophy`.

## Ambient (cursor / particles)

- Prefer **subtle or off**; respect **`prefers-reduced-motion`**
- Particles ≤ **40**; one **rAF** loop; cursor glow blur ~**120px** max, low opacity.
