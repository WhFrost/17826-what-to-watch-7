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

export {
  AppRoute,
  COUNT_FILMS,
  COUNT_REVIEWS,
  MAX_STARS,
  RATING
};
