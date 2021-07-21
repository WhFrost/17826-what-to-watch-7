import React from 'react';
import ReviewProp from '../prop-validation/review.prop';
import {DATE_LOCAL, DATE_LOCAL_OPTIONS} from '../../const';

function FilmReview (props) {
  const {review} = props;
  const {user, rating, comment, date} = review;
  const {name} = user;

  const newDate = new Date(date);

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={newDate}>{newDate.toLocaleString(DATE_LOCAL, DATE_LOCAL_OPTIONS)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}

FilmReview.propTypes = {
  review: ReviewProp.isRequired,
};

export default FilmReview;
