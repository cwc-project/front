import {
  LOGIN_USER,
  // ERR_USER
} from '../actions';

const reducer = (
  state = {
    details: {},
    // err: '',
    loading: false,
  },
  action,
) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        details: action.details,
        // err: '',
        loading: false,
      };

    default:
      return state;
  }
};

// case ERR_USER: // prettier ignore
// return { ...state, details: {}, err: action.err, loading: false };

export default reducer;
