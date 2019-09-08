import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import Header from '../components/Header';
import { toggleModal, toggleTab, logout } from '../actions';

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  userName: state.user.info.name,
});

const mapDispatchToProps = dispatch => ({
  onLogout: history => dispatch(logout(history)),
  onToggle: activeTab => {
    dispatch(toggleTab(activeTab));
    dispatch(toggleModal());
  },
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(Header);
