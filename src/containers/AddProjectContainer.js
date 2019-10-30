import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModal, addProject, errProject } from '../actions';
import AddProject from '../components/AddProject';

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
    addProject: title => {
      const titleValue = title.current.value.trim();
      if (!titleValue) return dispatch(errProject('Invalid project title'));
      return dispatch(addProject(titleValue, authToken, history));
    },
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(AddProject);
