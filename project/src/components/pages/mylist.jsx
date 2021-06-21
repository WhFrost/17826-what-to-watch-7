import React from 'react';
import PropTypes from 'prop-types';
import HeaderLogo from '../logo/header-logo';
import UserBlock from '../user-block/user-block';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import FilmProp from '../prop-validation/film';

function MyList(props) {
  const {films} = props;
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <FilmsList films = {films}/>
      <Footer />
    </div>
  );
}

MyList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape(FilmProp)).isRequired,
};

export default MyList;
