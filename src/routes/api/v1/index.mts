import { Router } from 'express';

export const apiV1 = Router();

apiV1
  .get('/masterdata', (req, res) => {
    res.json({ success: true });
  })
  .get('/standings/:championshipId', (req, res) => {
    res.json({ championship: req.params.championshipId });
  });
