import React from 'react';
import { Link } from 'react-router-dom';
import './books/books.css';

const Nav = () => (
  <div className="header">
    <h1 className="logo" to="/">
      Bookstore CMS
    </h1>
    <nav>
      <Link className="navItem" to="/">Books</Link>
      <Link className="navItem" to="/Category">Category</Link>
    </nav>

  </div>
);

export default Nav;
