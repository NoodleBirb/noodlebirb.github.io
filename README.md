# Developer Portfolio

A personal portfolio built with Astro and strict TypeScript. Project setup is underway; content and visual design are pending.

## Development
Requires Node.js 22.12 or newer and npm. Run `npm ci`, then `npm run dev`.

## Build
Run `npm run build` to generate the static website in `dist/`. Run `npm run preview` to preview the build.
Commit the lockfile; generated output and dependencies are excluded from Git.

## Structure
- `src/pages/`: website routes
- `src/layouts/`: shared document layouts and metadata
- `src/styles/`: styles
- `public/`: files served unchanged
- `docs/project-plan.md`: decisions and next steps
- `.github/workflows/ci.yml`: build verification

Add components and project content folders when needed.

## GitHub and publishing
The repository and remote have not been created yet. CI checks pushes to main and pull requests. GitHub Pages is proposed; deployment will be configured after confirming the repository and site address. This starter does not publish the site.

