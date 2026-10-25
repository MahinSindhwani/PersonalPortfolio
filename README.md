# mahinsindhwani

My personal site, live at **[mahinsindhwani.netlify.app](https://mahinsindhwani.netlify.app)**.

A single-page portfolio with a terminal look, inspired by [opencode.ai](https://opencode.ai).

## Stack

- React 19 + TypeScript
- Vite
- IBM Plex Mono (self-hosted via Fontsource) and Tabler Icons
- Deployed on Netlify

## Running it locally

Requires Node 22.

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check and build to dist/
npm run preview  # serve the production build
```

## Updating content

All text on the site lives in [`src/data/content.ts`](src/data/content.ts): experience, projects, stack, awards and the FUQ. The shapes are typed in `src/data/types.ts`, so a missing field fails the build instead of breaking the page.

The resume download is `public/resume.pdf`.

## Project layout

```
src/
  components/   one component + CSS module per section
  data/         content.ts (copy) and types.ts
  hooks/        keyboard shortcuts and device detection
  index.css     design tokens and global styles
```

## Little extras

- The contact box shows a real `open` / `start` / `xdg-open` command for your OS, so a copied command works in a terminal.
- On a laptop or desktop: `g` back to top, `n` next section, `r` open resume.
