import {ActionType} from './action';
import {
  DEFAULT_GENRE,
  INITIAL_QUANTITY_FILMS
} from '../const';

const initialState = {
  genres: [],
  currentGenre: DEFAULT_GENRE,
  initialQuantityFilms: INITIAL_QUANTITY_FILMS,
  quantityFilmsToShow: INITIAL_QUANTITY_FILMS,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_GENRES:
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
    default:
      return state;
  }
};

export {
  reducer
};
