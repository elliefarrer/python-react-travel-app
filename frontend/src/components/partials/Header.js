import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar bg-light">
        <Link className="navbar-brand h1" to="/">Vacilando</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/cities">Explore</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default withRouter(Header);
