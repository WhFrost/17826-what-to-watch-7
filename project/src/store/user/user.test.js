import {user} from './user';
import {ActionType} from '../action';
import {AuthorizationStatus} from '../../const';

const initialState = {
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  userAvatar: '',
  isLoginIncorrected: false,
};

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {})).toEqual(initialState);
  });

  it('should set authorizationStatus with payload', () => {
    const requireAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: 'current authorization status',
    };

    expect(user(initialState, requireAuthorizationAction))
      .toEqual(Object.assign(
        initialState,
        {
          authorizationStatus: 'current authorization status',
        },
      ),
      );
  });

  it('should set user avatar with payload', () => {
    const setUserAvatar = {
      type: ActionType.SET_USER_AVATAR,
      payload: 'current user avatar',
    };

    expect(user(initialState, setUserAvatar))
      .toEqual(Object.assign(
        initialState,
        {
          userAvatar: 'current user avatar',
        },
      ));
  });

  it('should set authorization status to logout', () => {
    const logoutAction = {
      type: ActionType.LOGOUT,
    };

    expect(user(initialState, logoutAction))
      .toEqual(Object.assign(
        initialState,
        {
          authorizationStatus: AuthorizationStatus.NO_AUTH,
        },
      ),
      );
  });
});
