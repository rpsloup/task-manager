import { useState, useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ContentWrapper from '../components/elements/ContentWrapper';

import { fetchTodoLists } from '../functions/fetchFunctions';
import { updateTodo, deleteTodo } from '../functions/updateFunctions';

import type { Todo, TodoList } from '../../../typings/todoTypes';

const TodosPage = (): JSX.Element => {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);

  const handleToggleActive = (todo: Todo) => {
    updateTodo({
      ...todo,
      done: !todo.done,
    });
  }

  const handleDelete = (todo: Todo) => {
    if (window.confirm(`Are you sure you want to delete ${todo.text} (ID: ${todo.todo_id})`)) {
      deleteTodo(todo.todo_id);
      setTodoLists(todoLists.map(
        todoList => todoList.todolist_id === todo.todolist_id ? {
          ...todoList,
          todos: todoList.todos.filter(
            filteredTodo => filteredTodo.todo_id !== todo.todo_id
          )
        } : todoList
      ));
    }
  }

  useEffect(() => {
    fetchTodoLists().then(todoLists => setTodoLists(todoLists));
  }, []);
  
  return (
    <DefaultLayout>
      <ContentWrapper>
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
                  <td><b>Delete</b></td>
                </tr>
              </thead>
              <tbody>
                {list.todos.map(todo => (
                  <tr key={todo.todo_id}>
                    <td>{todo.todo_id}</td>
                    <td>{todo.text}</td>
                    <td>
                      <input
                        type="checkbox"
                        defaultChecked={todo.done}
                        onChange={() => handleToggleActive(todo)}
                      />
                    </td>
                    <td><button onClick={() => handleDelete(todo)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </ContentWrapper>
    </DefaultLayout>
  );
}

export default TodosPage;
