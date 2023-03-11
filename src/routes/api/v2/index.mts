import { Router } from 'express';

import { Championship, Player } from '@haus23/tipprunde-types';
import { collection, db, modelConverter } from 'lib/firebase/index.mjs';

export const apiV2 = Router()
  .get('/championships', async (req, res) => {
    const championships = await collection<Championship>('championships');
    res.json(championships.filter((c) => c.published).sort((a, b) => b.nr - a.nr));
  })
  .get('/players', async (req, res) => {
    const players = await collection<Player>('/players');
    res.json(players);
  });
