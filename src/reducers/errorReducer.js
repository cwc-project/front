import { ERR_LOGIN, ERR_REG, ERR_PROJECTS, TOGGLE_MODAL } from '../actions';
import {
  NAME_FORMAT_ERR,
  EMAIL_FORMAT_ERR,
  PASS_FORMAT_ERR,
} from '../constants';

const initialState = {
  err: {
    log: '',
    reg: '',
    projects: '',
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
  // const error = err.response ? err.response.data.error : err;
  return error;
};
// const errorExtractor = err => {
//   // let error = err.response ? err.response.data : err;
//   // error = typeof error.error === 'string' ? error.error : err.toString();
//   // return error;

// };

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERR_LOGIN:
      return { err: { ...state.err, log: errorExtractor(action.err) } };

    case ERR_REG:
      return { err: { ...state.err, reg: errorExtractor(action.err) } };

    case ERR_PROJECTS:
      return { err: { ...state.err, projects: errorExtractor(action.err) } };

    case TOGGLE_MODAL:
      return { err: { ...state.err, log: '', reg: '' } };

    default:
      return state;
  }
};

export default errorReducer;
