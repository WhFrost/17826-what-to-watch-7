import {INC_QUANTITY_FILMS} from '../const';

const ActionType = {
  SET_FILTERED_FILMS: 'data/setFilteredFilms',
  SET_GENRES: 'data/setGenres',
  CHANGE_GENRE: 'data/changeGenre',
  LOAD_MORE_FILMS: 'data/loadMoreFilms',
};

const ActionCreator ={
  setGenres: (films) => ({
    type: ActionType.SET_GENRES,
    payload: films,
  }),
  setFilteredFilms: (genre) => ({
    type: ActionType.SET_FILTERED_FILMS,
    payload: genre,
  }),
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  loadMoreFilms: () => ({
    type: ActionType.LOAD_MORE_FILMS,
    payload: INC_QUANTITY_FILMS,
  }),
};

export {
  ActionType,
  ActionCreator
};
