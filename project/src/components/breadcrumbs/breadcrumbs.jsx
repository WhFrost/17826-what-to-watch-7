import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCurrentFilm} from '../../store/currentFilm/selectors';

function Breadcrumbs() {
  const currentFilm = useSelector(getCurrentFilm);
  const {id} = useParams();
  const {name} = currentFilm;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/film/${id}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a
            href="/#"
            className="breadcrumbs__link"
            style={{
              pointerEvents: 'none',
            }}
          >
            Add review
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
