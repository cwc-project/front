import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Form,
} from 'reactstrap';
import ErrorContainer from '../containers/ErrorContainer';

const AddProject = ({ modal, toggleModal, addProject }) => {
  const title = React.createRef();
  // const addProject = () => {
  //   const titleValue = title.current.value.trim();
  //   if (titleValue) {
  //     return props.addProject(titleValue);
  //   }
  //   return null;
  // };
  // const { modal, toggleModal } = props;
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
          <Input placeholder="Insert project title" innerRef={title} required />
        </Form>
        <ErrorContainer type="project" />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => addProject(title)}>
          Submit new project
        </Button>
        <Button color="secondary" onClick={toggleModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

AddProject.propTypes = {
  modal: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
};

AddProject.defaultProps = {
  modal: false,
};

export default AddProject;
