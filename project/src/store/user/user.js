import {createReducer} from '@reduxjs/toolkit';
import {
  requireAuthorization,
  logout,
  setLoginError
} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isLoginIncorrected: false,
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(logout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    })
    .addCase(setLoginError, (state) => {
      state.isLoginIncorrected = true;
    });
});

export {user};
