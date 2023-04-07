import React from 'react';
import PropTypes from 'prop-types';

const UnitBook = ({ book }) => (
  <div>
    <small>{book.category}</small>
    <h2>{book.title}</h2>
    <small>{book.author}</small>
    <div className="flex">
      <button type="submit">comments</button>
      <button type="submit">Remove</button>
      <button type="submit">Edit</button>
    </div>
  </div>
);

UnitBook.defaultProps = {
  book: {},
};

UnitBook.propTypes = {
  book: {
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  },
};

export default UnitBook;

UnitBook.defaultProps = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

UnitBook.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};
