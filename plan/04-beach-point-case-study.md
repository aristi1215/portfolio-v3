# Beach Point — hero case study and README checklist

## Positioning

- **Hero portfolio project** for narrative depth; **not** used as “live prod traffic” proof.
- Truth: **no public deployment** during your involvement; strength = **frontend ownership**, **architecture**, **Scrum delivery**, **repo + screenshots**.

## Narrative outline (copy order)

1. Context — reservation product; **frontend lead + Scrum Master**; React + FastAPI/Python team.
2. Problem — real coordination / real-time booking / role-based UX (factual).
3. Responsibilities — client-side ownership, PO collaboration, Jira.
4. Architecture — routing, state, boundaries; **JWT** handling (what’s true); loading/error patterns.
5. Real-time + APIs — **WebSockets** for reservations; REST coexistence; reconnection stance (honest).
6. UI systems — profile, admin, courts/reservations, home, about.
7. Tradeoffs — 2–3 bullets (WS vs polling, scope, etc.).
8. Delivery — Scrum without fabricated velocity.
9. Outcome / limits — shipped artifacts, repo, optional Loom; no fake launch metrics.
10. Links — GitHub; backend “owned by team” where applicable.

## Frontend ownership bullets (for case study)

- JWT auth/authorization on the client
- Client routing and architecture
- Reservations + **WebSocket** to server
- REST API consumption
- Full UI coverage: profile, admin, reservations/courts, home, about

## GitHub README checklist (proof)

- [ ] Screenshots (reservations, admin, profile)
- [ ] Architecture diagram: browser → React → REST + WS → API (no secrets)
- [ ] Local setup + `.env.example`
- [ ] Feature list aligned to ownership
- [ ] Tech table
- [ ] High-level client security note (tokens)
- [ ] License / usage note
