import React from 'react';
import PropTypes from 'prop-types';
import {createCapitalizedFirstLetter} from '../../common';

function Filter(props) {
  const {filter} = props;

  return (
    <li className="catalog__genres-item catalog__genres-item--active">
      <a href="/#" className="catalog__genres-link">{createCapitalizedFirstLetter(filter)}</a>
    </li>
  );
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
