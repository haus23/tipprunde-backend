import type { League } from '@haus23/tipprunde-types';

import { env } from '#app/env.ts';
import { cachedFunction } from '../cached.ts';
import { db, modelConverter } from '../firebase/index.ts';

export const getLeagues = cachedFunction(
  async () => {
    console.info(`[${new Date().toLocaleString()}] Querying leagues`);

    const snapshot = await db
      .collection('leagues')
      .withConverter(modelConverter<League>())
      .get();
    return snapshot.docs.map((doc) => doc.data());
  },
  {
    maxAge: env.MAX_AGE,
    name: 'leagues',
    getKey: () => 'list',
  },
);