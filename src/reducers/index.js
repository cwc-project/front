import { combineReducers } from 'redux';
import errors from './errorReducer';
import rsEffects from './rsEffectsReducer';
import user from './userReducer';
import projects from './projectsReducer';

const rootReducer = combineReducers({
  errors,
  rsEffects,
  user,
  projects,
});

export default rootReducer;
