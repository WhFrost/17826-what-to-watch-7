import React from 'react';
import PropTypes from 'prop-types';
import FiltersList from '../filters-list/filters-list';
import FilmsList from '../films-list/films-list';
import LoadMoreButton from '../load-more-button/load-more-button';
import FilmProp from '../prop-validation/film.prop';

function Catalog(props) {
  const {films} = props;
  return (
    <section className="catalog">
      <FiltersList />
      <FilmsList films = {films} />
      <LoadMoreButton />
    </section>
  );
}

Catalog.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default Catalog;
