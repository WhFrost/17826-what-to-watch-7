import React from 'react';
import Header from '../header/header';
import FilmCard from './film-card';
import {useSelector} from 'react-redux';
import {getPromoFilm} from '../../store/data/selectors';

function PromoFilm() {
  const promoFilm = useSelector(getPromoFilm);
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

export default PromoFilm;
