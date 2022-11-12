import axios from 'axios';

import type { Streak } from '../../../typings/streakTypes';
import type { Todo } from '../../../typings/todoTypes';

export const addStreak = async (streak: Omit<Streak, 'streak_id' | 'days'>, startDate: string) => {
  const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/streak`, {
    title: streak.title,
    startDate: startDate,
  });
  return await res.data ?? null;
}

export const addTodo = async (todo: Omit<Todo, 'todo_id' | 'done'>): Promise<Todo | null> => {
  const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/todo`, {
    text: todo.text,
    todolist_id: todo.todolist_id,
  });
  return await res.data ?? null;
}

export const updateTodo = async (todo: Todo): Promise<Todo | null> => {
  const res = await axios.put(`${process.env.REACT_APP_API_ENDPOINT}/todo`, {
    id: todo.todo_id,
    text: todo.text,
    done: todo.done,
  });
  return await res.data ?? null;
}

export const deleteTodo = async (id: Todo['todo_id']): Promise<Todo> => {
  const res = await axios.delete(`${process.env.REACT_APP_API_ENDPOINT}/todo`, {
    data: {
      id,
    },
  });
  return await res.data ?? null;
}
