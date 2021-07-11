const AppRoute = {
  ROOT: '/',
  LOGIN: '/login',
  MY_LIST: '/mylist',
  FILM: '/film/:id',
  ADD_REVIEW: '/film/:id/review',
  PLAYER: '/player/:id',
};

const COUNT_FILMS = 5;
const COUNT_REVIEWS = 8;
const MAX_STARS = 5;
const RATING = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const FILM_TABS = {
  OVERVIEW: 'overview',
  DETAILS: 'details',
  REVIEWS: 'reviews',
};

const DATE_LOCAL = 'ru-RU';

const DATE_LOCAL_OPTIONS = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export {
  AppRoute,
  COUNT_FILMS,
  COUNT_REVIEWS,
  MAX_STARS,
  RATING,
  FILM_TABS,
  DATE_LOCAL,
  DATE_LOCAL_OPTIONS
};
