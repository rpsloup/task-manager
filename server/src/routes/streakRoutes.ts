import { Router } from 'express';

import type { Streak } from '../../../typings/streakTypes';

const streakRouter = Router();

const streakData: Streak[] = [
  { id: 0, title: 'Streak 1', days: 128 },
  { id: 1, title: 'Streak 2', days: 87 },
  { id: 2, title: 'Streak 3', days: 42 },
  { id: 3, title: 'Streak 4', days: 251 },
  { id: 4, title: 'Streak 5', days: 17 },
];

streakRouter.get('/streak', (_, res) => {
  res.json(streakData);
});

export default streakRouter;
