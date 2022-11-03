import type { Todo } from '../../../typings/todoTypes';

const API_ENDPOINT: string = 'http://localhost:3001';

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
  const newTodo = await res.json();
  return newTodo ?? [];
}
