import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../pages/main';

function App(props) {
  const {film} = props;
  return <MainPage film = {film}/>;
}

App.propTypes = {
  film: PropTypes.object,
};

export default App;
