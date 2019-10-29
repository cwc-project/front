import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Button,
  Form,
} from 'reactstrap';
import { toggleModal, addProject } from '../actions';

class AddProjectContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.toggleModal = props.toggleModal;
    this.addProject = props.addProject;
  }

  render() {
    const { modal } = this.props;
    return (
      <Modal isOpen={modal} fade>
        <ModalHeader toggle={this.toggleModal}>Add new project</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={e => {
              e.preventDefault();
              this.addProject(this.title.current.value.trim());
            }}
          >
            <Input
              placeholder="Insert project title"
              innerRef={this.title}
              required
            />
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => this.addProject(this.title.current.value.trim())}
          >
            Submit new project
          </Button>
          <Button color="secondary" onClick={this.toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

AddProjectContainer.propTypes = {
  modal: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  addProject: PropTypes.func.isRequired,
};

AddProjectContainer.defaultProps = {
  modal: false,
};

const mapStateToProps = ({ rsEffects, user }) => ({
  modal: rsEffects.modal,
  authToken: user.authToken,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { authToken, modal } = stateProps;
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return {
    modal,
    toggleModal: bindActionCreators(toggleModal, dispatch),
    addProject: title => dispatch(addProject(title, authToken, history)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(AddProjectContainer);
