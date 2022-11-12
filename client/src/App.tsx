import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import StreaksPage from './pages/StreaksPage';
import TodosPage from './pages/TodosPage';
import AdminPage from './pages/AdminPage';

import './styles/reset.scss';
import './styles/main.scss';

const App = (): JSX.Element =>
  (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/streaks" element={<StreaksPage />} />
      <Route path="/todos" element={<TodosPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );

export default App;
