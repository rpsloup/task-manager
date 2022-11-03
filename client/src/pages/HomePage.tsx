import { useState, useEffect } from 'react';
import { fetchTodoLists } from '../functions/fetchFunctions';

import DefaultLayout from '../layouts/DefaultLayout';
import type { TodoList } from '../../../typings/todoTypes';

const HomePage = (): JSX.Element => {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);

  useEffect(() => {
    fetchTodoLists().then(todoLists => setTodoLists(todoLists));
  }, []);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h2>Your todo lists</h2>
      {todoLists.map(list => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <ul>
            {list.todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </DefaultLayout>
  );
}

export default HomePage;
