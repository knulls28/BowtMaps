import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// API routes FIRST
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Fallback for map_locations.js if requested directly
app.get('/map_locations.js', (req, res, next) => {
  const customFile = path.join(__dirname, 'map_locations.js');
  if (fs.existsSync(customFile)) {
    return res.sendFile(customFile);
  }
  const defaultFile = path.join(__dirname, 'map_locations_trial.js');
  if (fs.existsSync(defaultFile)) {
    return res.sendFile(defaultFile);
  }
  next();
});

// Serve static assets
app.use(express.static(__dirname));

// Fallback to index.html for SPA/static routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Breath of the Wild Object Map server running at http://0.0.0.0:${PORT}`);
});
