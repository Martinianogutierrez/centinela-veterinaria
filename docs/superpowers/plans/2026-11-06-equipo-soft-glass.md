# Team Accordion Soft Glass — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Separate each team member row in `#equipo` with light nested glassmorphism so names/roles stay distinct without bubble cards or heavy borders.

**Architecture:** Keep one outer `.acc.glass` shell. Restyle each `.it` as a soft inset panel: always-on faint glass, hairline border from `--gb` at low alpha, small vertical gap, stronger fill only on hover/`.on`. No new components; CSS-first in the existing Equipo block.

**Tech Stack:** Next.js App Router, existing `globals.css` tokens (`.glass`, `--glass`, `--gb`, `--sh`), `Equipo.tsx` accordion markup.

**Spec:** Design approved in chat — Approach A (nested soft glass on each `.it`, idle always faintly glass).

## Global Constraints

- No distinct “bubbles” or heavy-handed borders/shadows on member rows.
- Do not restyle shared `.glass` (nav, chips, cards, contacto) — only Equipo `.it` / `.acc` interaction.
- Keep accordion behavior: click/keyboard sets `active`; bio expand via `.it.on > div` grid rows.
- Light and dark (`data-theme`) both readable; prefer `color-mix` / token alpha over hard-coded one-theme whites where fills sit on glass.
- Spanish copy and structure unchanged; no new deps; no Tailwind rewrite of this section.
- Path has space: `C:\Users\Martiniano\Desktop\Vete Mari` — quote paths.

## Review Focus

- Dark theme: idle/hover/on fills still separate rows (not invisible on `--glass` dark).
- Reduced motion: no new long animations beyond existing `background` transition.
- Keyboard: focus-visible outline still visible on glass fill.
- Mobile (`max-width: 820px`): single-column equipo still shows gap + separation.
- Active + hover same row: no flashy double-stack shadow.

---

### Task 1: Soft glass on `.it` rows

**Files:**
- Modify: `app/globals.css` (Equipo block ~753–815; optional dark overrides near tokens or same block)
- Modify only if needed: `components/sections/Equipo.tsx` (no logic change expected)
- Test: manual browser check light/dark + mobile width (no unit test suite for CSS)

**Interfaces:**
- Consumes: existing `.acc.glass`, `.it`, `.it.on`, `.it:hover`, CSS vars `--glass`, `--gb`, `--sh`, `--ink`, `--mute`, `--blue`
- Produces: distinct idle/hover/on visual states for `.it` without markup API change

- [ ] **Step 1: Baseline check** — note current flat hover fills
- [ ] **Step 2: Accordion list spacing** — `.acc .it + .it { margin-top: 8px; }`
- [ ] **Step 3: Idle `.it` soft glass** — color-mix fill + hairline border + inset highlight
- [ ] **Step 4: Hover and `.on`** — stronger fills; remove hard-coded white rgba
- [ ] **Step 5: Dark theme pass** — scoped overrides only if muddy
- [ ] **Step 6: Focus visibility** — `.it:focus-visible` outline
- [ ] **Step 7: Verify** — light/dark, accordion, keyboard, mobile, shared glass untouched
- [ ] **Step 8: Commit** — only if user asks

---
