import {
  GET_PROJECTS,
  GET_PROJECT,
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from '../actions';

const initialState = {
  projectsList: [],
  projectsAmount: 0,
  project: {
    id: '',
    title: '',
    status: '',
    dateAdded: '',
    tasks: [],
  },
};

const renameId = ({ _id: id, ...rest }) => ({ id, ...rest });
const renameArrHandler = arr => arr.map(item => renameId(item));

const taskReducer = (state = {}, action) => {
  const task = renameId(action.task);
  if (state.id !== task.id) return state;
  return task;
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projectsList: renameArrHandler(action.projectsList),
        projectsAmount: action.projectsAmount,
      };

    case GET_PROJECT:
      return {
        ...state,
        project: {
          ...renameId(action.project),
          tasks: renameArrHandler(action.project.tasks),
        },
      };

    case ADD_TASK:
      return {
        ...state,
        project: {
          ...state.project,
          tasks: [...state.project.tasks, renameId(action.task)],
        },
      };

    case DELETE_TASK:
      return {
        ...state,
        project: {
          ...state.project,
          tasks: state.project.tasks.filter(task => task.id !== action.id),
        },
      };

    case EDIT_TASK:
      return {
        ...state,
        project: {
          ...state.project,
          tasks: state.project.tasks.map(task => taskReducer(task, action)),
        },
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
