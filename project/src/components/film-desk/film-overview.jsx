import React from 'react';
import FilmProp from '../prop-validation/film.prop';
import {
  minGoodlRating,
  minNormalRating,
  minVeryGoodRating,
  awesomeRating
} from '../../const';

function FilmOverview(props) {
  const {film} = props;
  const {
    rating,
    scoresCount,
    description,
    director,
    starring} = film;

  const getTextualRating = (ratingValue) => {
    switch (ratingValue) {
      case (ratingValue === awesomeRating):
        return 'Awesome';
      case (ratingValue >= minVeryGoodRating):
        return 'Very Good';
      case (ratingValue >= minGoodlRating):
        return 'Good';
      case (ratingValue >= minNormalRating):
        return 'Normal';
      default:
        return 'Bad';
    }
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{getTextualRating(rating)}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>
          {
            description
          }
        </p>
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring">
          <strong>Starring: {starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}

FilmOverview.propTypes = {
  film: FilmProp.isRequired,
};

export default FilmOverview;
