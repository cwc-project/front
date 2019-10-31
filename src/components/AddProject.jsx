import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, Input, Form } from 'reactstrap';

import ErrorContainer from '../containers/ErrorContainer';
import BtnSubmitContainer from '../containers/BtnSubmitContainer';

const AddProject = ({ modal, loading, toggleModal, addProject }) => {
  const title = React.createRef();
  return (
    <Modal isOpen={modal} fade>
      <ModalHeader toggle={toggleModal}>Add new project</ModalHeader>
      <ModalBody>
        <Form
          onSubmit={e => {
            e.preventDefault();
            addProject(title);
          }}
        >
          <fieldset disabled={loading}>
            <Input
              placeholder="Insert project title"
              innerRef={title}
              required
            />
            <ErrorContainer type="project" />
            <BtnSubmitContainer type="project" btnValue="Submit new project" />
          </fieldset>
        </Form>
      </ModalBody>
    </Modal>
  );
};

AddProject.propTypes = {
  modal: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
};

AddProject.defaultProps = {
  modal: false,
};

export default AddProject;
