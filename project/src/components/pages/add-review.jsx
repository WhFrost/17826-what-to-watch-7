import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import FilmProp from '../prop-validation/film.prop';
import {useParams} from 'react-router-dom';
import HeaderLogo from '../logo/header-logo';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import UserBlock from '../user-block/user-block';
import {connect} from 'react-redux';
import {RATING} from '../../const';
import {addReview} from '../../store/api-action';

function AddReview(props) {
  const {currentFilm, onSubmit} = props;
  const [review, setReview] = useState({
    rating: 0,
    comment: '',
  });
  const [disabledForm, setDisabledForm] = useState(false);

  console.log(review);

  const {id} = useParams();
  const {name, backgroundImage, backgroundColor, posterImage} = currentFilm;

  useEffect(() => {
    if (review.rating === 0) {
      setDisabledForm(true);
    }
    onSubmit(id, review);
  }, []);

  return (
    <section className="film-card film-card--full" style={{backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <HeaderLogo />
          <Breadcrumbs />
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={onSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              {
                RATING.map((element) => (
                  <React.Fragment key = {`star-${element}`}>
                    <input className="rating__input" id={`star-${element}`} type="radio" name="rating" value={element}
                      onChange={({target}) => {
                        const value = Number(target.value);
                        setReview({...review, rating: value});
                      }}
                    />
                    <label className="rating__label" htmlFor={`star-${element}`}>Rating {element}</label>
                  </React.Fragment>
                ))
              }
            </div>
          </div>
          <div className="add-review__text" style={{backgroundColor: 'rgba(255, 255, 255, 0.25)'}}>
            <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"
              onChange={({target}) => {
                const textReview = target.value;
                setReview({...review, comment: textReview});
              }}
            >
            </textarea>
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled = {disabledForm}
              >
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, review) {
    dispatch(addReview(id, review));
  },
});

AddReview.propTypes = {
  currentFilm: FilmProp.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabledForm: PropTypes.bool.isRequired,
};

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
