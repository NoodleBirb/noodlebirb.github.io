// @ts-check
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';

const publicDir = fileURLToPath(new URL('./public', import.meta.url));

/** Serve public/past-projects directory indexes in `astro dev` and `astro preview`. */
function pastProjectsIndexes() {
  /** @param {import('http').IncomingMessage} req */
  const middleware = (req, _res, next) => {
    const requestUrl = req.url ?? '';
    const url = new URL(requestUrl, 'http://localhost');
    let pathname = decodeURIComponent(url.pathname);
    if (!pathname.startsWith('/past-projects')) {
      next();
      return;
    }
    if (path.posix.extname(pathname)) {
      next();
      return;
    }
    if (!pathname.endsWith('/')) pathname += '/';
    const relative = `${pathname.slice(1)}index.html`;
    const filePath = path.join(publicDir, ...relative.split('/'));
    if (!fs.existsSync(filePath)) {
      next();
      return;
    }
    req.url = `${pathname}index.html${url.search}`;
    next();
  };

  return {
    name: 'past-projects-indexes',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use(middleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(middleware);
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://ethanedwards.dev',
  vite: {
    plugins: [pastProjectsIndexes()],
  },
});
