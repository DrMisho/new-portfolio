import express from 'express';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const STATIC_DIRS = ['css', 'js', 'img', 'vendor', 'scss'];

export function createApp(rootDir = __dirname) {
  const app = express();

  for (const dir of STATIC_DIRS) {
    app.use(`/${dir}`, express.static(path.join(rootDir, dir)));
  }

  app.get(['/', '/index.html'], (_req, res) => {
    res.sendFile(path.join(rootDir, 'index.html'));
  });

  return app;
}

const isMain =
  process.argv[1] &&
  import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href;

if (isMain) {
  const PORT = Number(process.env.PORT) || 3000;
  const HOST = '0.0.0.0';
  const app = createApp();

  app.listen(PORT, HOST, () => {
    console.log(`Server running at http://${HOST}:${PORT}`);
  });
}
