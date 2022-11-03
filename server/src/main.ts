import express from 'express';
import cors from 'cors';

import type { TodoList } from '../../typings/todoTypes';

const app = express();
app.use(cors());

const DEFAULT_PORT: number = 3001;
const port = process.env.PORT || DEFAULT_PORT;

const todoData: TodoList[] = [
  { id: 0, title: 'List 1', todos: [
    { text: 'Todo 1' },
    { text: 'Todo 2' },
    { text: 'Todo 3' },
    { text: 'Todo 4' },
    { text: 'Todo 5' },
  ]},
  { id: 1, title: 'List 2', todos: [
    { text: 'Todo 1' },
    { text: 'Todo 2' },
    { text: 'Todo 3' },
  ]},
  { id: 2, title: 'List 3', todos: [
    { text: 'Todo 1' },
    { text: 'Todo 2' },
    { text: 'Todo 3' },
    { text: 'Todo 4' },
  ]},
];

app.get('/todo', (_, res) => {
  res.json(todoData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
