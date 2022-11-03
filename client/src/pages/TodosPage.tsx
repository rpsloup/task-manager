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
          <table>
            <thead>
              <tr>
                <td><b>ID</b></td>
                <td><b>Text</b></td>
                <td><b>Done</b></td>
              </tr>
            </thead>
            <tbody>
              {list.todos.map(todo => (
                <tr key={todo.todo_id}>
                  <td>{todo.todo_id}</td>
                  <td>{todo.text}</td>
                  <td><input type="checkbox" defaultChecked={todo.done} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </DefaultLayout>
  );
}

export default TodosPage;
