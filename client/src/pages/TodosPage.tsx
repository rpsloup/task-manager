import { useState, useEffect } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ContentWrapper from '../components/elements/ContentWrapper';
import TodoList from '../components/blocks/TodoList';

import { fetchTodoLists } from '../functions/fetchFunctions';
import { updateTodo, deleteTodo } from '../functions/updateFunctions';

import type { Todo as TodoType, TodoList as TodoListType } from '../../../typings/todoTypes';

const TodosPage = (): JSX.Element => {
  const [todoLists, setTodoLists] = useState<TodoListType[]>([]);

  const handleToggleActive = (todo: TodoType) => {
    updateTodo({
      ...todo,
      done: !todo.done,
    });
  }

  const handleDelete = (todo: TodoType) => {
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
          <TodoList
            key={list.todolist_id}
            todoList={list}
            doneHandler={handleToggleActive}
            deleteHandler={handleDelete}
          />
        ))}
      </ContentWrapper>
    </DefaultLayout>
  );
}

export default TodosPage;
