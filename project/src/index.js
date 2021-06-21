import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from './mock/films';
import {reviews} from './mock/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      films = {films}
      reviews = {reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
