import { FETCH_PROJECTS, GET_PROJECTS, ERR_PROJECTS } from '../actions';

const initialState = {
  projects: [
    {
      title: 'First Project',
      id: '1',
    },
    {
      title: 'Second Project',
      id: '2',
    },
  ],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        loading: true,
      };

    case GET_PROJECTS:
      return {
        projects: action.data,
        loading: false,
      };

    case ERR_PROJECTS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};
