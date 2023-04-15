import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import './books/books.css';

const Nav = () => (
  <div className="header">
    <div>
      <h1 className="logo" to="/">
        Bookstore CMS
      </h1>
      <nav>
        <Link className="navItem" to="/">Books</Link>
        <Link className="navItem" to="/Category">Category</Link>
      </nav>
    </div>
    <div className="Icircle">
      <BsFillPersonFill className="icon" />
    </div>
  </div>
);

export default Nav;
