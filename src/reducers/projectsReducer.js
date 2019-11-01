import { GET_PROJECTS, ADD_PROJECT } from '../actions';

const initialState = {
  projectsList: [],
  projectsAmount: 0,
  project: {},
};

const projectsListHandler = projects =>
  projects.map(({ _id: id, ...rest }) => ({ id, ...rest }));

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projectsList: projectsListHandler(action.projectsList),
        projectsAmount: action.projectsAmount,
      };

    case ADD_PROJECT:
      return {
        ...state,
        projectsList: [...state.projectsList, action.project],
        projectsAmount: state.projectsAmount + 1,
      };

    default:
      return state;
  }
};

export default projectsReducer;
