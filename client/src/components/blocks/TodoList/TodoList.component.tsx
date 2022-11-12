import Todo from '../../elements/Todo';

import type { TodoList as TodoListType } from '../../../../../typings/todoTypes';

type Props = {
  todoList: TodoListType;
  doneHandler: (...args: any[]) => any;
  deleteHandler: (...args: any[]) => any;
};

const TodoList = ({ todoList, doneHandler, deleteHandler }: Props): JSX.Element =>
  (
    <div>
      <h2>{todoList.title}</h2>
      {todoList.todos.map(todo => (
        <Todo
          key={todo.todo_id}
          todo={todo}
          doneHandler={doneHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );

export default TodoList;
