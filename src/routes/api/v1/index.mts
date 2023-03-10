import { Router } from 'express';
import { Type } from '@sinclair/typebox';
import { Value } from '@sinclair/typebox/value';

import { ChampionshipId } from '../../../lib/types/championship.mjs';

export const apiV1 = Router()
  .get('/masterdata', (req, res) => {
    res.json({ success: true });
  })
  .get('/standings/:championshipId', (req, res) => {
    const { championshipId } = req.params;
    if (!Value.Check(Type.Union([ChampionshipId, Type.Literal('current')]), championshipId)) {
      res.status(406).send('Bad championship');
    }

    res.json({ championship: req.params.championshipId });
  });
