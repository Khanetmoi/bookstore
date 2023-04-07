import React from 'react';

const InputValue = () => (
  <div>
    <h2>Add new Book</h2>
    <div>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add book</button>
    </div>
  </div>
);

export default InputValue;
