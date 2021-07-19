import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../../store/api-action';
import {AppRoute} from '../../const';
import HeaderLogo from '../logo/header-logo';

function Login(props) {
  const {onSubmit} = props;
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form
          action="#"
          className="sign-in__form"
          onSubmit={handleSubmit}
        >
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={loginRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button
              onClick={() => history.push(AppRoute.ROOT)}
              className="sign-in__btn"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export {Login};
export default connect(null, mapDispatchToProps)(Login);
