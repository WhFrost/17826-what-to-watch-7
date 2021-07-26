import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../pages/main';
import Login from '../pages/login';
import MyList from '../pages/mylist';
import Film from '../pages/film';
import Player from '../pages/player';
import AddReview from '../pages/add-review';
import NotFound from '../pages/not-found-404';
import LoadingSpinner from '../loading/loading';

function App(props) {
  const {authorizationStatus, isFilmsListLoaded, isPromoFilmLoaded} = props;

  if(authorizationStatus === AuthorizationStatus.UNKNOWN || !isFilmsListLoaded || !isPromoFilmLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <PrivateRoute exact path={AppRoute.MY_LIST}
          render={() => <MyList />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player />
        </Route>
        <PrivateRoute exact path={AppRoute.ADD_REVIEW}
          render={() => <AddReview />}
        >
        </PrivateRoute>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isFilmsListLoaded: state.isFilmsListLoaded,
  isPromoFilmLoaded: state.isPromoFilmLoaded,
});

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  isFilmsListLoaded: PropTypes.bool.isRequired,
  isPromoFilmLoaded: PropTypes.bool.isRequired,
};

export {App};
export default connect(mapStateToProps, null)(App);
