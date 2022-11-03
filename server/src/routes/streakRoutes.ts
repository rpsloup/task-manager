import { Router } from 'express';

import { pool } from '../main';

const streakRouter = Router();

streakRouter.get('/streak', async (_, res) => {
  try {
    const streaks = await pool.query('SELECT streak_id, title, NOW()::date - start::date AS days FROM streaks ORDER BY days DESC');
    res.json(streaks?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error');
  }
});

export default streakRouter;
