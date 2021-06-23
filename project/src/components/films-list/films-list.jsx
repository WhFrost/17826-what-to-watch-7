import React from 'react';
import PropTypes from 'prop-types';
import FilmSmallCard from './film-small-card';
import FilmProp from '../prop-validation/film.prop';

function FilmsList(props) {
  const {films} = props;
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmSmallCard key = {film.id} film = {film} />)}
    </div>
  );
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default FilmsList;
