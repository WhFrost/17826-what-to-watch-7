import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const promoFilmMock = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2021,
};

ReactDOM.render(
  <React.StrictMode>
    <App film = {promoFilmMock}/>
  </React.StrictMode>,
  document.getElementById('root'));
