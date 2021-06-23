import React from 'react';
import Header from '../header/header';
import FilmCard from './film-card';
import FilmProp from '../prop-validation/film.prop';

function PromoFilm(props) {
  const {promoFilm} = props;
  const {backgroundImage, name} = promoFilm;

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header />

      <FilmCard promoFilm = {promoFilm}/>

    </section>
  );
}

PromoFilm.propTypes = {
  promoFilm: FilmProp.isRequired,
};

export default PromoFilm;
