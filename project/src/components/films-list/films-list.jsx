import React from 'react';
import FilmSmallCard from './film-small-card';

function FilmsList() {
  return (
    <div className="catalog__films-list">
      {new Array(5).fill().map((film) => <FilmSmallCard key = {film} />)}
    </div>
  );
}

export default FilmsList;
