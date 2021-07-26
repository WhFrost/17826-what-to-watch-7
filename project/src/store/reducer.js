import {ActionType} from './action';
import {
  DEFAULT_GENRE,
  INITIAL_QUANTITY_FILMS,
  AuthorizationStatus
} from '../const';

const initialState = {
  films: [],
  promoFilm: {},
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
  genres: [],
  currentGenre: DEFAULT_GENRE,
  initialQuantityFilms: INITIAL_QUANTITY_FILMS,
  quantityFilmsToShow: INITIAL_QUANTITY_FILMS,
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isFilmsListLoaded: false,
  isPromoFilmLoaded: false,
  isLoginIncorrected: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return {
        ...state,
        films: action.payload,
        isFilmsListLoaded: true,
      };
    case ActionType.LOAD_PROMO_FILM:
      return {
        ...state,
        promoFilm: action.payload,
        isPromoFilmLoaded: true,
      };
    case ActionType.LOAD_CURRENT_FILM:
      return {
        ...state,
        currentFilm: action.payload,
        isCurrentFilmLoaded: true,
      };
    case ActionType.RESET_CURRENT_FILM:
      return {
        ...state,
        currentFilm: initialState.currentFilm,
        isCurrentFilmLoaded: false,
      };
    case ActionType.LOAD_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
        isReviewsLoaded: true,
      };
    case ActionType.ADD_REVIEW:
      return {
        ...state,
        reviews: action.payload,
      };
    case ActionType.LOAD_SIMILAR_FILMS:
      return {
        ...state,
        similarFilms: action.payload,
        isSimilarFilmsLoaded: true,
      };
    case ActionType.SET_GENRES:
      return {
        ...state,
        genres: [DEFAULT_GENRE, ...new Set(action.payload.reduce((acc, current) => {
          acc.push(current.genre);
          return acc;
        }, []))],
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        currentGenre: action.payload,
      };
    case ActionType.LOAD_MORE_FILMS:
      return {
        ...state,
        quantityFilmsToShow: state.quantityFilmsToShow + action.payload,
      };
    case ActionType.RESET_COUNT_SHOWN_FILMS:
      return {
        ...state,
        quantityFilmsToShow: INITIAL_QUANTITY_FILMS,
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    case ActionType.SET_LOGIN_ERROR:
      return {
        ...state,
        isLoginIncorrected: true,
      };
    default:
      return state;
  }
};

export {
  reducer
};
