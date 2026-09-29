# Liz Tsalaja's Portfolio

Personal portfolio site built with [Astro](https://astro.build), showcasing projects and research in applied math, data science, and public policy.

Live at [jtsalaja.github.io](https://jtsalaja.github.io).

## Tech stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- Markdown content collections for project write-ups

## Project structure

```
src/
├── content/projects/   # Project write-ups (Markdown, one file per project)
├── layouts/            # Shared page layout
├── pages/              # Routes: home, about, projects, resume
└── styles/             # Global styles
```

Adding a new project means adding a Markdown file to `src/content/projects/` with the frontmatter schema defined in `src/content.config.ts` (title, description, date, stack, and optional repo/demo/PDF links).

## Development

```bash
npm install
npm run dev
```

| Command | Action |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |
