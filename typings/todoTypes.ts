export type Todo = {
  text: string;
};

export type TodoList = {
  id: number;
  title: string;
  todos: Todo[];
};
