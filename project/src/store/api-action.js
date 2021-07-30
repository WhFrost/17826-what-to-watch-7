import {
  loadFilms,
  loadPromoFilm,
  loadFavoriteFilms,
  loadCurrentFilm,
  addPromoFilmToFavorite,
  addCurrentFilmToFavorite,
  loadReviews,
  loadSimilarFilms,
  requireAuthorization,
  setUserAvatar,
  setLoginError,
  logout as closeSession,
  redirectToRoute
} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';
import {adaptFilmToClient} from '../common';

const fetchFilmsList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((films) => dispatch(loadFilms(films)))
);
const fetchPromoFilm = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => adaptFilmToClient(data))
    .then((promoFilm) => dispatch(loadPromoFilm(promoFilm)))
);
const fetchFavoriteFilms = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => data.map((favoriteFilm) => adaptFilmToClient(favoriteFilm)))
    .then((favoriteFilms) => dispatch(loadFavoriteFilms(favoriteFilms)))
);
const postFavoriteFilm = (id, status, isPromo) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((favoriteFilm) => isPromo ? dispatch(addPromoFilmToFavorite(favoriteFilm.isFavorite)) : dispatch(addCurrentFilmToFavorite(favoriteFilm.isFavorite)))
    .catch(() => {})
);
const fetchCurrentFilm = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => adaptFilmToClient(data))
    .then((currentFilm) => dispatch(loadCurrentFilm(currentFilm)))
    .catch(() => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);
const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);
const fetchSimilar = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}/similar`)
    .then(({data}) => data.map((film) => adaptFilmToClient(film)))
    .then((similarFilms) => dispatch(loadSimilarFilms(similarFilms)))
);
const addReview = (id, review) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, review)
    .then(() => dispatch(redirectToRoute(`${APIRoute.FILM}/${id}`)))
);
const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserAvatar(data.avatar_url));
    })
    .catch(() => {})
);
const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setUserAvatar(data.avatar_url));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {
      dispatch(setLoginError());
    })
);
const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
);

export {
  fetchFilmsList,
  fetchPromoFilm,
  fetchFavoriteFilms,
  fetchCurrentFilm,
  postFavoriteFilm,
  fetchReviews,
  addReview,
  fetchSimilar,
  checkAuth,
  login,
  logout
};
