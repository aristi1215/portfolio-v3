# Information architecture and section goals

## Section stack (single-page)

1. **Hero** (`#intro`) — Name, role, location/relocation, CTAs (Email, GitHub, LinkedIn), résumé PDF, metrics strip, tech chips.
2. **Selected work** (`#work`) — Beach Point **hero case study** + supporting project cards (A/B, AI QA, Langara app, optional employer capsules).
3. **Experience** (`#experience`) — Timeline with month-accurate dates; **overlap May–Aug 2024** = concurrent **part-time** roles; **DALEROS** brief.
4. **Skills** (`#skills`) — Grouped: frontend, backend, data, cloud, quality, security (light).
5. **Knowledge graph** (`#graph`) — Static JSON → SVG; caps in `05-interactions-spec.md`.
6. **Terminal** (`#terminal`) — Thematic CLI; optional nav label “Archive” / “Console.”
7. **Quotes** (`#quotes`) — Or **merged under/adjacent to** terminal to shorten scroll.
8. **Contact / footer** (`#contact`) — Email, social, built with, legal optional.

**v1**: **No testimonials** section unless real quotes exist (no placeholder).

**Out of scope v1**: blog/CMS.

## Hash anchors (nav)

| ID | Section |
| --- | --- |
| `intro` | Hero |
| `work` | Work |
| `experience` | Experience |
| `skills` | Skills |
| `graph` | Knowledge graph |
| `terminal` | Terminal |
| `quotes` | Quotes (if separate) |
| `contact` | Footer |

Implement **sticky nav** + **skip to content** link.

## Recruiter psychology

- **Hero**: 10-second comprehension + trust + one clear action.
- **Case study**: tradeoffs and thinking, not buzzwords.
- **Experience**: no implied **exclusive full-time** where roles overlapped part-time.
- **Skills**: ATS-relevant synonyms; avoid tag-soup.
- **Delight** (terminal, graph): never blocks the linear read path.
