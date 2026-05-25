# Sociedad Colombiana de Computación — sco2.org

Static site built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com).

**Repo:** <https://github.com/sco2-org/sco2.org>

## Quick start

### With npm

```bash
npm install
npm run dev      # Dev server at http://localhost:4321
npm run build    # Production build to dist/
npm run check    # TypeScript type checking
```

### With Docker

```bash
docker compose up dev    # Hot-reload dev server at http://localhost:4321
docker compose up prod   # Production build served at http://localhost:8080
```

## Deployment

Pushes to `main` trigger automatic deployment to **GitHub Pages** via `.github/workflows/deploy.yml`.

### Setup checklist

1. **GitHub Pages**: Enable in repo Settings > Pages > Source: GitHub Actions
2. **Formspree**: Create a free account and replace `YOUR_FORM_ID` in `src/components/ContactForm.astro` with your actual Formspree form ID
3. **Domain**: Create a CNAME record for `www.sco2.org` pointing to `<username>.github.io`

## Project structure

```
src/
├── components/     # Astro components (Header, Footer, SEO, Countdown, etc.)
├── data/           # Static data (navigation, testimonials, dates, social)
├── i18n/           # Translations (es.ts, en.ts)
├── layouts/        # Base layout
├── pages/          # Routes
│   ├── index.astro     # Home ES
│   ├── 20ccc.astro     # 20CCC page ES
│   ├── en/             # English routes
│   └── 404.astro
└── styles/         # Global CSS (Tailwind)
```

## Content

All translatable content lives in `src/i18n/es.ts` and `src/i18n/en.ts`.
