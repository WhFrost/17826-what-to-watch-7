import {createReducer} from '@reduxjs/toolkit';
import {
  loadCurrentFilm,
  resetCurrentFilm,
  loadReviews,
  addReview,
  loadSimilarFilms
} from '../action';

const initialState = {
  currentFilm: {
    id: 0,
    name: '',
    posterImage: '',
    previewImage: '',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: '',
    description: '',
    rating: 0,
    scoresCount: 0,
    director: '',
    starring: [],
    runtime: 0,
    genre: '',
    released: 0,
    isFavorite: false,
  },
  isCurrentFilmLoaded: false,
  reviews: [],
  isReviewsLoaded: false,
  similarFilms: [],
  isSimilarFilmsLoaded: false,
};

const currentFilm = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCurrentFilm, (state, action) => {
      state.currentFilm = action.payload;
      state.isCurrentFilmLoaded = true;
    })
    .addCase(resetCurrentFilm, (state) => {
      state.currentFilm = initialState.currentFilm;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
      state.isReviewsLoaded = true;
    })
    .addCase(addReview, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
      state.isSimilarFilmsLoaded = true;
    });
});

export {currentFilm};
