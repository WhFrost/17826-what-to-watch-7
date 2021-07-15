import React from 'react';
import PropTypes from 'prop-types';
import FilmProp from '../prop-validation/film.prop';
import PromoFilm from '../promo-film/promo-film';
import Catalog from '../catalog/catalog';
import Footer from '../footer/footer';
import {connect} from 'react-redux';

function MainPage(props) {
  const {films} = props;

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

const mapStateToProps = (state) => ({
  films: state.films,
});

MainPage.propTypes = {
  films: PropTypes.arrayOf(FilmProp).isRequired,
};

export {MainPage};
export default connect(mapStateToProps, null)(MainPage);
