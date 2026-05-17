# Content files and schema (suggested)

## Layout under `src/content/`

| File | Purpose |
| --- | --- |
| `profile.ts` | Name, tagline, location, relocation note, **metrics** (2.5, 100+, placeholders), email, GitHub, LinkedIn, résumé URL/path |
| `experience.ts` | Roles: id, title, company, location, date range, short summary, optional long/bullets (DALEROS kept short on site) |
| `projects.ts` | Beach Point long case study + supporting projects: links, stack, architectureNotes[], hero flag, liveDemoUrl? |
| `skills.ts` | Groups: `{ group: string, items: string[] }[]` |
| `knowledge-graph.json` | Nodes + edges per `05-interactions-spec.md` |
| `quotes.json` | Quote entries per `05-interactions-spec.md` |

## Résumé

- Place PDF at **`public/resume.pdf`** or set absolute URL in `profile.ts`.

## Placeholder policy

- Hero extra metric slots may show **TBD** until real KPIs exist; swap in `profile.ts` only.

## Supporting project references (from prior portfolio data)

Wire these in `projects.ts` when implementing:

- **A/B Testing Platform** — demo + GitHub (Pages / Cloudflare)
- **AI QA Automation** — demo + GitHub
- **Beach Point** — org GitHub repo
- **Langara Groups App** — GitHub
