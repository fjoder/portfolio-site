import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <ul className="nav nav-pills nav-justified">
      <li>
        <NavLink to="/" href="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio" href="/portfolio" activeClassName="is-active" exact={true}>Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contact" href="/contact" activeClassName="is-active">Contact</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
