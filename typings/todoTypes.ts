export type Todo = {
  todo_id: number;
  text: string;
  done: boolean;
  todolist_id: TodoList['todolist_id'];
};

export type TodoList = {
  todolist_id: number;
  title: string;
  todos: Todo[];
};
