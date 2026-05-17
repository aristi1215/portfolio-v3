# AGENTS.md

## Cursor Cloud specific instructions

This is a Vite + React + TypeScript single-page application (portfolio site). There are no backend services or databases.

### Key commands

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (serves on `http://localhost:5173`) |
| Lint | `npm run lint` |
| Build | `npm run build` (runs `tsc -b && vite build`, outputs to `dist/`) |
| Preview build | `npm run preview` |

### Notes

- Requires Node.js 22+ (TypeScript 6 and Vite 8 require it).
- The React Compiler is enabled via `@rolldown/plugin-babel` + `babel-plugin-react-compiler`; this adds slight overhead to dev/build but requires no special action.
- No lockfile is committed; `npm install` generates `package-lock.json` locally.
- Product/UX specifications live in `plan/` — see `plan/README.md` for the index.
