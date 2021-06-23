import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main';
import Login from '../pages/login';
import MyList from '../pages/mylist';
import Film from '../pages/film';
import Player from '../pages/player';
import AddReview from '../pages/add-review';
import NotFound from '../pages/not-found-404';
import FilmProp from '../prop-validation/film.prop';

function App(props) {
  const {films} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage
            films = {films}
          />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoute.MY_LIST}>
          <MyList films = {films}/>
        </Route>
        <Route exact path={AppRoute.FILM}>
          <Film films = {films}/>
        </Route>
        <Route exact path={AppRoute.PLAYER}>
          <Player films = {films}/>
        </Route>
        <Route exact path={AppRoute.ADD_REVIEW}>
          <AddReview films = {films}/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default App;
