import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import HeaderLogo from '../logo/header-logo';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import UserBlock from '../user-block/user-block';
import AddReviewForm from '../add-review-form/add-review-form';
import {useSelector, useDispatch} from 'react-redux';
import {getCurrentFilm} from '../../store/currentFilm/selectors';
import {fetchCurrentFilm} from '../../store/api-action';
import {resetCurrentFilm} from '../../store/action';

function AddReview() {
  const currentFilm = useSelector(getCurrentFilm);

  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(() => {
    if (currentFilm.id !== Number(id)) {
      dispatch(resetCurrentFilm());
      dispatch(fetchCurrentFilm(id));
    }
    return currentFilm;
    /*eslint-disable-next-line */
  }, [id]);

  const {name, backgroundImage, backgroundColor, posterImage} = currentFilm;

  return (
    <section className="film-card film-card--full" style={{backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={backgroundImage} alt={name}/>
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <HeaderLogo />
          <Breadcrumbs />
          <UserBlock />
        </header>
        <div className="film-card__poster film-card__poster--small">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>
      </div>
      <AddReviewForm />
    </section>
  );
}

export default AddReview;
