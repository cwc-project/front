import { connect } from 'react-redux';
import Header from '../components/Header';
import { toggleModal, toggleTab } from '../actions';

const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  userName: state.user.info.userName,
});

const mapDispatchToProps = dispatch => ({
  onToggle: activeTab => {
    dispatch(toggleTab(activeTab));
    dispatch(toggleModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
