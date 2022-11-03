import express from 'express';
import cors from 'cors';

import todoRouter from './routes/todoRoutes';

const app = express();
app.use(cors());

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

app.use(todoRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
