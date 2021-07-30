import {createAction} from '@reduxjs/toolkit';
import {INC_QUANTITY_FILMS} from '../const';

const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
  LOAD_CURRENT_FILM: 'currentFilm/loadCurrentFilm',
  RESET_CURRENT_FILM: 'currentFilm/resetCurrentFilm',
  LOAD_REVIEWS: 'currentFilm/loadReviews',
  ADD_REVIEW: 'currentFilm/addReview',
  LOAD_SIMILAR_FILMS: 'currentFilm/loadSimilarFilms',
  LOAD_FAVORITE_FILMS: 'data/loadFavoriteFilms',
  ADD_PROMO_FILM_TO_FAVORITE: 'dataFilm/addPromoFilmToFavorite',
  ADD_CURRENT_FILM_TO_FAVORITE: 'dataFilm/addCurrentFilmToFavorite',
  SET_GENRES: 'data/setGenres',
  CHANGE_GENRE: 'data/changeGenre',
  LOAD_MORE_FILMS: 'data/loadMoreFilms',
  RESET_COUNT_SHOWN_FILMS: 'data/resetCountShowFilms',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  SET_USER_AVATAR: 'user/setAvatar',
  LOGOUT: 'user/logout',
  SET_LOGIN_ERROR: 'user/loginIncorrected',
  REDIRECT_TO_ROUTE: 'navigation/redirectToRoute',
};

const loadFilms = createAction(ActionType.LOAD_FILMS, (films) => ({
  payload: films,
}));
const loadPromoFilm = createAction(ActionType.LOAD_PROMO_FILM, (promoFilm) => ({
  payload: promoFilm,
}));
const loadCurrentFilm = createAction(ActionType.LOAD_CURRENT_FILM, (currentFilm) => ({
  payload: currentFilm,
}));
const resetCurrentFilm = createAction(ActionType.RESET_CURRENT_FILM);
const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({
  payload: reviews,
}));
const addReview = createAction(ActionType.ADD_REVIEW, (review) => ({
  payload: review,
}));
const loadSimilarFilms = createAction(ActionType.LOAD_SIMILAR_FILMS, (similarFilms) => ({
  payload: similarFilms,
}));
const loadFavoriteFilms = createAction(ActionType.LOAD_FAVORITE_FILMS, (favoriteFilms) => ({
  payload: favoriteFilms,
}));
const addPromoFilmToFavorite = createAction(ActionType.ADD_PROMO_FILM_TO_FAVORITE, (favoriteFilm) => ({
  payload: favoriteFilm,
}));
const addCurrentFilmToFavorite = createAction(ActionType.ADD_CURRENT_FILM_TO_FAVORITE, (favoriteFilm) => ({
  payload: favoriteFilm,
}));
const setGenres = createAction(ActionType.SET_GENRES, (films) => ({
  payload: films,
}));
const changeGenre = createAction(ActionType.CHANGE_GENRE, (genre) => ({
  payload: genre,
}));
const loadMoreFilms = createAction(ActionType.LOAD_MORE_FILMS, () => ({
  payload: INC_QUANTITY_FILMS,
}));
const resetCountShownFilms = createAction(ActionType.RESET_COUNT_SHOWN_FILMS);
const requireAuthorization = createAction(ActionType.REQUIRED_AUTHORIZATION, (status) => ({
  payload: status,
}));
const setUserAvatar = createAction(ActionType.SET_USER_AVATAR, (url) => ({
  payload: url,
}));
const logout = createAction(ActionType.LOGOUT);
const setLoginError = createAction(ActionType.SET_LOGIN_ERROR);
const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));


export {
  ActionType,
  loadFilms,
  loadPromoFilm,
  loadCurrentFilm,
  resetCurrentFilm,
  loadReviews,
  addReview,
  loadSimilarFilms,
  loadFavoriteFilms,
  addPromoFilmToFavorite,
  addCurrentFilmToFavorite,
  setGenres,
  changeGenre,
  loadMoreFilms,
  resetCountShownFilms,
  requireAuthorization,
  setUserAvatar,
  logout,
  setLoginError,
  redirectToRoute
};
