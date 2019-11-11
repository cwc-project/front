// import { connect } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// import { addProject } from '../actions';
// import AddTodoForm from '../components/AddTodoForm';

// const mapStateToProps = ({ rsEffects, user, fetch }) => ({
//   // loading: fetch.loading.project,
//   // modalProjAdd: rsEffects.modalProjAdd,
//   authToken: user.authToken,
// });

// const mergeProps = (stateProps, dispatchProps) => {
//   const { authToken, modalProjAdd, loading } = stateProps;
//   const { dispatch } = dispatchProps;
//   return {
//     addProject: title => {
//       const titleValue = title.current.value.trim();
//       if (!titleValue) return dispatch(errProject('Invalid project title'));
//       return dispatch(addProject(titleValue, authToken, history));
//     },
//   };
// };

// export default connect(
//   mapStateToProps,
//   null,
//   mergeProps,
// )(AddTodoForm);
