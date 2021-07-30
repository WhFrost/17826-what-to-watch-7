import React from 'react';
import PromoFilm from '../promo-film/promo-film';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {useSelector} from 'react-redux';
import {getFilms} from '../../store/data/selectors';

function MainPage() {
  const films = useSelector(getFilms);

  return (
    <>
      <PromoFilm />
      <div className="page-content">
        <Catalog
          films = {films}
        />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
