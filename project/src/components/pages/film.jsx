import React from 'react';
import PropTypes from 'prop-types';
import FilmProp from '../prop-validation/film.prop';
import {Link, useParams, useHistory} from 'react-router-dom';
import Header from '../header/header';
import FilmList from '../films-list/films-list';
import Footer from '../footer/footer';

function Film(props) {
  const {films} = props;
  const {id} = useParams();
  const history = useHistory();
  const film = films.find((element) => element.id === id);
  const {
    name,
    backgroundImage,
    posterImage,
    genre,
    released,
    backgroundColor,
    rating,
    scoresCount,
    description,
    director,
    starring} = film;

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
                  onClick={() => history.push(`/player/${id}`)}
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
                <Link to={`/film/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={name} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">{rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{scoresCount} ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>
                  {
                    description.join(' ')
                  }
                </p>
                <p className="film-card__director"><strong>Director: {director}</strong></p>
                <p className="film-card__starring">
                  <strong>Starring: {starring.join(', ')}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films = {films}/>
        </section>
        <Footer />
      </div>
    </>
  );
}

Film.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default Film;
