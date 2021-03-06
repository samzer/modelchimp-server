/**
 *
 * InviteRedirect
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Redirect } from 'react-router-dom';
import ModelchimpClient from 'utils/modelchimpClient';
import { logout } from 'containers/Logout/actions';
import Img from 'components/Img';
import LogoPath from 'images/logo_white.png';
import { makeSelectExistingUser, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { inviteCheckAction } from './actions';

import StyledDiv from './StyledDiv';

/* eslint-disable react/prefer-stateless-function */
export class InviteRedirect extends React.Component {
  componentDidMount() {
    const inviteToken = this.props.match.params.token;

    this.props.setLogout();
    this.props.dispatch(inviteCheckAction(inviteToken));
  }

  render() {
    if (this.props.error)
      return (
        <StyledDiv>
          <Img src={LogoPath} />
          <h1>The invite link is not valid</h1>
        </StyledDiv>
      );

    switch (this.props.existingUser) {
      case true: {
        return <Redirect to="/login" />;
      }
      case false: {
        return <Redirect to={`/register/${this.props.match.params.token}`} />;
      }
      default: {
        return (
          <StyledDiv>
            <Img src={LogoPath} />
            <h1>Checking the invite link</h1>
          </StyledDiv>
        );
      }
    }
  }
}

InviteRedirect.propTypes = {
  dispatch: PropTypes.func.isRequired,
  setLogout: PropTypes.func,
  match: PropTypes.object,
  error: PropTypes.bool,
  existingUser: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  existingUser: makeSelectExistingUser(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    setLogout: () => {
      ModelchimpClient.logout();
      return dispatch(logout());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'inviteRedirect', reducer });
const withSaga = injectSaga({ key: 'inviteRedirect', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(InviteRedirect);
