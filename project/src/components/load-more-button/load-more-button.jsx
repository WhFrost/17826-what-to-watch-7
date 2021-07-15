import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function LoadMoreButton(props) {
  const {loadMore} = props;

  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button"
        onClick={() => loadMore()}
      >
        Show more
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  loadMore() {
    dispatch(ActionCreator.loadMoreFilms());
  },
});

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func.isRequired,
};

export {LoadMoreButton};
export default connect(null, mapDispatchToProps)(LoadMoreButton);
