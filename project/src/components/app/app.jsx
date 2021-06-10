import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import MainPage from '../pages/main';

function App(props) {
  const {film} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage film = {film}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  film: PropTypes.object,
};

export default App;
