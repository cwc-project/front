import {
  FETCH_USER,
  FETCH_PROJECTS,
  FETCH_PROJECT,
  LOGIN_USER,
  LOGOUT_USER,
  ERR_LOGIN,
  ERR_REG,
  GET_PROJECTS,
  ADD_PROJECT,
  ERR_PROJECTS,
  ERR_PROJECT,
} from '../actions';

// в один момент времени может быть только 1 fetch запрос

const initialState = {
  loading: {
    user: false,
    projects: false,
    project: false,
  },
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { loading: { ...initialState.loading, user: true } };

    case FETCH_PROJECTS:
      return { loading: { ...initialState.loading, projects: true } };

    case FETCH_PROJECT:
      return { loading: { ...initialState.loading, project: true } };

    case LOGIN_USER:
    case LOGOUT_USER:
    case ERR_LOGIN:
    case ERR_REG:
    case GET_PROJECTS:
    case ADD_PROJECT:
    case ERR_PROJECTS:
    case ERR_PROJECT:
      return initialState;

    default:
      return state;
  }
};

export default fetchReducer;
