import React, {useEffect} from 'react';
import HeaderLogo from '../logo/header-logo';
import UserBlock from '../user-block/user-block';
import FilmsList from '../films-list/films-list';
import Footer from '../footer/footer';
import LoadingSpinner from '../loading/loading';
import {useSelector, useDispatch} from 'react-redux';
import {getFavoriteFilms, getIsFavoriteFilmsLoaded} from '../../store/data/selectors';
import {fetchFavoriteFilms} from '../../store/api-action';

function MyList() {
  const favoriteFilms = useSelector(getFavoriteFilms);
  const isFilmsListLoaded = useSelector(getIsFavoriteFilmsLoaded);
  const dispatch = useDispatch();

  /*eslint-disable-next-line */
  useEffect(() => dispatch(fetchFavoriteFilms()), []);

  useEffect(() => {
    if (!isFilmsListLoaded) {
      <LoadingSpinner />;
    }
  });

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <HeaderLogo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>
      <FilmsList films = {favoriteFilms}/>
      <Footer />
    </div>
  );
}

export default MyList;
