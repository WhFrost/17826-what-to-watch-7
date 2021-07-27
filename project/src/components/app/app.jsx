import React from 'react';
import {useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getIsFilmsLoaded, getIsPromoFilmLoaded} from '../../store/data/selectors';
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

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isFilmsListLoaded = useSelector(getIsFilmsLoaded);
  const isPromoFilmLoaded = useSelector(getIsPromoFilmLoaded);

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

export default App;
