import { useState, useEffect } from 'react';
import { fetchTodoLists } from '../functions/fetchFunctions';

import DefaultLayout from '../layouts/DefaultLayout';

import type { Streak } from '../../../typings/streakTypes';
import type { TodoList } from '../../../typings/todoTypes';

const streakData: Streak[] = [
  { id: 0, title: 'Streak 1', days: 128 },
  { id: 1, title: 'Streak 2', days: 87 },
  { id: 2, title: 'Streak 3', days: 42 },
  { id: 3, title: 'Streak 4', days: 251 },
  { id: 4, title: 'Streak 5', days: 17 },
];

const HomePage = (): JSX.Element => {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);

  useEffect(() => {
    fetchTodoLists().then(todoLists => setTodoLists(todoLists));
  }, []);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <h2>Your streaks</h2>
      {streakData.map(streak => (
        <div key={streak.id}>
          <h3>{streak.title}</h3>
          <p>{streak.days} days</p>
        </div>
      ))}
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
