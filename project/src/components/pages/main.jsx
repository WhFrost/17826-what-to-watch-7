import React from 'react';
import PropTypes from 'prop-types';
import PromoFilm from '../promo-film/promo-film';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';

function MainPage(props) {
  const {film} = props;
  return (
    <>
      <PromoFilm film = {film}/>
      <div className="page-content">
        <Catalog/>
        <Footer />
      </div>
    </>
  );
}

MainPage.propTypes = {
  film: PropTypes.object,
};

export default MainPage;
