import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getFilms, getGenres} from '../../store/data/selectors';
import {setGenres} from '../../store/action';
import Filter from './filter';

function FiltersList(prps) {
  const films = useSelector(getFilms);
  const genres = useSelector(getGenres);
  const dispatch = useDispatch();

  /*eslint-disable-next-line */
  useEffect(() => dispatch(setGenres(films)), [films]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((filter) => <Filter key={filter} filter={filter} />)}
    </ul>
  );
}

export default FiltersList;
