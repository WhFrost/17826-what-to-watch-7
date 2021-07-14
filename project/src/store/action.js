import {INC_QUANTITY_FILMS} from '../const';

const ActionType = {
  GET_FILTERED_FILMS: 'data/getFilteredFilms',
  GET_GENRES: 'data/getGenres',
  CHANGE_GENRE: 'data/changeGenre',
  LOAD_MORE_FILMS: 'data/loadMoreFilms',
};

const ActionCreator ={
  getGenres: (films) => ({
    type: ActionType.GET_GENRES,
    payload: films,
  }),
  getFilteredFilms: (genre) => ({
    type: ActionType.GET_FILTERED_FILMS,
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
