import { connect } from 'react-redux';
import { toggleModalProjAdd, addProject } from '../actions';
import AddProject from '../components/AddProject';

const mapStateToProps = ({ rsEffects, user, fetch }) => ({
  loading: fetch.loading.project,
  modalProjAdd: rsEffects.modalProjAdd,
  authToken: user.authToken,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { authToken, modalProjAdd, loading } = stateProps;
  const { dispatch } = dispatchProps;
  const { history } = ownProps;
  return {
    modalProjAdd,
    loading,
    toggleModalProjAdd: () => dispatch(toggleModalProjAdd()),
    addProject: title => dispatch(addProject(title, authToken, history)),
  };
};

export default connect(
  mapStateToProps,
  null,
  mergeProps,
)(AddProject);
