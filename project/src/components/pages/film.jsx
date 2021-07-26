import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import FilmProp from '../prop-validation/film.prop';
import ReviewProp from '../prop-validation/review.prop';
import {Link, useParams} from 'react-router-dom';
import Header from '../header/header';
import FilmDesk from '../film-desk/film-desk';
import FilmList from '../films-list/films-list';
import Footer from '../footer/footer';
import {connect} from 'react-redux';
import browserHistory from '../../browser-history';
import {
  fetchCurrentFilm,
  fetchReviews,
  fetchSimilar
} from '../../store/api-action';
import {ActionCreator} from '../../store/action';
import LoadingSpinner from '../loading/loading';
import {AuthorizationStatus} from '../../const';

function Film(props) {
  const {
    authorizationStatus,
    currentFilm,
    isCurrentFilmLoaded,
    reviews,
    isReviewsLoaded,
    similarFilms,
    isSimilarFilmsLoaded,
    loadData,
    resetFilm} = props;

  const {id} = useParams();

  useEffect(() => {
    if (currentFilm.id !== Number(id)) {
      resetFilm();
      loadData(id);
    }
    return currentFilm;
  }, [id]);

  const {
    name,
    backgroundImage,
    posterImage,
    genre,
    released,
    backgroundColor,
  } = currentFilm;

  if (!isCurrentFilmLoaded || !isReviewsLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button"
                  onClick={() => browserHistory.push(`/player/${id}`)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 18 14" width="18" height="14">
                    <use xlinkHref="#in-list"></use>
                  </svg>
                  <span>My list</span>
                </button>
                {
                  authorizationStatus === AuthorizationStatus.AUTH
                    ? <Link to={`/film/${id}/review`} className="btn film-card__button">Add review</Link>
                    : ''
                }
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <FilmDesk film={currentFilm} reviews={reviews}/>

          </div>
        </div>
      </section>
      <div className="page-content">
        {
          !isSimilarFilmsLoaded
            ? <LoadingSpinner />
            :
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <FilmList films = {similarFilms} />
            </section>
        }
        <Footer />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  currentFilm: state.currentFilm,
  isCurrentFilmLoaded: state.isCurrentFilmLoaded,
  reviews: state.reviews,
  isReviewsLoaded: state.isReviewsLoaded,
  similarFilms: state.similarFilms,
  isSimilarFilmsLoaded: state.isSimilarFilmsLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  resetFilm() {
    dispatch(ActionCreator.resetCurrentFilm());
  },
  loadData(id) {
    dispatch(fetchCurrentFilm(id));
    dispatch(fetchReviews(id));
    dispatch(fetchSimilar(id));
  },
});

Film.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  currentFilm: FilmProp.isRequired,
  isCurrentFilmLoaded: PropTypes.bool.isRequired,
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
  isReviewsLoaded: PropTypes.bool.isRequired,
  similarFilms: PropTypes.arrayOf(FilmProp).isRequired,
  isSimilarFilmsLoaded: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  resetFilm: PropTypes.func.isRequired,
};

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
