import { LOGIN_USER, FETCH_USER, ERR_USER } from '../actions';
import { loadStorageToState } from '../middleware/localStorage';

const initialState = {
  auth_token: '',
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
        auth_token: action.user.auth_token,
        info: { ...action.user.info },
        loggedIn: true,
        loading: false,
      };

    case ERR_USER:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
