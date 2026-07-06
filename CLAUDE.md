# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

A personal browser start page: a single Astro page rendering a terminal-style command bar and a grid of bookmark
"cards", styled with Tailwind CSS v4. Static site, no backend, no environment variables.

## Commands

- `npm run dev` / `npm start` — start the Astro dev server
- `npm run build` — build for production (outputs to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run astro -- <command>` — run arbitrary Astro CLI commands (e.g. `npm run astro -- check`)

There is no test suite and no linter configured in this repo.

## Architecture

- `src/pages/index.astro` — the only page. Composes `Layout`, `Card`, and `CommandLine`.
- `src/layouts/Layout.astro` — HTML shell. Owns the light/dark theme system: reads `localStorage`/`prefers-color-scheme`
  before paint (inline script, avoids flash), sets `data-theme` on `<html>`, and exposes theme via CSS custom
  properties (`--bg`, `--surface`, `--text`, `--accent`, etc.) defined in a global `<style is:global>` block. Any new
  component should theme itself through these variables rather than hardcoding colors.
- `src/lib/bookmarks.ts` — reads bookmark data from `src/content/bookmarks.md` frontmatter via
  `import.meta.glob(..., { eager: true })` and groups bookmarks by their `category` field (preserving
  first-appearance order) into `BookmarkSection[]`. Category → display label mapping lives in the
  `CATEGORY_LABELS` record here — add new categories there, not just in the bookmark data.
- `src/components/card.astro` — renders the bookmark grid ("boxes") from `getBookmarkSections()`, one box per
  category, icons only (no visible category headers).
- `src/components/BookmarkNav.astro` — top nav bar of per-category dropdowns (native `<details>`/`<summary>`,
  mutually exclusive via shared `name` attribute), built from the same `getBookmarkSections()` data as the grid.
- `src/components/BookmarkIcon.astro` — shared icon renderer (light/dark pair, single `src`, or a blank
  placeholder) used by both `card.astro` and `BookmarkNav.astro`.
- `src/components/commandLine.astro` — the terminal input. Contains all interactive JS:
  - special prefixes `r:` (Reddit-via-Google) and `m:` (MyAnimeList-via-Google); anything matching a bare domain
    pattern navigates directly; anything else falls through to a Google search (see `navigate()`).
  - live-filters bookmark cards as you type by toggling `bookmark-match`/`bookmark-nomatch` classes on the anchors
    rendered by `card.astro` (cross-component coupling via DOM query, not props — `.bookmark-section a` is the
    contract between the two components).
  - pressing Enter navigates straight to a matching bookmark if the typed text matches one, otherwise calls `navigate()`.
  - command history (Arrow Up/Down) and a typing-effect placeholder cycling through example queries.
- `src/content/bookmarks.md` — data-only file: frontmatter `links` array, no rendered markdown body. Each entry is
  `{ href, title, alt?, category?, src? | (srcLight & srcDark) }`. Use the `srcLight`/`srcDark` pair for icons that
  need different colors per theme (the component swaps which `<img>` is visible via CSS based on `data-theme`); use
  plain `src` only for icons that look fine in both themes; omit both for a blank placeholder swatch.
- `public/*.svg` — bookmark icons, named `<name>-light.svg` / `<name>-dark.svg` to match the `srcLight`/`srcDark`
  fields above.

## Notes

- Astro components colocate markup, scoped `<style>`, and (in `commandLine.astro`) a `<script>` — there's no separate
  JS/CSS module structure to navigate; each `.astro` file is self-contained.
- `tsconfig.json` extends Astro's strict preset; `env.d.ts` provides Astro's ambient types.
