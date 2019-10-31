import { GET_PROJECTS, ADD_PROJECT } from '../actions';

const initialState = [];

const projectsHandler = projects =>
  projects.map(({ _id: id, ...rest }) => ({ id, ...rest }));

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return projectsHandler(action.projects);

    case ADD_PROJECT:
      return [...state, action.project];

    default:
      return state;
  }
};

export default projectsReducer;
