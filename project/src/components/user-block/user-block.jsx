import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthorizationStatus, getUserAvatar} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logout} from '../../store/api-action';
import {redirectToRoute} from '../../store/action';

function UserBlock() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const userAvatar = useSelector(getUserAvatar);
  const dispatch = useDispatch();

  return (
    <ul className="user-block">
      {
        authorizationStatus === AuthorizationStatus.AUTH
          ?
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <Link to={AppRoute.MY_LIST}><img src={userAvatar} alt="User avatar" width="63" height="63" /></Link>
              </div>
            </li>
            <li className="user-block__item">
              <a
                className="user-block__link"
                href="/#"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logout());
                }}
              >
              Sign out
              </a>
            </li>
          </>
          :
          <li className="user-block__item">
            <a
              className="user-block__link"
              href="/#"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(redirectToRoute(AppRoute.LOGIN));
              }}
            >
            Sign in
            </a>
          </li>
      }
    </ul>
  );
}

export default UserBlock;
