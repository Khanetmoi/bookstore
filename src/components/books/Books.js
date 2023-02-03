import React from 'react';
import { useSelector } from 'react-redux';
import UnitBook from './UnitBook';
import InputValue from './InputValue';

const Books = () => {
  const addedBooks = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {addedBooks.books.map((book) => (
          <UnitBook
            key={book.id}
            id={book.id}
            book={book}
            title={book.title}
            author={book.author}
            category={book.category}
          />
        ))}
      </ul>
      <InputValue />
    </div>
  );
};

export default Books;
