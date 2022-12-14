import { useState, useEffect, useRef } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import ContentWrapper from '../components/elements/ContentWrapper';

import { addStreak, addTodo } from '../functions/updateFunctions';

import type { FormEvent } from 'react';

import type { TodoList } from '../../../typings/todoTypes';
import { fetchTodoLists } from '../functions/fetchFunctions';

const AdminPage = (): JSX.Element => {
  const [todoLists, setTodoLists] = useState<TodoList[]>([]);
  const streakTitleRef = useRef<HTMLInputElement | null>(null);
  const streakDateRef = useRef<HTMLInputElement | null>(null);
  const todoTextRef = useRef<HTMLInputElement | null>(null);
  const todoTodoListIdRef = useRef<HTMLSelectElement | null>(null);
  
  const handleAddStreak = (e: FormEvent) => {
    e.preventDefault();
    if (
      !streakTitleRef.current || !streakTitleRef.current.value ||
      !streakDateRef.current || !streakDateRef.current.value
    ) return;
    addStreak({
      title: streakTitleRef.current.value,
    }, streakDateRef.current.value)
  }

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
    if (
      !todoTextRef.current || !todoTextRef.current.value ||
      !todoTodoListIdRef.current
    ) return;
    addTodo({
      text: todoTextRef.current.value,
      todolist_id: Number(todoTodoListIdRef.current.value),
    });
  }

  useEffect(() => {
    fetchTodoLists().then(todoLists => setTodoLists(todoLists));
  }, []);
  
  return (
    <DefaultLayout>
      <ContentWrapper>
        <h1>Admin</h1>
        <h2>Add a new streak</h2>
        <form onSubmit={handleAddStreak}>
          <input
            type="text"
            name="title"
            ref={streakTitleRef}
          />
          <input
            type="date"
            name="start"
            ref={streakDateRef}
          />
          <button>Add streak</button>
        </form>
        <h2>Add a new todo</h2>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            name="text"
            ref={todoTextRef}
          />
          <select
            name="todolist"
            ref={todoTodoListIdRef}
          >
            {todoLists.map(todoList => (
              <option key={todoList.todolist_id} value={todoList.todolist_id}>{todoList.title}</option>
            ))}
          </select>
          <button>Add todo</button>
        </form>
      </ContentWrapper>
    </DefaultLayout>
  );
}

export default AdminPage;
