import axios from 'axios';

import type { TodoList } from '../../../typings/todoTypes';
import type { Streak } from '../../../typings/streakTypes';

export const fetchTodoLists = async (): Promise<TodoList[]> => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/todo`);
    return await res.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export const fetchStreaks = async (): Promise<Streak[]> => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/streak`);
    return await res.data ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
