import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div>
    <h1>Bookstore CMS</h1>
    <nav>
      <Link to="/">Books</Link>
      <Link to="/Category">Category</Link>
    </nav>

  </div>
);

export default Nav;
