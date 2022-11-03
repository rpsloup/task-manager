import { Router } from 'express';

import { pool } from '../main';

const todoRouter = Router();

todoRouter.get('/todo', async (_, res) => {
  try {
    const todoLists = await pool.query('SELECT * FROM TodoLists');
    const todos = await pool.query('SELECT * FROM Todos');
    if (!todoLists?.rows || !todos?.rows) return [];
    
    const finalTodoLists = todoLists.rows.map(todoList => ({
      ...todoList,
      todos: todos?.rows?.filter(todo => todo.todolist_id === todoList.todolist_id) ?? [],
    }));
    res.json(finalTodoLists);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error');
  }
});

export default todoRouter;
