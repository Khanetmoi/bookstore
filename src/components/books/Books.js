import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import InputValue from './InputValue';
import UnitBook from './UnitBook';
import { fetchBooks } from '../../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const addedBooks = useSelector((state) => state.books);
  return (
    <div>
      {addedBooks.map((book) => (
        <UnitBook
          key={book.item_id}
          title={book.title}
          author={book.author}
          id={book.item_id}
        />
      ))}
      <InputValue />
    </div>
  );
};

export default Books;
