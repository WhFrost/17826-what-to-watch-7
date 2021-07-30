import React, {useEffect} from 'react';
import FiltersList from '../filters-list/filters-list';
import FilmsList from '../films-list/films-list';
import LoadMoreButton from '../load-more-button/load-more-button';
import {useSelector, useDispatch} from 'react-redux';
import {getFilms, getCurrentGenre, getQuantityFilmsToShow} from '../../store/data/selectors.js';
import {resetCountShownFilms} from '../../store/action';
import {DEFAULT_GENRE} from '../../const';

function Catalog() {
  const films = useSelector(getFilms);
  const currentGenre = useSelector(getCurrentGenre);
  const quantityFilmsToShow = useSelector(getQuantityFilmsToShow);
  const dispatch = useDispatch();
  /*eslint-disable-next-line */
  useEffect(() => dispatch(resetCountShownFilms()), []);

  const getFilteredFilms = (movies, genre) => genre === DEFAULT_GENRE
    ? movies = movies.slice()
    : movies.slice().filter((movie) => movie.genre === genre);

  const filmsToShow = getFilteredFilms(films, currentGenre).slice(0, quantityFilmsToShow);
  return (
    <section className="catalog">
      <FiltersList films={films}/>
      <FilmsList films={filmsToShow} />
      {getFilteredFilms(films, currentGenre).length > quantityFilmsToShow && <LoadMoreButton />}
    </section>
  );
}

export default Catalog;
