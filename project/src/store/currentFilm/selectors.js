import {NameSpace} from '../root-reducer';

const getCurrentFilm = (state) => state[NameSpace.CURRENT_FILM].currentFilm;
const getIsCurrentFilmLoaded = (state) => state[NameSpace.CURRENT_FILM].isCurrentFilmLoaded;
const getReviews = (state) => state[NameSpace.CURRENT_FILM].reviews;
const getIsReviewsLoaded = (state) => state[NameSpace.CURRENT_FILM].isReviewsLoaded;
const getSimilarFilms = (state) => state[NameSpace.CURRENT_FILM].similarFilms;
const getIsSimilarFilmsLoaded = (state) => state[NameSpace.CURRENT_FILM].isSimilarFilmsLoaded;

export {
  getCurrentFilm,
  getIsCurrentFilmLoaded,
  getReviews,
  getIsReviewsLoaded,
  getSimilarFilms,
  getIsSimilarFilmsLoaded
};
