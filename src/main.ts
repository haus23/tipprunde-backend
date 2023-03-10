import { fileURLToPath } from 'node:url';

import express from 'express';
import { apiV1 } from './routes/api/v1';
import { apiV2 } from './routes/api/v2';

const app = express();

app
  .use('/api/v1', apiV1)
  .use('/api/v2', apiV2)
  .use(express.static(fileURLToPath(new URL('../public', import.meta.url))));

app.listen(2605, () => {
  console.log('Backend server listening at http://localhost:2605');
});
