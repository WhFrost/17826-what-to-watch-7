import React from 'react';
import PropTypes from 'prop-types';
import ReviewProp from '../prop-validation/review.prop';
import FilmReview from './film-review';

function FilmReviews(props) {
  const {reviews} = props;

  const oddReviews = [];
  const evenReviews = [];
  reviews.forEach((review, index) => (index - 1) % 2 !== 0 ? oddReviews.push(review) : evenReviews.push(review));

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {oddReviews.map((review) => <FilmReview key={review.id} review={review} />)}
      </div>
      <div className="film-card__reviews-col">
        {evenReviews.map((review) => <FilmReview key={review.id} review={review} />)}
      </div>
    </div>
  );
}

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
};

export default FilmReviews;
