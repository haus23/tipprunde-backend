import { Router } from 'express';

import { Championship, Player } from '@haus23/tipprunde-types';
import { collection, db, modelConverter } from 'lib/firebase/index.mjs';

export const apiV2 = Router()
  .get('/championships', async (req, res) => {
    const snapshot = await db
      .collection('championships')
      .where('published', '==', true)
      .orderBy('nr', 'desc')
      .withConverter(modelConverter<Championship>())
      .get();

    const championships = snapshot.docs.map((doc) => doc.data());
    res.json(championships);
  })
  .get('/players', async (req, res) => {
    res.json(await collection<Player>('/players'));
  });
