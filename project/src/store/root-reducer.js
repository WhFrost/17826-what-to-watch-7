import {combineReducers} from 'redux';
import {data} from './data/data';
import {currentFilm} from './currentFilm/currentFilm';
import {user} from './user/user';

export const NameSpace = {
  DATA: 'DATA',
  CURRENT_FILM: 'CURRENT_FILM',
  USER: 'USER',
  NAVIGATION: 'NAVIGATION',
};

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.CURRENT_FILM]: currentFilm,
  [NameSpace.USER]: user,
});
