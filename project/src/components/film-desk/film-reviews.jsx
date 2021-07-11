import React from 'react';
import PropTypes from 'prop-types';
import ReviewProp from '../prop-validation/review.prop';
import FilmReview from './film-review';

function FilmReviews(props) {
  const {reviews} = props;
  const firstCol = reviews.slice(0, reviews.length/2);
  const secondCol = reviews.slice(reviews.length/2, reviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstCol.map((review) => <FilmReview key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {secondCol.map((review) => <FilmReview key={review.id} review={review} />)}
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
};

export default FilmReviews;
