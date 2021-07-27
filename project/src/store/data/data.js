import {createReducer} from '@reduxjs/toolkit';
import {
  loadFilms,
  loadPromoFilm,
  loadFavoriteFilms,
  setGenres,
  changeGenre,
  loadMoreFilms,
  resetCountShownFilms
} from '../action';
import {
  DEFAULT_GENRE,
  INITIAL_QUANTITY_FILMS
} from '../../const';

const initialState = {
  films: [],
  isFilmsListLoaded: false,
  promoFilm: {},
  isPromoFilmLoaded: false,
  favoriteFilms: [],
  isFavoriteFilmsLoaded: false,
  genres: [],
  currentGenre: DEFAULT_GENRE,
  initialQuantityFilms: INITIAL_QUANTITY_FILMS,
  quantityFilmsToShow: INITIAL_QUANTITY_FILMS,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.isFilmsListLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
      state.isPromoFilmLoaded = true;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload;
      state.isFavoriteFilmsLoaded = true;
    })
    .addCase(setGenres, (state, action) => {
      state.genres = [DEFAULT_GENRE, ...new Set(action.payload.reduce((acc, current) => {
        acc.push(current.genre);
        return acc;
      }, []))];
    })
    .addCase(changeGenre, (state, action) => {
      state.currentGenre = action.payload;
    })
    .addCase(loadMoreFilms, (state, action) => {
      state.quantityFilmsToShow = state.quantityFilmsToShow + action.payload;
    })
    .addCase(resetCountShownFilms, (state) => {
      state.quantityFilmsToShow = initialState.quantityFilmsToShow;
    });
});

export {data};
