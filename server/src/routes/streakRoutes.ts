import { Router } from 'express';

import { pool } from '../main';

const streakRouter = Router();

streakRouter.get('/streak', async (_, res) => {
  try {
    const streaks = await pool.query('SELECT streak_id, title, NOW()::date - start::date AS days FROM Streaks ORDER BY days DESC');
    res.json(streaks?.rows ?? []);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error');
  }
});

streakRouter.post('/streak', async (req, res) => {
  try {
    const { title, startDate } = req.body;
    const newStreak = await pool.query('INSERT INTO Streaks (title, start) VALUES ($1, $2) RETURNING *', [title, startDate]);
    res.json(newStreak?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error');
  }
});

streakRouter.delete('/streak', async (req, res) => {
  try {
    const { id } = req.body;
    const deletedStreak = await pool.query('DELETE FROM Streaks WHERE streak_id = $1 RETURNING *', [id]);
    res.json(deletedStreak?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error');
  }
});

export default streakRouter;
