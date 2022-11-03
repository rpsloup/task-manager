import { useState, useEffect } from 'react';
import { fetchTodoLists, fetchStreaks } from '../functions/fetchFunctions';

import DefaultLayout from '../layouts/DefaultLayout';

import type { Streak } from '../../../typings/streakTypes';
import type { TodoList } from '../../../typings/todoTypes';

const HomePage = (): JSX.Element => {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);
  const [streaks, setStreaks] = useState<Streak[]>([]);

  useEffect(() => {
    fetchTodoLists().then(todoLists => setTodoLists(todoLists));
    fetchStreaks().then(streaks => setStreaks(streaks));
  }, []);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h2>Your streaks</h2>
      {streaks.map(streak => (
        <div key={streak.id}>
          <h3>{streak.title}</h3>
          <p>{streak.days} days</p>
        </div>
      ))}
      <h2>Your todo lists</h2>
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

export default HomePage;
