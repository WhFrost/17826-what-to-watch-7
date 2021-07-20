import React from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../filters-list/filters-list';
import FilmsList from '../films-list/films-list';
import LoadMoreButton from '../load-more-button/load-more-button';
import FilmProp from '../prop-validation/film.prop';
import {connect} from 'react-redux';
import {DEFAULT_GENRE} from '../../const';

function Catalog(props) {
  const {films, currentGenre, quantityFilmsToShow} = props;

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

const mapStateToProps = (state) => ({
  quantityFilmsToShow: state.quantityFilmsToShow,
  currentGenre: state.currentGenre,
});


Catalog.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  currentGenre: PropTypes.string.isRequired,
  quantityFilmsToShow: PropTypes.number.isRequired,
};

export {Catalog};
export default connect(mapStateToProps, null)(Catalog);
