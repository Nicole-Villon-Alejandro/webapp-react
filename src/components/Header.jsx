import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Movie App</h1>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/movies/create">
            Create Movie
          </NavLink>
        </div>
      </nav>
    </header>
  );
}