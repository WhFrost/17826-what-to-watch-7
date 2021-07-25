import {INC_QUANTITY_FILMS} from '../const';

const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
  LOAD_CURRENT_FILM: 'data/loadCurrentFilm',
  LOAD_REVIEWS: 'data/loadReviews',
  ADD_REVIEW: 'data/addReview',
  LOAD_SIMILAR_FILMS: 'data/loadSimilarFilms',
  SET_GENRES: 'data/setGenres',
  CHANGE_GENRE: 'data/changeGenre',
  LOAD_MORE_FILMS: 'data/loadMoreFilms',
  RESET_COUNT_SHOWN_FILMS: 'data/resetCountShowFilms',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  SET_LOGIN_ERROR: 'user/loginIncorrected',
  REDIRECT_TO_ROUTE: 'navigation/redirectToRoute',
};

const ActionCreator ={
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromoFilm: (promoFilm) => ({
    type: ActionType.LOAD_PROMO_FILM,
    payload: promoFilm,
  }),
  loadCurrentFilm: (currentFilm) => ({
    type: ActionType.LOAD_CURRENT_FILM,
    payload: currentFilm,
  }),
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  addReview: (review) => ({
    type: ActionType.ADD_REVIEW,
    payload: review,
  }),
  loadSimilarFilms: (similarFilms) => ({
    type: ActionType.LOAD_SIMILAR_FILMS,
    payload: similarFilms,
  }),
  setGenres: (films) => ({
    type: ActionType.SET_GENRES,
    payload: films,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadMoreFilms: () => ({
    type: ActionType.LOAD_MORE_FILMS,
    payload: INC_QUANTITY_FILMS,
  }),
  resetCountShownFilms: () => ({
    type: ActionType.RESET_COUNT_SHOWN_FILMS,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  setLoginError: () => ({
    type: ActionType.SET_LOGIN_ERROR,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};

export {
  ActionType,
  ActionCreator
};
