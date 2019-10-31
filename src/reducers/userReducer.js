import { LOGIN_USER, LOGOUT_USER } from '../actions';
import { loadStorageToState } from '../middleware/sessionStorage';

const initialState = {
  authToken: '',
  info: {},
  loggedIn: false,
};

let localState;

try {
  localState = { ...initialState, ...loadStorageToState('user') };
} catch (e) {
  localState = initialState;
}

const userReducer = (state = localState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        authToken: action.user.authToken,
        info: { ...action.user.info },
        loggedIn: true,
      };
    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
