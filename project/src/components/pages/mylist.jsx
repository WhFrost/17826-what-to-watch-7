import React from 'react';
import HeaderLogo from '../logo/header-logo';
import UserBlock from '../user-block/user-block';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';

function MyList() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <FilmsList />
      <Footer />
    </div>
  );
}

export default MyList;
