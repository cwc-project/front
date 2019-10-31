import {
  LOGIN_USER,
  // FETCH_USER,
  LOGOUT_USER,
  // ERR_LOGIN,
  // ERR_REG,
} from '../actions';
import { loadStorageToState } from '../middleware/sessionStorage';

const initialState = {
  authToken: '',
  info: {},
  loggedIn: false,
  // loading: false,
};

let localState;

try {
  localState = { ...initialState, ...loadStorageToState('user') };
} catch (e) {
  localState = initialState;
}

const userReducer = (state = localState, action) => {
  switch (action.type) {
    // case FETCH_USER:
    //   return {
    //     ...state,
    //     loading: true,
    //   };

    case LOGIN_USER:
      return {
        authToken: action.user.authToken,
        info: { ...action.user.info },
        loggedIn: true,
        // loading: false,
      };
    case LOGOUT_USER:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;

// case ERR_LOGIN:
// case ERR_REG:
//   return {
//     ...state,
//     loading: false,
//   };
