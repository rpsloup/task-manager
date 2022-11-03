import type { TodoList } from '../../../typings/todoTypes';

const todoData: TodoList[] = [
  { id: 0, title: 'List 1', todos: [
    { text: 'Todo 1' },
    { text: 'Todo 2' },
    { text: 'Todo 3' },
    { text: 'Todo 4' },
    { text: 'Todo 5' },
  ]},
  { id: 1, title: 'List 2', todos: [
    { text: 'Todo 1' },
    { text: 'Todo 2' },
    { text: 'Todo 3' },
  ]},
  { id: 2, title: 'List 3', todos: [
    { text: 'Todo 1' },
    { text: 'Todo 2' },
    { text: 'Todo 3' },
    { text: 'Todo 4' },
  ]},
];

const HomePage = (): JSX.Element =>
  (
    <>
      <h1>Home</h1>
      <h2>Your todo lists</h2>
      {todoData.map(list => (
        <div key={list.id}>
          <h3>{list.title}</h3>
          <ul>
            {list.todos.map((todo, index) => (
              <li key={index}>{todo.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

export default HomePage;
