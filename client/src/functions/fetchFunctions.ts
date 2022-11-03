import type { TodoList } from '../../../typings/todoTypes';

const API_ENDPOINT: string = 'http://localhost:3001';

export const fetchTodoLists = async (): Promise<TodoList[]> => {
  const res = await fetch(`${API_ENDPOINT}/todo`);
  const todoLists = await res.json();
  return todoLists ?? [];
}
