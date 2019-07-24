// import React from 'react'
import { connect } from 'react-redux';

import { toggleModal, toggleTab } from '../actions';
import Greeting from '../components/Greeting';

const mapDispatchToProps = dispatch => ({
  onToggle: activeTab => {
    dispatch(toggleTab(activeTab));
    dispatch(toggleModal());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Greeting);
