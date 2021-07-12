import React from 'react';
import ReviewProp from '../prop-validation/review.prop';
import {DATE_LOCAL, DATE_LOCAL_OPTIONS} from '../../const';

function FilmReview (props) {
  const {review} = props;
  const {user, rating, comment, date} = review;
  const {name} = user;

  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment.join(' ')}</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime={date}>{date.toLocaleString(DATE_LOCAL, DATE_LOCAL_OPTIONS)}</time>
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
