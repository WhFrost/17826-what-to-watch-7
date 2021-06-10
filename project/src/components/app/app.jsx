import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main';
import Login from '../pages/login';
import MyList from '../pages/mylist';
import Film from '../pages/film';
import AddReview from '../pages/add-review';
import NotFound from '../pages/not-found-404';

function App(props) {
  const {film} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage film = {film}/>
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList />
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film />
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  film: PropTypes.object,
};

export default App;
