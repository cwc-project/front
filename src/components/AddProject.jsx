import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, Input, Form } from 'reactstrap';

import ErrorContainer from '../containers/ErrorContainer';
import BtnSubmitContainer from '../containers/BtnSubmitContainer';

const AddProject = ({
  modalProjAdd,
  loading,
  toggleModalProjAdd,
  addProject,
}) => {
  const projectTitle = React.createRef();
  return (
    <Modal isOpen={modalProjAdd} fade>
      <ModalHeader toggle={toggleModalProjAdd}>Add new project</ModalHeader>
      <ModalBody>
        <Form
          onSubmit={e => {
            e.preventDefault();
            addProject(projectTitle);
          }}
        >
          <fieldset disabled={loading}>
            <Input
              placeholder="Insert project title"
              innerRef={projectTitle}
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
  modalProjAdd: PropTypes.bool,
  loading: PropTypes.bool.isRequired,
  toggleModalProjAdd: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
};

AddProject.defaultProps = {
  modalProjAdd: false,
};

export default AddProject;
