import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header';
import FilmCard from './film-card';

function PromoFilm(props) {
  const {film} = props;
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <FilmCard film = {film}/>

    </section>
  );
}

PromoFilm.propTypes = {
  film: PropTypes.object,
};

export default PromoFilm;
