import { Router } from 'express';

import { pool } from '../main';

const todoRouter = Router();

todoRouter.get('/todo', async (_, res) => {
  try {
    const todoLists = await pool.query('SELECT * FROM TodoLists');
    const todos = await pool.query('SELECT * FROM Todos ORDER BY todo_id');
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

todoRouter.put('/todo', async (req, res) => {
  try {
    const { id, text, done } = req.body;
    const newTodo = await pool.query('UPDATE Todos SET text = $1, done = $2 WHERE todo_id = $3 RETURNING *', [text, done, id]);
    res.json(newTodo?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error');
  }
});

todoRouter.delete('/todo', async (req, res) => {
  try {
    const { id } = req.body;
    const deletedTodo = await pool.query('DELETE FROM Todos WHERE todo_id = $1 RETURNING *', [id]);
    res.json(deletedTodo?.rows[0] ?? null);
  } catch (error) {
    console.log(error);
    res.status(500).json('Error');
  }
});

export default todoRouter;
