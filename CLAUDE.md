# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

`@williamgallery/studio-types` — a shared TypeScript package providing Sanity document type interfaces and GROQ query strings for William Gallery projects. Published to GitHub Packages under the `@williamgallery` scope.

## Commands

- **Build:** `npm run build` (runs `tsc`)
- **Install:** `npm install`
- **Publish:** `npm version patch && npm publish` (requires GitHub Packages auth via `GITHUB_TOKEN`)

There are no test or lint scripts configured.

## Architecture

This is a types-only package with no runtime code. Everything lives under `src/`:

- `src/sanity/` — TypeScript interfaces mirroring Sanity document types as returned from the API (not Sanity schema definitions). Each file defines one document type: `artist`, `artwork`, `event`, `sponsor`, plus a shared `image` type.
- `src/queries.ts` — GROQ query strings used by consuming apps to fetch data. These are the single source of truth for data fetching across all William Gallery frontends.
- `src/index.ts` — Barrel export; re-exports everything from `sanity/` types and `queries.ts`.

Key domain types: `GalleryLocation` (`'williamgallery' | 'grigio' | 'lyric'`), `ArtworkStatus` (`'available' | 'sold' | 'reserved'`).

## Conventions

- Types represent **resolved GROQ query results**, not raw Sanity schema. Slugs are typed as `string` (already projected via `slug.current` in queries), and artist references in `SanityArtwork` are expanded inline.
- Rich text fields use `PortableTextBlock[]` from `@portabletext/types` (peer dependency).
- Output is CommonJS (ES2020 target) with declaration files. Published artifact is the `dist/` folder only.
