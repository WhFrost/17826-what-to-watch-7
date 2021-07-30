import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  setUserAvatar,
  logout,
  setLoginError
} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userAvatar: '',
  isLoginIncorrected: false,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserAvatar, (state, action) => {
      state.userAvatar = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(setLoginError, (state) => {
      state.isLoginIncorrected = true;
    });
});

export {user};
