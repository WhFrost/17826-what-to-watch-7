import React from 'react';
import FiltersList from '../filters-list/filters-list';
import FilmsList from '../films-list/films-list';
import LoadMoreButton from '../load-more-button/load-more-button';

function Catalog() {
  return (
    <section className="catalog">
      <FiltersList />
      <FilmsList />
      <LoadMoreButton />
    </section>
  );
}

export default Catalog;
