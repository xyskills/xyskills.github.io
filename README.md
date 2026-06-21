# xyskills.github.io Multi-Project Site

This repository deploys a single GitHub Pages site with multiple projects:

- `/` root selector/docs app
- `/filter/` anime filter app

## Local Development

- `npm run dev` starts the anime filter app.
- `npm run dev:docs` starts the root selector/docs app.

## Build

Run:

```bash
npm run build
```

The output is a single Pages-ready folder:

- `dist/index.html` for the root selector/docs
- `dist/filter/index.html` for the anime filter project

## Deploy

Deployment is handled by [.github/workflows/pages.yml](.github/workflows/pages.yml). On push to `main`, it:

1. installs dependencies,
2. runs `npm run build`,
3. publishes `dist` to GitHub Pages.

Set GitHub Pages source to **GitHub Actions** in repository settings.

## Add Another Project

1. Create a new app/config that builds to `dist/<project-name>`.
2. Add a script to `package.json` and include it in the `build` chain.
3. Add a link card on the root selector/docs app.
