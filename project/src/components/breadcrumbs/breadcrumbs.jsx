import React from 'react';

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <a href="film-page.html" className="breadcrumbs__link">The Grand Budapest Hotel</a>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link" href="/#">Add review</a>
        </li>
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
