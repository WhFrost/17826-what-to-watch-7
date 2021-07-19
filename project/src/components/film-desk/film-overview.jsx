import React from 'react';
import FilmProp from '../prop-validation/film.prop';
import {
  minNormalRating,
  minGoodlRating,
  minVeryGoodRating,
  awesomeRating,
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

    if (ratingValue < minNormalRating) {
      textualRating = TextualRating.BAD;
    }
    else if (ratingValue >= minNormalRating && ratingValue < minGoodlRating) {
      textualRating = TextualRating.NORMAL;
    }
    else if (ratingValue >= minGoodlRating && ratingValue < minVeryGoodRating) {
      textualRating = TextualRating.GOOD;
    }
    else if (ratingValue >= minVeryGoodRating && ratingValue < awesomeRating) {
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
