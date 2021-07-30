import {NameSpace} from '../root-reducer';

const getFilms = (state) => state[NameSpace.DATA].films;
const getIsFilmsLoaded = (state) => state[NameSpace.DATA].isFilmsListLoaded;
const getPromoFilm = (state) => state[NameSpace.DATA].promoFilm;
const getIsPromoFilmLoaded = (state) => state[NameSpace.DATA].isPromoFilmLoaded;
const getFavoriteFilms = (state) => state[NameSpace.DATA].favoriteFilms;
const getIsFavoriteFilmsLoaded = (state) => state[NameSpace.DATA].isFavoriteFilmsListLoad;
const getGenres = (state) => state[NameSpace.DATA].genres;
const getCurrentGenre = (state) => state[NameSpace.DATA].currentGenre;
const getQuantityFilmsToShow = (state) => state[NameSpace.DATA].quantityFilmsToShow;

export {
  getFilms,
  getIsFilmsLoaded,
  getPromoFilm,
  getIsPromoFilmLoaded,
  getFavoriteFilms,
  getIsFavoriteFilmsLoaded,
  getGenres,
  getCurrentGenre,
  getQuantityFilmsToShow
};
