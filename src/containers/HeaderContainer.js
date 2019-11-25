import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

import { toggleModalReg, toggleTab, logout } from '../actions';
import Header from '../components/Header';

const mapStateToProps = ({ user }) => ({
  loggedIn: user.loggedIn,
  userName: user.info.name,
});
// history из ownProps
const mapDispatchToProps = (dispatch, { history }) => ({
  logout: () => dispatch(logout(history)),
  onToggle: activeTab => {
    dispatch(toggleTab(activeTab));
    dispatch(toggleModalReg());
  },
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Header);
