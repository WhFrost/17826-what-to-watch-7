import React from 'react';
import FilmProp from '../prop-validation/film.prop';
import {Link, useParams} from 'react-router-dom';

function Breadcrumbs(props) {
  const {film} = props;
  const {id} = useParams();
  const {name} = film;
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/film/${id}`} className="breadcrumbs__link">{name}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

Breadcrumbs.propTypes = {
  film: FilmProp.isRequired,
};

export default Breadcrumbs;
