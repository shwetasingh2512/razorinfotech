import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 5000;
const staticDir = path.join(__dirname, 'dist');

// Serve static files from dist
app.use(express.static(staticDir));

// If the file exists, serve it. Otherwise return 404 instead of index.html
app.use((req, res, next) => {
  const requestedPath = path.join(staticDir, req.path);
  // normalize and check if path points to existing file
  if (req.path === '/' || req.path === '') {
    // serve index
    return res.sendFile(path.join(staticDir, 'index.html'));
  }

  res.sendFile(requestedPath, (err) => {
    if (err) {
      // File doesn't exist — return 404
      res.status(404).send(`404 Not Found: ${req.originalUrl}`);
    }
  });
});

app.listen(port, () => {
  console.log(`Static server running on http://localhost:${port} — serving ${staticDir}`);
});
