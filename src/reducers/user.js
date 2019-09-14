import { LOGIN_USER, FETCH_USER, ERR_USER, LOGOUT_USER } from '../actions';
import { loadStorageToState } from '../middleware/sessionStorage';

const initialState = {
  authToken: '',
  info: {},
  loggedIn: false,
  loading: false,
};

let localState;

try {
  localState = { ...initialState, ...loadStorageToState('user') };
} catch (e) {
  localState = initialState;
}

export default (state = localState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER:
      return {
        authToken: action.user.authToken,
        info: { ...action.user.info },
        loggedIn: true,
        loading: false,
      };
    case LOGOUT_USER:
      return initialState;

    case ERR_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
