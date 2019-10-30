import {
  FETCH_PROJECTS,
  GET_PROJECTS,
  ERR_PROJECTS,
  ADD_PROJECT,
} from '../actions';

const initialState = {
  projects: [],
  loading: false,
};

const projectsHandler = projects =>
  projects.map(({ _id: id, ...rest }) => ({ id, ...rest }));

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return {
        ...state,
        loading: true,
      };

    case GET_PROJECTS:
      return {
        projects: projectsHandler(action.projects),
        loading: false,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.project],
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

export default projectsReducer;
