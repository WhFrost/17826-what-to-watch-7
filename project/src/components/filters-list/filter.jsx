import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {createCapitalizedFirstLetter} from '../../common';

function Filter(props) {
  const {filter, currentGenre, onChangeGenre} = props;

  return (
    <li className={`catalog__genres-item ${currentGenre === filter && 'catalog__genres-item--active'}`}>
      <a href="/#" className="catalog__genres-link" data-genre={filter}
        onClick={(evt) => {
          evt.preventDefault();
          onChangeGenre(evt.target.dataset.genre);
        }}
      >{createCapitalizedFirstLetter(filter)}
      </a>
    </li>
  );
}

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
    dispatch(ActionCreator.resetCountShownFilms());
  },
});

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

export {Filter};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
