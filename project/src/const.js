const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/film/:id',
  ADD_REVIEW: '/film/:id/review',
  PLAYER: '/player/:id',
  NOT_FOUND: '/404',
};

const COUNT_FILMS = 10;
const COUNT_REVIEWS = 8;
const MAX_STARS = 5;
const RATING = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const FilmTabs = {
  OVERVIEW: 'overview',
  DETAILS: 'details',
  REVIEWS: 'reviews',
};

const DATE_LOCAL = 'en-EN';

const DATE_LOCAL_OPTIONS = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

const DEFAULT_GENRE = 'All genres';
const INITIAL_QUANTITY_FILMS = 8;
const INC_QUANTITY_FILMS = 8;
const MIN_NORMAL_RATING = 3;
const MIN_GOOD_RATING = 5;
const MIN_VERY_GOOD_RATING = 8;
const AWESOME_RATING = 10;

const TextualRating = {
  BAD: 'Bad',
  NORMAL: 'Normal',
  GOOD: 'Good',
  VERY_GOOD: 'Very good',
  AWESOME: 'Awesome',
};

const MIN_LENGTH_REVIEW = 50;
const MAX_LENGTH_REVIEW = 400;

const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

const APIRoute = {
  FILMS: '/films',
  FILM: '/film',
  PROMO: '/promo',
  COMMENTS: '/comments',
  FAVORITE: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

const LOGIN_ERROR_MESSAGE = 'Login/Password incorrected. Please try again.';

const FavoriteStatus = {
  YES: 1,
  NO: 0,
};

export {
  AppRoute,
  COUNT_FILMS,
  COUNT_REVIEWS,
  MAX_STARS,
  RATING,
  FilmTabs,
  DATE_LOCAL,
  DATE_LOCAL_OPTIONS,
  DEFAULT_GENRE,
  INITIAL_QUANTITY_FILMS,
  INC_QUANTITY_FILMS,
  MIN_NORMAL_RATING,
  MIN_GOOD_RATING,
  MIN_VERY_GOOD_RATING,
  AWESOME_RATING,
  TextualRating,
  MIN_LENGTH_REVIEW,
  MAX_LENGTH_REVIEW,
  AuthorizationStatus,
  APIRoute,
  LOGIN_ERROR_MESSAGE,
  FavoriteStatus
};
