import { Router } from 'express';

import type { TodoList } from '../../../typings/todoTypes';

const todoRouter = Router();

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

todoRouter.get('/todo', (_, res) => {
  res.json(todoData);
});

export default todoRouter;
