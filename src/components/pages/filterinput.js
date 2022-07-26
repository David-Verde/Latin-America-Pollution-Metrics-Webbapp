import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, handler }) => (
  <div className="deaths-filter">
    {' Filter by minimum number of Deaths: '}
    <input
      type="number"
      id="deaths-range"
      name="death-range"
      min="0"
      max="9999999999"
      value={value}
      onChange={handler}
    />
  </div>
);

Filter.propTypes = ({
  value: PropTypes.number,
  handler: PropTypes.func,
}).isRequired;

export default Filter;
