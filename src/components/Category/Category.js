import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { statusChecked } from '../../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const statusChecker = useSelector((state) => state.categories);
  const handleSubmit = () => {
    dispatch(statusChecked());
  };
  return (
    <div>
      <button type="submit" onClick={handleSubmit}>Check status</button>
      <h3>{statusChecker}</h3>
    </div>
  );
};

export default Category;
