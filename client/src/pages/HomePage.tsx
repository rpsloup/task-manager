const todoData = [
  { id: 0, title: 'List 1', todos: [
    'Todo 1',
    'Todo 2',
    'Todo 3',
    'Todo 4',
    'Todo 5',
  ]},
  { id: 1, title: 'List 2', todos: [
    'Todo 1',
    'Todo 2',
    'Todo 3',
  ]},
  { id: 2, title: 'List 3', todos: [
    'Todo 1',
    'Todo 2',
    'Todo 3',
    'Todo 4',
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
              <li key={index}>{todo}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );

export default HomePage;
