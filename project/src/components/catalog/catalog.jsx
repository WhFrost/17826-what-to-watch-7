import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../filters-list/filters-list';
import FilmsList from '../films-list/films-list';
import LoadMoreButton from '../load-more-button/load-more-button';
import FilmProp from '../prop-validation/film.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function Catalog(props) {
  const {films, filteredFilms, currentGenre, setFilteredFilms, quantityFilmsToShow} = props;

  /*eslint-disable-next-line */
  useEffect(() => setFilteredFilms(currentGenre), [currentGenre]);

  const filmsToShow = filteredFilms.slice(0, quantityFilmsToShow);
  return (
    <section className="catalog">
      <FiltersList films={films}/>
      <FilmsList films={filmsToShow} />
      {filteredFilms.length > quantityFilmsToShow && <LoadMoreButton />}
    </section>
  );
}

const mapStateToProps = (state) => ({
  quantityFilmsToShow: state.quantityFilmsToShow,
  currentGenre: state.currentGenre,
  filteredFilms: state.filteredFilms,
});

const mapDispatchToProps = (dispatch) => ({
  setFilteredFilms(genre) {
    dispatch(ActionCreator.setFilteredFilms(genre));
  },
});

Catalog.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  filteredFilms: PropTypes.arrayOf(FilmProp).isRequired,
  currentGenre: PropTypes.string.isRequired,
  setFilteredFilms: PropTypes.func.isRequired,
  quantityFilmsToShow: PropTypes.number.isRequired,
};

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
