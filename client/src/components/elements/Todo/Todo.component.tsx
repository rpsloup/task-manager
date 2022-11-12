import type { Todo as TodoType } from '../../../../../typings/todoTypes';

type Props = {
  todo: TodoType;
  doneHandler: (...args: any[]) => any;
  deleteHandler: (...args: any[]) => any;
};

const Todo = ({ todo, doneHandler, deleteHandler }: Props): JSX.Element =>
  (
    <div className="todo">
      <span className="todo-text">{todo.text}</span>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onChange={() => doneHandler(todo)}
      />
      <button
        onClick={() => deleteHandler(todo)}
      >Delete</button>
    </div>
  );

export default Todo;
