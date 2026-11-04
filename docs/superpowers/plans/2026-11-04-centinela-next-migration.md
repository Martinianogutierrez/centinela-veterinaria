# Centinela SPA → Next.js Migration Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Migrate the Centinela vanilla SPA into a Next.js App Router project (TypeScript + Tailwind installed) with unchanged UI/behavior and clearer file organization.

**Architecture:** Scaffold Next beside the SPA, merge into repo root, port markup into section components, port data to typed `lib/data.ts`, port interactivity to client hooks, keep existing CSS as global styles under `styles/`. Tailwind is present for a later step, not used for current visuals.

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS (scaffold only), existing hand-written CSS, npm.

**Spec:** Design approved in chat (Approach A — root Next app, keep CSS).

## Global Constraints

- Behavior and visuals must match the current SPA (theme, nav bubble, parallax, reveal, carousel drag, team accordion, booking `alert`, image slots/placeholders).
- Do **not** rewrite CSS to Tailwind in this migration.
- Do **not** add features (real booking, CMS, extra routes, i18n framework).
- `lang="es"`; copy and structure stay Spanish as today.
- Image paths become `/assets/...` via `public/assets/`.
- Non-empty root: scaffold in a temp directory, then merge — never blind `create-next-app .` on a dirty tree.
- Working directory: `C:\Users\Martiniano\Desktop\Vete Mari` (path has a space — quote all paths).
- Prefer App Router, no `src/`, npm, import alias `@/*`.

## Review Focus

- Hash links + scroll-spy bubble still track `#clinica` / `#especialidades` / `#equipo` / `#contacto` including resize.
- Carousel: drag scrolls track; click toggles `.open` only when not dragging.
- Theme toggle sets `document.documentElement.dataset.theme` from `prefers-color-scheme`, then toggles light/dark.
- Empty vs filled `.ph` slots: missing `IMG` keys keep `.empty` + `data-l` label; filled use `background-image`.
- Booking buttons `#book` and `#book-contact` both `alert` the same prototype string.

See conversation plan for full task steps (Tasks 1–7).
