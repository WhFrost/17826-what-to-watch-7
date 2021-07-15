import {ActionType} from './action';
import {films} from '../mock/films';
import {reviews} from '../mock/reviews';
import {
  DEFAULT_GENRE,
  INITIAL_QUANTITY_FILMS
} from '../const';

const initialState = {
  films,
  reviews,
  promoFilm: films[0],
  genres: [],
  filteredFilms: [],
  currentGenre: DEFAULT_GENRE,
  initialQuantityFilms: INITIAL_QUANTITY_FILMS,
  quantityFilmsToShow: INITIAL_QUANTITY_FILMS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRES:
      return {
        ...state,
        genres: [DEFAULT_GENRE, ...new Set(action.payload.reduce((acc, current) => {
          acc.push(current.genre);
          return acc;
        }, []))],
      };
    case ActionType.SET_FILTERED_FILMS:
      return {
        ...state,
        filteredFilms: action.payload === DEFAULT_GENRE
          ? state.films
          : state.films.filter((film) => film.genre === action.payload),
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
    default:
      return state;
  }
};

export {
  reducer
};
