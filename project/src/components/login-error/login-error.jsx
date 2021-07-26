import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {LOGIN_ERROR_MESSAGE} from '../../const';

function LoginError (props) {
  const {isLoginIncorrected} = props;

  if (isLoginIncorrected) {
    return (
      <div className="sign-in__message">
        <p>
          {LOGIN_ERROR_MESSAGE}
        </p>
      </div>
    );
  }
  return null;
}

const mapStateToProps = (state) => ({
  isLoginIncorrected: state.isLoginIncorrected,
});

LoginError.propTypes = {
  isLoginIncorrected: PropTypes.bool.isRequired,
};

export {LoginError};
export default connect(mapStateToProps, null)(LoginError);
