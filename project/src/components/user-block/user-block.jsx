import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import browserHistory from '../../browser-history';
import {logout} from '../../store/api-action';

function UserBlock(props) {
  const {authorizationStatus, onLogout} = props;

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH &&
        <>
          <li className="user-block__item">
            <div className="user-block__avatar">
              <Link to={AppRoute.MY_LIST}><img src="img/avatar.jpg" alt="User avatar" width="63" height="63" /></Link>
            </div>
          </li>
          <li className="user-block__item">
            <a
              className="user-block__link"
              href="/#"
              onClick={(evt) => {
                evt.preventDefault();
                onLogout();
              }}
            >
              Sign out
            </a>
          </li>
        </>
      }
      {
        (authorizationStatus === AuthorizationStatus.NO_AUTH || authorizationStatus === AuthorizationStatus.UNKNOWN) &&
        <li className="user-block__item">
          <a
            className="user-block__link"
            href="/#"
            onClick={(evt) => {
              evt.preventDefault();
              browserHistory.push(AppRoute.LOGIN);
            }}
          >
            Sign in
          </a>
        </li>
      }
    </ul>
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

UserBlock.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export {UserBlock};
export default connect(mapStateToProps, mapDispatchToProps)(UserBlock);
