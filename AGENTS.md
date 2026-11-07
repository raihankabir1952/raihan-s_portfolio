# AGENTS.md

Single-package Vite + React 19 portfolio site. Plain JS/JSX (no TypeScript), Tailwind CSS v4, no tests, no CI. `npm run lint` + `npm run build` are the only verification.

## Commands

- `npm run dev` — dev server with HMR
- `npm run lint` — ESLint flat config (ignores `dist/`); must pass
- `npm run build` / `npm run preview` — production build / serve it locally
- There is no test runner or typecheck script. Verify changes with `npm run lint && npm run build`.

## Architecture

- Entry: `src/main.jsx` → `src/App.jsx` (BrowserRouter). Routes: `/` composes the section components in `src/components/`; `/projects/:id` → `src/pages/ProjectDetails.jsx`.
- Project content is data-driven. Adding a project = 3 edits:
  1. entry in `src/data/projects.js` (the source of truth),
  2. screenshot in `public/image/`,
  3. `projectImages` map entry keyed by `project.id` in `src/components/Projects.jsx`.
- Project schema: `github` + optional `live` for single-repo projects; `githubClient`/`githubServer` for split repos. The card handles both, but `ProjectDetails.jsx` only reads `github` (the `togetherly` entry's detail-page GitHub button is broken) — follow `github`/`live` for new entries.
- Dead/stale files: `src/App.css` is never imported; `README.md` is the stock Vite template; `dist/` is gitignored build output (never edit by hand).

## Theme (dark/light toggle)

- Semantic tokens live in `@theme` in `src/index.css`: `bg-page`, `bg-nav`, `bg-card`, `bg-chip`, `border-line`, `border-line-strong`, `text-heading`, `text-soft`, `text-muted`, `text-accent`. `html.light` overrides them.
- In JSX always use these tokens — never raw `gray-*`/`white`/`emerald-400` classes (solid `bg-emerald-500 text-gray-950` buttons are the exception; they work in both themes).
- The `light` class on `<html>` is applied before first paint by the inline script in `index.html` (localStorage `theme`, else system preference). Keep it in sync with `src/hooks/useTheme.js`; don't add another theme init path.
- Toggle UI: `src/components/ThemeToggle.jsx` (used in Navbar and ProjectDetails).
- `body` carries the page background plus an ambient accent glow. Don't put an opaque `bg-page` on the Home wrapper or the glow disappears.

## Conventions & gotchas

- Scroll reveal: every section must attach `ref={useScrollReveal()}` **and** have the `reveal` class, or it stays invisible (`opacity: 0` in `src/index.css`). Staggered children use `reveal-stagger-item` + `--stagger-delay`.
- Card hover lift: add the `lift-card` class (CSS in `src/index.css`). Don't use `hover:-translate-y-*` on `.reveal-stagger-item` elements — that class animates the `translate` property, so a `translate`-based hover gets overridden.
- Typography: Inter (body) + Sora (`h1`–`h6`) loaded via Google Fonts in `index.html`.
- Static assets are referenced by absolute root paths (`/image/...`, `/resume.pdf`), so the site must be hosted at the domain root.
- `BrowserRouter` with no hosting config in the repo: deep links (`/projects/:id`) depend on the host serving an SPA fallback.
- Tailwind v4: no `tailwind.config.js` or PostCSS config — everything goes through `@import "tailwindcss"` and `@theme` in `src/index.css`.
- Lint includes `eslint-plugin-react-refresh`: `.jsx` files may only export components (hooks/helpers go in `.js` files under `src/hooks/`).
