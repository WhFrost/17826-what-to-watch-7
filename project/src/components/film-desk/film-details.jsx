import React from 'react';
import FilmProp from '../prop-validation/film.prop';

function FilmDetails(props) {
  const {film} = props;
  const {
    director,
    starring,
    runtime,
    genre,
    released} = film;

  return (
    <div className="film-card__text film-card__row">

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">{director}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          <span className="film-card__details-value">

            {
              starring.map((star) => <React.Fragment key={star + 1}>{star} <br /></React.Fragment>)
            }
          </span>
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">{runtime} 1h 39m</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">{genre}</span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{released}</span>
        </p>
      </div>
    </div>
  );
}

FilmDetails.propTypes = {
  film: FilmProp.isRequired,
};

export default FilmDetails;
