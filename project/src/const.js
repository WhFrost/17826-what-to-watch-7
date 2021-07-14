const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/film/:id',
  ADD_REVIEW: '/film/:id/review',
  PLAYER: '/player/:id',
};

const COUNT_FILMS = 10;
const COUNT_REVIEWS = 8;
const MAX_STARS = 5;
const RATING = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const FILM_TABS = {
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

export {
  AppRoute,
  COUNT_FILMS,
  COUNT_REVIEWS,
  MAX_STARS,
  RATING,
  FILM_TABS,
  DATE_LOCAL,
  DATE_LOCAL_OPTIONS,
  DEFAULT_GENRE,
  INITIAL_QUANTITY_FILMS,
  INC_QUANTITY_FILMS
};
