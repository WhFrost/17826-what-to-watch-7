import {INC_QUANTITY_FILMS} from '../const';

const ActionType = {
  LOAD_FILMS: 'data/loadFilms',
  LOAD_PROMO_FILM: 'data/loadPromoFilm',
  LOAD_REVIEWS: 'data/loadReviews',
  SET_GENRES: 'data/setGenres',
  SET_FILTERED_FILMS: 'data/setFilteredFilms',
  CHANGE_GENRE: 'data/changeGenre',
  LOAD_MORE_FILMS: 'data/loadMoreFilms',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
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
  loadReviews: (reviews) => ({
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  }),
  setGenres: (films) => ({
    type: ActionType.SET_GENRES,
    payload: films,
  }),
  setFilteredFilms: (genre) => ({
    type: ActionType.SET_FILTERED_FILMS,
    payload: genre,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadMoreFilms: () => ({
    type: ActionType.LOAD_MORE_FILMS,
    payload: INC_QUANTITY_FILMS,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
};

export {
  ActionType,
  ActionCreator
};
