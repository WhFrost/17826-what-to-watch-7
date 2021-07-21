import React from 'react';
import FilmProp from '../prop-validation/film.prop';
import {Link, useParams} from 'react-router-dom';
import {connect} from 'react-redux';

function Breadcrumbs(props) {
  const {currentFilm} = props;
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
const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm,
});

Breadcrumbs.propTypes = {
  currentFilm: FilmProp.isRequired,
};

export {Breadcrumbs};
export default connect(mapStateToProps, null)(Breadcrumbs);
