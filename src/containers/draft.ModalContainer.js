// import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import { toggleModal as rsAction } from '../actions';
// import AddProjectContainer from './AddProjectContainer';
// import AddProject from '../components/AddProject';

// const ModalContainer = ({ modal, toggleModal, type }) => {
//   let modalHeader = 'undefined';
//   let component = <div>Component is not defined</div>;

//   switch (type) {
//     case 'reg':
//       modalHeader = 'Add new project';
//       component = <AddProjectContainer />;
//       break;

//     default:
//       break;
//   }

//   return (
//     <Modal isOpen={modal} fade>
//       <ModalHeader toggle={toggleModal}>{modalHeader}</ModalHeader>
//       <ModalBody>{component}</ModalBody>
//     </Modal>
//   );
// };

// ModalContainer.propTypes = {
//   modal: PropTypes.bool,
//   toggleModal: PropTypes.func.isRequired,
//   type: PropTypes.string.isRequired,
// };

// ModalContainer.defaultProps = {
//   modal: false,
// };

// const mapStateToProps = ({ rsEffects }) => ({
//   modal: rsEffects.modal,
// });

// const mapDispatchToProps = dispatch => ({
//   toggleModal: bindActionCreators(rsAction, dispatch),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(ModalContainer);
