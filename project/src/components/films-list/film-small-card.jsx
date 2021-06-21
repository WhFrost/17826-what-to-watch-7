import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FilmProp from '../prop-validation/film';
import {AppRoute} from '../../const';

function FilmSmallCard(props) {
  const {film} = props;
  const {id, name, posterImage} = film;
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.FILM}/:${id}`}>{name}</Link>
      </h3>
    </article>
  );
}

FilmSmallCard.propTypes = {
  film: PropTypes.shape(FilmProp).isRequired,
};

export default FilmSmallCard;
