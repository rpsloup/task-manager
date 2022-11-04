import { useRef } from 'react';

import DefaultLayout from '../layouts/DefaultLayout';
import { addStreak } from '../functions/updateFunctions';

import type { FormEvent } from 'react';

const AdminPage = (): JSX.Element => {
  const streakTitleRef = useRef<HTMLInputElement | null>(null);
  const streakDateRef = useRef<HTMLInputElement | null>(null);
  
  const handleAddStreak = (e: FormEvent) => {
    e.preventDefault();
    if (!streakTitleRef.current || !streakDateRef.current) return;
    addStreak({
      title: streakTitleRef.current.value,
    }, streakDateRef.current.value)
  }

  const handleAddTodo = (e: FormEvent) => {
    e.preventDefault();
  }
  
  return (
    <DefaultLayout>
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
      <form onSubmit={handleAddTodo}></form>
    </DefaultLayout>
  );
}

export default AdminPage;
