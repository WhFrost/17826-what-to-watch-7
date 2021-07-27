import React from 'react';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';
import {getCurrentGenre} from '../../store/data/selectors';
import {changeGenre, resetCountShownFilms} from '../../store/action';
import {createCapitalizedFirstLetter} from '../../common';

function Filter(props) {
  const {filter} = props;
  const currentGenre = useSelector(getCurrentGenre);
  const dispatch = useDispatch();

  return (
    <li className={`catalog__genres-item ${currentGenre === filter && 'catalog__genres-item--active'}`}>
      <a href="/#" className="catalog__genres-link" data-genre={filter}
        onClick={(evt) => {
          evt.preventDefault();
          dispatch(changeGenre(evt.target.dataset.genre));
          dispatch(resetCountShownFilms());
        }}
      >{createCapitalizedFirstLetter(filter)}
      </a>
    </li>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Filter;
