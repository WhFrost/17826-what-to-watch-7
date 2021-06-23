import React from 'react';
import PropTypes from 'prop-types';
import PromoFilm from '../promo-film/promo-film';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import FilmProp from '../prop-validation/film.prop';

function MainPage(props) {
  const {films} = props;
  const promoFilm = films[0];
  return (
    <>
      <PromoFilm promoFilm = {promoFilm}/>
      <div className="page-content">
        <Catalog
          films = {films}
        />
        <Footer />
      </div>
    </>
  );
}

MainPage.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export default MainPage;
