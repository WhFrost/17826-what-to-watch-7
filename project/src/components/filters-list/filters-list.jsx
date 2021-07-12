import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
// import FilmProp from '../prop-validation/film.prop';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
// import Filter from './filter';

function FiltersList(props) {
  const {genres, getGenres} = props;
  useEffect(() => getGenres(), []);
  // console.log(genres);


  return (
    <ul className="catalog__genres-list">
      {/* {genres.map((filter) => <Filter key={filter} filter={filter} />)} */}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  genres: state.genres,
});
const mapDispatchToProps = (dispatch) => ({
  getGenres() {
    dispatch(ActionCreator.getGenres());
  },
});

FiltersList.propTypes = {
  // films: PropTypes.arrayOf(FilmProp).isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  getGenres: PropTypes.func.isRequired,
};

export {FiltersList};
export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);
