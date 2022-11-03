import { useState, useEffect } from 'react';

import type { TodoList } from '../../../typings/todoTypes';

const HomePage = (): JSX.Element => {
  const [todoData, setTodoData] = useState<TodoList[]>([]);

  useEffect(() => {
    fetch('http://localhost:3001/todo')
      .then(res => res.json())
      .then(data => setTodoData(data));
  }, []);

  return (
    <>
      <h1>Home</h1>
      <h2>Your todo lists</h2>
      {todoData.map(list => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <ul>
            {list.todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default HomePage;
