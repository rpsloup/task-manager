import { useState, useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import { fetchTodoLists } from '../functions/fetchFunctions';

import type { TodoList } from '../../../typings/todoTypes';

const TodosPage = (): JSX.Element => {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);

  useEffect(() => {
    fetchTodoLists().then(todoLists => setTodoLists(todoLists));
  }, []);
  
  return (
    <DefaultLayout>
      <h1>Your todo lists</h1>
      {todoLists.map(list => (
        <div key={list.todolist_id}>
          <h3>{list.title}</h3>
          <ul>
            {list.todos.map(todo => (
              <li key={todo.todo_id}>{todo.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </DefaultLayout>
  );
}

export default TodosPage;
