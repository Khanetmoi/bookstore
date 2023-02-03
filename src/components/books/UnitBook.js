import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const UnitBook = ({
  title, author, id,
}) => {
  const dispatch = useDispatch();

  const bookDelete = () => dispatch(removeBook(id));
  return (
    <div>
      <small>action</small>
      <h2>{title}</h2>
      <small>{author}</small>
      <div className="flex">
        <button type="submit">comments</button>
        <button type="submit" onClick={bookDelete}>Remove</button>
        <button type="submit">Edit</button>
      </div>
    </div>
  );
};

UnitBook.defaultProps = {
  title: PropTypes.string,
  author: PropTypes.string,
  id: PropTypes.string,
};

UnitBook.propTypes = {
  title: 'hello',
  author: 'Van',
  id: 'PropTypes.string',

};

export default UnitBook;
