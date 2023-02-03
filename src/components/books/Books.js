import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBook } from '../../redux/books/books';
import UnitBook from './UnitBook';
import InputValue from './InputValue';

const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);

  const addedBooks = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {addedBooks.map((book) => (
          <UnitBook
            key={book.item_id}
            id={book.item_id}
            title={book.title}
            author={book.author}
          />
        ))}
      </ul>
      <InputValue />
    </div>
  );
};

export default Books;
