import { connect } from 'react-redux';

import { toggleTab } from '../actions';
import RegTabs from '../components/RegTabs';

const mapStateToProps = ({ rsEffects }) => ({ activeTab: rsEffects.activeTab });

const mapDispatchToProps = dispatch => ({
  toggleTab: activeTab => dispatch(toggleTab(activeTab)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegTabs);
