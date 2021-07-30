import React from 'react';
import {useSelector} from 'react-redux';
import {getIsLoginIncorrected} from '../../store/user/selectors';
import {LOGIN_ERROR_MESSAGE} from '../../const';

function LoginError () {
  const isLoginIncorrected = useSelector(getIsLoginIncorrected);

  if (isLoginIncorrected) {
    return (
      <div className="sign-in__message">
        <p>
          {LOGIN_ERROR_MESSAGE}
        </p>
      </div>
    );
  }
  return null;
}

export default LoginError;
