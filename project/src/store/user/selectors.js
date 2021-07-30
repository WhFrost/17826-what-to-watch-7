import {NameSpace} from '../root-reducer';

const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;
const getUserAvatar = (state) => state[NameSpace.USER].userAvatar;
const getIsLoginIncorrected = (state) => state[NameSpace.USER].isLoginIncorrected;

export {
  getAuthorizationStatus,
  getUserAvatar,
  getIsLoginIncorrected
};
