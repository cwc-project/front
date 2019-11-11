import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Header from '../components/Header';
import { toggleModalReg, toggleTab, logout } from '../actions';

const mapStateToProps = ({ user }) => ({ user });

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return {
    loggedIn: stateProps.user.loggedIn,
    userName: stateProps.user.info.name,
    logout: () => dispatch(logout(history)),
    onToggle: activeTab => {
      dispatch(toggleTab(activeTab));
      dispatch(toggleModalReg());
    },
  };
};

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    null,
    mergeProps,
  ),
)(Header);
