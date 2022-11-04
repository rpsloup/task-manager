import { Link } from 'react-router-dom';

const PageNavigation = (): JSX.Element =>
  (
    <nav>
      <h2>Page Navigation</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/streaks">Streaks</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/admin">Administration</Link></li>
      </ul>
    </nav>
  );

export default PageNavigation;
