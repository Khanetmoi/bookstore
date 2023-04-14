import React, { useState } from 'react';
import UnitBook from './UnitBook';
import InputValue from './InputValue';

const Books = () => {
  const [books] = useState([
    {
      id: 1,
      category: 'action',
      title: 'Titanic',
      author: 'Khan',
    },
    {
      id: 2,
      category: 'action',
      title: 'Titanic',
      author: 'Inayat',
    },
    {
      id: 3,
      category: 'action',
      title: 'tanic',
      author: 'Winfred',
    },
    {
      id: 4,
      category: 'action',
      title: 'Titan',
      author: 'Van',
    },
  ]);
  return (
    <div>
      <ul>
        {books.map((book) => (
          <UnitBook key={book.id} id={book.id} book={book} />
        ))}
      </ul>
      <InputValue />
    </div>
  );
};

export default Books;
