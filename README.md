# Laura Torquato — Personal website

A multilingual editorial portfolio built with Next.js, React, TypeScript, Tailwind CSS, i18next, ESLint, and Prettier.

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Portuguese, English, and Spanish are available at `/pt`, `/en`, and `/es`.

## Commands

- `npm run dev` starts the development server
- `npm run build` generates the static site in `out/`
- `npm run lint` checks the code with ESLint
- `npm run typecheck` checks TypeScript
- `npm run format` formats the project with Prettier

The portfolio copy, experience, and project content live in `src/i18n/resources.ts`.

## Deployment

Pushes to `main` are published to GitHub Pages by the deployment workflow. In the
repository settings, set **Pages > Build and deployment > Source** to **GitHub
Actions**. The production URL is `https://lauratorquato.github.io/lautorquato/`.
