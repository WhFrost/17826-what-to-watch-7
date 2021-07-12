import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import FiltersList from '../filters-list/filters-list';
import FilmsList from '../films-list/films-list';
import LoadMoreButton from '../load-more-button/load-more-button';
import FilmProp from '../prop-validation/film.prop';

function Catalog(props) {
  const {films, quantityFilmsToShow} = props;
  const filmsToShow = films.slice(0, quantityFilmsToShow);
  return (
    <section className="catalog">
      <FiltersList films={films}/>
      <FilmsList films={filmsToShow} />
      {films.length > quantityFilmsToShow && <LoadMoreButton />}
    </section>
  );
}

const mapStateToProps = (state) => ({
  quantityFilmsToShow: state.quantityFilmsToShow,
});

Catalog.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
  quantityFilmsToShow: PropTypes.number.isRequired,
};

export {Catalog};
export default connect(mapStateToProps, null)(Catalog);
