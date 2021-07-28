import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addReview} from '../../store/api-action';
import {RATING, MIN_LENGTH_REVIEW, MAX_LENGTH_REVIEW} from '../../const';

function AddReviewForm() {
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });

  const dispatch = useDispatch();

  const {id} = useParams();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(addReview(id, review));
  };

  const checkValidForm = () => {
    if (review.rating === 0 || (review.comment.length <= MIN_LENGTH_REVIEW || review.comment.length >= MAX_LENGTH_REVIEW)) {
      return true;
    }
    return false;
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <div className="rating">
          <div className="rating__stars">
            {RATING.map((element) => (
              <React.Fragment key={`star-${element}`}>
                <input
                  className="rating__input"
                  id={`star-${element}`}
                  type="radio"
                  name="rating"
                  value={element}
                  onChange={({ target }) => {
                    const value = Number(target.value);
                    setReview({ ...review, rating: value });
                  }}
                />
                <label className="rating__label" htmlFor={`star-${element}`}>
                  Rating {element}
                </label>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div
          className="add-review__text"
          style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}
        >
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={({ target }) => {
              const textReview = target.value;
              setReview({ ...review, comment: textReview });
            }}
          >
          </textarea>
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={checkValidForm()}
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddReviewForm;
