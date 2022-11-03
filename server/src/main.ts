import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

import todoRouter from './routes/todoRoutes';
import streakRouter from './routes/streakRoutes';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
export const pool = new Pool({
  host: process.env.DB_HOST ?? '',
  user: process.env.DB_USER ?? '',
  password: process.env.DB_PASS ?? '',
  database: process.env.DB_NAME ?? '',
  port: Number(process.env.DB_PORT) ?? '',
});

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

app.use(todoRouter);
app.use(streakRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
