import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const InputValue = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const eventHandler = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(state.title, state.author));
    state.title = '';
    state.author = '';
  };

  return (
    <div>
      <h2>Add new Book</h2>
      <div>
        <input type="text" name="title" value={state.title} onChange={eventHandler} placeholder="Book title" required />
        <input type="text" name="author" value={state.author} onChange={eventHandler} placeholder="author" required />
        <button type="submit" onClick={handleSubmit}>Add book</button>
      </div>
    </div>
  );
};

export default InputValue;
