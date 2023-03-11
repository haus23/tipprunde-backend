import { Router } from 'express';

import { Championship } from '@haus23/tipprunde-types';
import { db } from '../../../lib/firebase/db.mjs';
import { modelConverter } from '../../../lib/firebase/model-converter.mjs';

export const apiV2 = Router().get('/championships', async (req, res) => {
  const snapshot = await db
    .collection('championships')
    .where('published', '==', true)
    .orderBy('nr', 'desc')
    .withConverter(modelConverter<Championship>())
    .get();

  const championships = snapshot.docs.map((doc) => doc.data());
  res.json(championships);
});
