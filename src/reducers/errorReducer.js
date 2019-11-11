import {
  ERR_LOGIN,
  ERR_REG,
  ERR_PROJECTS,
  ERR_PROJECT,
  TOGGLE_MODAL_REG,
  TOGGLE_MODAL_PROJ_ADD,
  LOGOUT_USER,
  GET_PROJECT,
  NAME_FORMAT_ERR,
  EMAIL_FORMAT_ERR,
  PASS_FORMAT_ERR,
} from '../actions';

const initialState = {
  err: {
    log: '',
    reg: '',
    projects: '',
    project: '',
  },
};

const formatError = err => {
  const { nameErr = false, emailErr = false, passErr = false } = err;

  if (nameErr) return NAME_FORMAT_ERR;
  if (emailErr) return EMAIL_FORMAT_ERR;
  if (passErr) return PASS_FORMAT_ERR;
  return '';
};

const errorExtractor = err => {
  let error = err.response ? err.response.data : err;
  if (error.formatErr) {
    return formatError(error.formatErr);
  }
  error = typeof error.error === 'string' ? error.error : err.toString();
  return error;
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERR_LOGIN:
      return { err: { ...state.err, log: errorExtractor(action.err) } };

    case ERR_REG:
      return { err: { ...state.err, reg: errorExtractor(action.err) } };

    case ERR_PROJECTS:
      return { err: { ...state.err, projects: errorExtractor(action.err) } };

    case ERR_PROJECT:
      return { err: { ...state.err, project: errorExtractor(action.err) } };

    case GET_PROJECT:
    case TOGGLE_MODAL_REG:
      return initialState;

    case TOGGLE_MODAL_PROJ_ADD:
      return { err: { ...initialState.err, projects: state.err.projects } };

    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};

export default errorReducer;
