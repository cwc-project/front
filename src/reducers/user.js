import { LOGIN_USER } from '../actions';

const reducer = (state = { details: {}, status: '' }, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, details: action.user };

    default:
      return state;
  }
};

export default reducer;
