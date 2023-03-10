import { fileURLToPath } from 'node:url';
import dotenv from 'dotenv';
import express from 'express';
import { apiV1 } from './routes/api/v1/index.mjs';
import { apiV2 } from './routes/api/v2/index.mjs';

dotenv.config();

const app = express();

app
  .use('/api/v1', apiV1)
  .use('/api/v2', apiV2)
  .use(express.static(fileURLToPath(new URL('../public', import.meta.url))));

app.listen(2605, () => {
  console.log('Backend server listening at http://localhost:2605');
});
