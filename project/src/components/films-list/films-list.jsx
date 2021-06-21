import React from 'react';
import PropTypes from 'prop-types';
import FilmSmallCard from './film-small-card';
import FilmProp from '../prop-validation/film';

function FilmsList(props) {
  const {films} = props;
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmSmallCard key = {film.id} film = {film} />)}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(FilmProp)).isRequired,
};

export default FilmsList;
