import React, {useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import Header from '../header/header';
import FilmDesk from '../film-desk/film-desk';
import FilmList from '../films-list/films-list';
import Footer from '../footer/footer';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {
  getCurrentFilm,
  getIsCurrentFilmLoaded,
  getReviews,
  getIsReviewsLoaded,
  getSimilarFilms,
  getIsSimilarFilmsLoaded
} from '../../store/currentFilm/selectors';
import browserHistory from '../../browser-history';
import {
  fetchCurrentFilm,
  postFavoriteFilm,
  fetchReviews,
  fetchSimilar
} from '../../store/api-action';
import {redirectToRoute, resetCurrentFilm} from '../../store/action';
import LoadingSpinner from '../loading/loading';
import {AuthorizationStatus, AppRoute} from '../../const';

function Film() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const currentFilm = useSelector(getCurrentFilm);
  const isCurrentFilmLoaded = useSelector(getIsCurrentFilmLoaded);
  const reviews = useSelector(getReviews);
  const isReviewsLoaded = useSelector(getIsReviewsLoaded);
  const similarFilms = useSelector(getSimilarFilms);
  const isSimilarFilmsLoaded = useSelector(getIsSimilarFilmsLoaded);

  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(() => {
    if (currentFilm.id !== Number(id)) {
      dispatch(resetCurrentFilm());
      dispatch(fetchCurrentFilm(id));
      dispatch(fetchSimilar(id));
    }
    return currentFilm;
  /*eslint-disable-next-line */
  }, [id]);

  /*eslint-disable-next-line */
  useEffect(() => dispatch(fetchReviews(id)), [id]);

  const {
    name,
    backgroundImage,
    posterImage,
    genre,
    released,
    backgroundColor,
    isFavorite,
  } = currentFilm;

  if (!isCurrentFilmLoaded || !isReviewsLoaded) {
    return <LoadingSpinner />;
  }

  const handleFavoriteClick = () => {
    const isFavoriteFilm = currentFilm.isFavorite ? 0 : 1;
    dispatch(postFavoriteFilm(id, isFavoriteFilm));
  };

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
                {
                  authorizationStatus === AuthorizationStatus.AUTH
                    ?
                    <button
                      className="btn btn--list film-card__button"
                      type="button"
                      onClick={() => handleFavoriteClick()}
                    >
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
                      </svg>
                      <span>My list</span>
                    </button>
                    :
                    <button
                      className="btn btn--list film-card__button"
                      type="button"
                      onClick={() => dispatch(redirectToRoute(AppRoute.LOGIN))}
                    >
                      <svg viewBox="0 0 18 14" width="18" height="14">
                        <use xlinkHref="#add"></use>
                      </svg>
                      <span>My list</span>
                    </button>
                }
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

export default Film;
