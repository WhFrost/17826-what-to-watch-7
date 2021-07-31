import React from 'react';
import PropTypes from 'prop-types';
import FilmTab from './film-tab';
import {FilmTabs} from '../../const';

function FilmNav(props) {
  const {activeTab, handleTabClick} = props;
  const tabs = Object.values(FilmTabs);

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        {
          tabs.map((tab) => <FilmTab key={tab + 1} tab={tab} activeTab={activeTab} handleTabClick={handleTabClick}/>)
        }
      </ul>
    </nav>
  );
}

FilmNav.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default FilmNav;
