import { Router } from 'express';

import { Championship } from '@haus23/tipprunde-types';

export const apiV2 = Router().get('/championships', (req, res) => {
  const championships = [] as Championship[];
  res.json(championships);
});
