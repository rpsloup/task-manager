import type { TodoList } from '../../../typings/todoTypes';
import type { Streak } from '../../../typings/streakTypes';

export const fetchTodoLists = async (): Promise<TodoList[]> => {
  const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/todo`);
  const todoLists = await res.json();
  return todoLists ?? [];
}

export const fetchStreaks = async (): Promise<Streak[]> => {
  const res = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/streak`);
  const streaks = await res.json();
  return streaks ?? [];
}
