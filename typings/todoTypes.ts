export type Todo = {
  todo_id: number;
  text: string;
  done: boolean;
};

export type TodoList = {
  todolist_id: number;
  title: string;
  todos: Todo[];
};
