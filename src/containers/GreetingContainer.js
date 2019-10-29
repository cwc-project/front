import { connect } from 'react-redux';

import { toggleModal, toggleTab } from '../actions';
import Greeting from '../components/Greeting';

const mapStateToProps = ({ user }) => ({ loggedIn: user.loggedIn });

const mapDispatchToProps = dispatch => ({
  onToggle: activeTab => {
    dispatch(toggleTab(activeTab));
    dispatch(toggleModal());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Greeting);
