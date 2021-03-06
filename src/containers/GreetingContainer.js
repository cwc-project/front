import { connect } from 'react-redux';

import { toggleModalReg, toggleTab } from '../actions/rsEffectsActions';
import Greeting from '../components/Greeting';

const mapStateToProps = ({ user }) => ({ loggedIn: user.loggedIn });

const mapDispatchToProps = dispatch => ({
  onToggle: activeTab => {
    dispatch(toggleTab(activeTab));
    dispatch(toggleModalReg());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Greeting);
