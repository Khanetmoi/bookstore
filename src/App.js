import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Books from './components/books/Books';
// import { Router } from 'react-router-dom'
import Nav from './components/Nav'

const App = () => {
  return (
    <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Books />} />
        </Routes>
    </Router>
    
  )
}

export default App

