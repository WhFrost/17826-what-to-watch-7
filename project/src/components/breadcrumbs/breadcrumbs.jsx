import React from 'react';
import {Link} from 'react-router-dom';

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to="/film/:id" className="breadcrumbs__link">The Grand Budapest Hotel</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
