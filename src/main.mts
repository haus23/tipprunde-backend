import { fileURLToPath } from 'node:url';
import express from 'express';

const app = express();

// Static serving homepage
app.use(express.static(fileURLToPath(new URL('../public', import.meta.url))));

app.listen(2605, () => {
  console.log('Backend server listening at http://localhost:2605');
});
