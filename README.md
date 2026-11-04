# Centinela

Next.js (App Router) + TypeScript port of the Centinela centro veterinario one-page site.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm start` — serve production build
- `npm run lint` — ESLint

## Notes

- Visuals still use legacy CSS under `styles/` (imported from `app/globals.css`).
- Tailwind is installed for a later migration step; it is not driving layout yet.
- Content lives in `lib/data.ts`. Interactive behavior is in `hooks/` and client components under `components/`.
