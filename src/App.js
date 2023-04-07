import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './components/books/Books';
import Category from './components/Category/Category';
import Nav from './components/Nav';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/Category" element={<Category />} />
    </Routes>
  </Router>

);

export default App;

