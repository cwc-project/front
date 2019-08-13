import { LOGIN_USER, FETCH_USER, ERR_USER } from '../actions';

const reducer = (
  state = {
    profile: {},
    loading: false,
  },
  action,
) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_USER:
      return {
        ...state,
        profile: action.profile,
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

export default reducer;
