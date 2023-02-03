import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const InputValue = () => {
  const [state, setState] = useState({
    title: '',
    author: '',
    category: 'action',
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
    const { title, author, category } = state;
    if (title.length > 0 && author.length > 0) {
      dispatch(
        addBook({
          title,
          author,
          category,
          item_id: uuidv4(),
        }),
      );
    }
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
