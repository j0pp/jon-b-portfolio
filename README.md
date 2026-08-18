# jonbeaubien.dev

My personal portfolio site, built with [Next.js](https://nextjs.org) (App Router), React, TypeScript, and Tailwind CSS v4. All pages are statically generated so crawlers get full HTML. Deployed on Netlify; pushes to `main` auto-deploy.

## Editing content

All site copy (bio, experience, projects, skills, resume widgets, SEO metadata) lives in one file: [`src/data/content.ts`](src/data/content.ts).

The traditional resume PDF is served from `public/JonathanBeaubien_Resume.pdf`. Replace that file to update the download.

## Development

```sh
npm install
npm run dev      # http://localhost:3000
```

## Other commands

```sh
npm run build    # production build (also proves all routes are static)
npm run start    # serve the production build
npm run lint     # eslint
```

## VHS theme-switch effect

Toggling light/dark mode fires a brief VHS burst over the whole page, using the [Canvas UI VHS component](https://canvasui.dev/docs/components/vhs) (vendored into `src/components/canvasui/`). Tuning knobs (duration, hold, per-parameter peak intensities) live in the `BURST` constant at the top of [`src/components/VhsBurst.tsx`](src/components/VhsBurst.tsx). The effect code is lazy-loaded on the first theme change, so it adds nothing to the initial page load, and it is skipped entirely under `prefers-reduced-motion`.

The full page-warping effect depends on Chrome's experimental [HTML-in-Canvas API](https://developer.chrome.com/blog/html-in-canvas-origin-trial). Browsers without it (Safari, Firefox, Chrome without a token) get a lighter noise-band overlay instead. To enable the full effect for regular Chrome visitors:

1. Register `https://jonbeaubien.dev` for the **HTML in Canvas** origin trial at [developer.chrome.com/origintrials](https://developer.chrome.com/origintrials).
2. Set the token as `HTML_IN_CANVAS_OT_TOKEN` in Netlify's environment variables and redeploy — it is served as an `Origin-Trial` response header via `next.config.ts`.

For local testing of the full effect, enable `chrome://flags/#canvas-draw-element` (or run Chrome with `--enable-experimental-web-platform-features`).

## Structure

- `src/app/` — the single-page route, layout, `sitemap.ts`, `robots.ts`
- `src/components/` — UI components; `resume/` holds the fake-brand resume cards shown on the home page
- `src/data/content.ts` — all site copy
- `public/` — resume PDF, images, fonts
