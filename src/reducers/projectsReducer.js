import {
  GET_PROJECTS,
  GET_PROJECT,
  // ADD_PROJECT
} from '../actions';

const initialState = {
  projectsList: [],
  projectsAmount: 0,
  project: {
    id: '',
    title: '',
    status: '',
    dateAdded: '',
    // todos: [],
  },
};

const renameProjectId = ({ _id: id, ...rest }) => ({ id, ...rest });
const projectsListHandler = projects =>
  projects.map(project => renameProjectId(project));

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projectsList: projectsListHandler(action.projectsList),
        projectsAmount: action.projectsAmount,
      };

    case GET_PROJECT:
      return {
        ...state,
        project: renameProjectId(action.project),
      };

    default:
      return state;
  }
};

export default projectsReducer;

// case ADD_PROJECT:
//   return {
//     ...state,
//     projectsList: [...state.projectsList, renameProjectId(action.project)],
//     projectsAmount: state.projectsAmount + 1,
//   };
