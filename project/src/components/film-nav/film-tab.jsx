import React from 'react';
import PropTypes from 'prop-types';
import {createCapitalizedFirstLetter} from '../../common';

function FilmTab(props) {
  const {tab, activeTab, handleTabClick} = props;
  return (
    <li
      className={`film-nav__item ${activeTab === tab ? 'film-nav__item--active' : ''}`}
    >
      <a className="film-nav__link" data-filmnav={tab}
        style={{cursor: 'pointer'}}
        onClick={(evt) => handleTabClick(evt.target.dataset.filmnav)}
      >{createCapitalizedFirstLetter(tab)}
      </a>
    </li>
  );
}

FilmTab.propTypes = {
  tab: PropTypes.string,
  activeTab: PropTypes.string.isRequired,
  handleTabClick: PropTypes.func.isRequired,
};

export default FilmTab;
