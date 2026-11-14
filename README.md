# mahinsindhwani

My personal site, live at **[msindhwani.dev](https://msindhwani.dev)**.

A single-page portfolio with a terminal look, inspired by [opencode.ai](https://opencode.ai).

## Stack

- React 19 + TypeScript
- Vite
- IBM Plex Mono (self-hosted via Fontsource) and Tabler Icons
- Deployed on GitHub Pages via GitHub Actions

## Running it locally

Requires Node 22.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build
```

## Updating content

All text on the site lives in [`src/data/`](src/data), one file per section: `profile.ts`, `experience.ts`, `projects.ts`, `skills.ts`, `recognition.ts`, `faq.ts` and so on. Each file types its own shape, so a missing field fails the build instead of breaking the page.

The resume download is `public/resume.pdf`.

## Project layout

```
src/
  components/   one component + CSS module each
  data/         everything the site says, one file per section
  hooks/        React hooks
  lib/          logic with no rendering (scrolling, platform, clipboard)
  styles/       design tokens, base styles and shared CSS modules
```

## Little extras

- The contact box shows a real `open` / `start` / `xdg-open` command for your OS, so a copied command works in a terminal.
- On a laptop or desktop: `g` back to top, `n` next section, `r` open resume.

## Deploying

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes `dist/` to GitHub Pages. `public/CNAME` points it at `msindhwani.dev`.
