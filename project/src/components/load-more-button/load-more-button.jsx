import React from 'react';
import {useDispatch} from 'react-redux';
import {loadMoreFilms} from '../../store/action';

function LoadMoreButton(props) {
  const dispatch = useDispatch();

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => dispatch(loadMoreFilms())}
      >
        Show more
      </button>
    </div>
  );
}

export default LoadMoreButton;
