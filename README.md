# jonbeaubien.dev

Personal portfolio site for Jonathan Beaubien, built with [Next.js](https://nextjs.org) (App Router), React, TypeScript, and Tailwind CSS v4. All pages are statically generated so crawlers get full HTML. Deployed on Netlify — pushes to `main` auto-deploy.

## Editing content

All site copy (bio, experience, projects, skills, resume widgets, SEO metadata) lives in one file: [`src/data/content.ts`](src/data/content.ts). Edit it and every page picks up the change.

The traditional resume PDF is served from `public/JonathanBeaubien_Resume.pdf` — replace that file to update the download.

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

## Structure

- `src/app/` — routes (`/`, `/projects`, `/resume`), layout, `sitemap.ts`, `robots.ts`
- `src/components/` — UI components; `resume/` holds the draggable widget cards
- `src/hooks/useDraggable.ts` — pointer-events drag hook for the resume cards
- `src/data/content.ts` — all site copy
- `public/` — resume PDF, images, fonts, video
