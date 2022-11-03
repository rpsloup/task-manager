import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';

const App = (): JSX.Element =>
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todos" element={<TodosPage />} />
    </Routes>
  );

export default App;
