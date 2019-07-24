import { connect } from 'react-redux';
import { toggleTab } from '../actions';
import RegTabs from '../components/RegTabs';

const mapStateToProps = state => ({
  activeTab: state.rsEffects.activeTab,
});

const mapDispatchToProps = dispatch => ({
  toggleTab: activeTab => dispatch(toggleTab(activeTab)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegTabs);
