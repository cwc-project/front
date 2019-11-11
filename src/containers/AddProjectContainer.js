import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleModalProjAdd, addProject, errProject } from '../actions';
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
    toggleModalProjAdd: bindActionCreators(toggleModalProjAdd, dispatch),
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
