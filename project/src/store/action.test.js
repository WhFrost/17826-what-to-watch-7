import {
  ActionType,
  loadFilms,
  loadPromoFilm,
  loadCurrentFilm,
  resetCurrentFilm,
  loadReviews,
  addReview,
  loadSimilarFilms,
  loadFavoriteFilms,
  addPromoFilmToFavorite,
  addCurrentFilmToFavorite,
  setGenres,
  changeGenre,
  loadMoreFilms,
  resetCountShownFilms,
  requireAuthorization,
  setUserAvatar,
  logout,
  setLoginError,
  redirectToRoute
} from './action';
import {INC_QUANTITY_FILMS} from '../const';

describe('Actions', () => {
  it('action creator for dowloading films', () => {
    const expectedActions = {
      type: ActionType.LOAD_FILMS,
      payload: ['film'],
    };

    expect(loadFilms(['film'])).toEqual(expectedActions);
  });

  it('action creator for dowloading promo-film', () => {
    const expectedActions = {
      type: ActionType.LOAD_PROMO_FILM,
      payload: {promo: 'film'},
    };

    expect(loadPromoFilm({promo: 'film'})).toEqual(expectedActions);
  });

  it('action creator for dowloading current film', () => {
    const expectedActions = {
      type: ActionType.LOAD_CURRENT_FILM,
      payload: {currentFilm: 'film'},
    };

    expect(loadCurrentFilm({currentFilm: 'film'})).toEqual(expectedActions);
  });

  it('action creator for reset current film', () => {
    const expectedActions = {
      type: ActionType.RESET_CURRENT_FILM,
    };

    expect(resetCurrentFilm()).toEqual(expectedActions);
  });

  it('action creator for downloading reviews', () => {
    const expectedActions = {
      type: ActionType.LOAD_REVIEWS,
      payload: ['review'],
    };

    expect(loadReviews(['review'])).toEqual(expectedActions);
  });

  it('action creator for uploading review', () => {
    const expectedActions = {
      type: ActionType.ADD_REVIEW,
      payload: {review: 'review'},
    };

    expect(addReview({review: 'review'})).toEqual(expectedActions);
  });

  it('action creator for downloading similar films', () => {
    const expectedActions = {
      type: ActionType.LOAD_SIMILAR_FILMS,
      payload: ['film'],
    };

    expect(loadSimilarFilms(['film'])).toEqual(expectedActions);
  });

  it('action creator for downloading favorite films', () => {
    const expectedActions = {
      type: ActionType.LOAD_FAVORITE_FILMS,
      payload: ['film'],
    };

    expect(loadFavoriteFilms(['film'])).toEqual(expectedActions);
  });

  it('action creator for add promo-film to favorite', () => {
    const expectedActions = {
      type: ActionType.ADD_PROMO_FILM_TO_FAVORITE,
      payload: {favorite: 'promoFilm'},
    };

    expect(addPromoFilmToFavorite({favorite: 'promoFilm'})).toEqual(expectedActions);
  });

  it('action creator for add current film to favorite', () => {
    const expectedActions = {
      type: ActionType.ADD_CURRENT_FILM_TO_FAVORITE,
      payload: {favorite: 'currentFilm'},
    };

    expect(addCurrentFilmToFavorite({favorite: 'currentFilm'})).toEqual(expectedActions);
  });

  it('action creator for set genres', () => {
    const expectedActions = {
      type: ActionType.SET_GENRES,
      payload: ['genre'],
    };

    expect(setGenres(['genre'])).toEqual(expectedActions);
  });

  it('action creator for change genre', () => {
    const expectedActions = {
      type: ActionType.CHANGE_GENRE,
      payload: 'genre',
    };

    expect(changeGenre('genre')).toEqual(expectedActions);
  });

  it('action creator for incrementFilmsToShow', () => {
    const expectedActions = {
      type: ActionType.LOAD_MORE_FILMS,
      payload: INC_QUANTITY_FILMS,
    };

    expect(loadMoreFilms(INC_QUANTITY_FILMS)).toEqual(expectedActions);
  });

  it('action creator for reset count films to show', () => {
    const expectedActions = {
      type: ActionType.RESET_COUNT_SHOWN_FILMS,
    };

    expect(resetCountShownFilms()).toEqual(expectedActions);
  });

  it('action creator for user authorization', () => {
    const expectedActions = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requireAuthorization('AUTH')).toEqual(expectedActions);
  });

  it('action creator for set user avatar', () => {
    const expectedActions = {
      type: ActionType.SET_USER_AVATAR,
      payload: 'avatar',
    };

    expect(setUserAvatar('avatar')).toEqual(expectedActions);
  });

  it('action creator for user logout', () => {
    const expectedActions = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedActions);
  });

  it('action creator for create login error', () => {
    const expectedActions = {
      type: ActionType.SET_LOGIN_ERROR,
    };

    expect(setLoginError()).toEqual(expectedActions);
  });

  it('action creator for redirect user', () => {
    const expectedActions = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: 'url',
    };

    expect(redirectToRoute('url')).toEqual(expectedActions);
  });
});
