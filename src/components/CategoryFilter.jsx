import React from 'react';
import PropTypes from 'prop-types';

const Categories = ['Male', 'Female', 'paypal', 'check'];

const CategoryFilter = ({ handleFilterChange }) => (
  <select onChange={handleFilterChange}>
    <option value="ALL">ALL</option>
    {Categories.map((category) => (
      <option value={category} key={category}>
        {category}
      </option>
    ))}
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
