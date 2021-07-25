import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import {adaptFilmToClient} from '../common';

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((films) => dispatch(ActionCreator.loadFilms(films)))
);
const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => adaptFilmToClient(data))
    .then((promoFilm) => dispatch(ActionCreator.loadPromoFilm(promoFilm)))
);
const fetchCurrentFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((currentFilm) => dispatch(ActionCreator.loadCurrentFilm(currentFilm)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);
const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);
const fetchSimilar = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}/similar`)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((similarFilms) => dispatch(ActionCreator.loadSimilarFilms(similarFilms)))
);
const addReview = (id, review) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, review)
    .then(() => dispatch(ActionCreator.redirectToRoute(`${APIRoute.FILM}/${id}`)))
);
const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => localStorage.setItem('token', data.token))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(ActionCreator.setLoginError());
    })
);
const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);

export {
  fetchFilmsList,
  fetchPromoFilm,
  fetchCurrentFilm,
  fetchReviews,
  addReview,
  fetchSimilar,
  checkAuth,
  login,
  logout
};
