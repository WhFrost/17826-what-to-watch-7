import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FilmProp from '../prop-validation/film.prop';
import ReviewProp from '../prop-validation/review.prop';
import FilmNav from '../film-nav/film-nav';
import FilmOverview from './film-overview';
import FilmDetails from './film-details';
import FilmReviews from './film-reviews';
import {FILM_TABS} from '../../const';

function FilmDesk(props) {
  const [activeTab, setActiveTab] = useState(FILM_TABS.OVERVIEW);
  const {film, reviews} = props;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getFilmInfo = (tab, movie) => {
    switch (tab) {
      case FILM_TABS.OVERVIEW:
        return <FilmOverview film={movie} />;
      case FILM_TABS.DETAILS:
        return <FilmDetails film={movie} />;
      case FILM_TABS.REVIEWS:
        return <FilmReviews reviews={reviews} />;
      default:
        return <FilmOverview film={movie} />;
    }
  };

  return (
    <div className="film-card__desc">

      <FilmNav activeTab={activeTab} handleTabClick={handleTabClick}/>
      {getFilmInfo(activeTab, film)}
    </div>
  );
}

FilmDesk.propTypes = {
  film: FilmProp.isRequired,
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
};

export default FilmDesk;
