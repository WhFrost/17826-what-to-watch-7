import React from 'react';
import FilmProp from '../prop-validation/film.prop';
import {
  MIN_NORMAL_RATING,
  MIN_GOOD_RATING,
  MIN_VERY_GOOD_RATING,
  AWESOME_RATING,
  TextualRating
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
    let textualRating = '';

    if (ratingValue < MIN_NORMAL_RATING) {
      textualRating = TextualRating.BAD;
    }
    else if (ratingValue >= MIN_NORMAL_RATING && ratingValue < MIN_GOOD_RATING) {
      textualRating = TextualRating.NORMAL;
    }
    else if (ratingValue >= MIN_GOOD_RATING && ratingValue < MIN_VERY_GOOD_RATING) {
      textualRating = TextualRating.GOOD;
    }
    else if (ratingValue >= MIN_VERY_GOOD_RATING && ratingValue < AWESOME_RATING) {
      textualRating = TextualRating.VERY_GOOD;
    } else {
      textualRating = TextualRating.AWESOME;
    }
    return textualRating;
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
