import express from 'express';
import cors from 'cors';

import todoRouter from './routes/todoRoutes';
import streakRouter from './routes/streakRoutes';

const app = express();
app.use(cors());

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

app.use(todoRouter);
app.use(streakRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
