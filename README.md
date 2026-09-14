# Developer Portfolio

Astro and strict TypeScript portfolio for https://ethanedwards.dev.

## Development
Use Node.js 24 and npm. Run `npm ci`, then `npm run dev`.
Run `npm run build` for production output in `dist/`, and `npm run preview` to preview it.

## Structure
- `src/pages/`: new portfolio routes
- `src/layouts/`: shared document layout
- `src/styles/`: portfolio styles
- `public/past-projects/`: archived homepage and static projects, copied unchanged to the same URL path during builds
- `docs/project-plan.md`: design direction
- `.github/workflows/ci.yml`: build verification
- `.github/workflows/astro.yml`: Pages deployment from `main`, using Node.js 24

## Repository and publishing
The destination repository is `NoodleBirb/noodlebirb.github.io`. The migration combines its existing history with the Astro project's history without force-pushing.

The migration branch is `migrate-past-projects`. Merging it into `main` replaces the current homepage with the Astro placeholder and serves the old homepage at `/past-projects/`. Finish the portfolio design on this branch before merging if the placeholder should not go live.

In the destination repository's Settings > Pages, select GitHub Actions and set the custom domain to `ethanedwards.dev`. If that domain is currently assigned to `Portfolio-Site`, remove it there before assigning it to this repository. Keep the Name.com records pointing to GitHub Pages. Enable Enforce HTTPS when available.

`rockPaperScissors` stays in its separate repository and at `/rockPaperScissors/`; its existing Vite base is preserved. The archived homepage links to `https://ethanedwards.dev/rockPaperScissors/`.

## Archive maintenance
Archived navigation has been updated for `/past-projects/`. Existing links or bookmarks to the old project paths are not redirected. Some novel chapter pages already referenced missing `birb.png` and `index.css` files in the original repository; those pre-existing references are retained. The archive's original scripts and content have not been redesigned.
