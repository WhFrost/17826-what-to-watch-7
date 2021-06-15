import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
// import {films} from './mock/films';
// import {reviews} from './mock/reviews';

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
