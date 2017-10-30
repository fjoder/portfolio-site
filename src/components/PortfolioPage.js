import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
  <div>
    <h1>My Work</h1>
    <p>Checkout the following things I've done:</p>
    <ul className="nav nav-pills nav-justified">
      <li>
        <Link to="/portfolio/1" href="/portfolio/1">Item One</Link>
      </li>
      <li>
        <Link to="/portfolio/2" href="/portfolio/2">Item Two</Link>
      </li>
    </ul>
  </div>
);

export default PortfolioPage;
