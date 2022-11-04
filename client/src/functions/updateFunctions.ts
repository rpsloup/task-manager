import type { Streak } from '../../../typings/streakTypes';
import type { Todo } from '../../../typings/todoTypes';

const API_ENDPOINT: string = 'http://localhost:3001';

export const addStreak = async (streak: Omit<Streak, 'streak_id' | 'days'>, startDate: string) => {
  const res = await fetch(`${API_ENDPOINT}/streak`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: streak.title,
      startDate: startDate,
    }),
  });
  const newStreak = await res.json();
  return newStreak ?? null;
}

export const updateTodo = async (todo: Todo): Promise<Todo | null> => {
  const res = await fetch(`${API_ENDPOINT}/todo`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: todo.todo_id,
      text: todo.text,
      done: todo.done,
    }),
  });
  const updatedTodo = await res.json();
  return updatedTodo ?? null;
}
