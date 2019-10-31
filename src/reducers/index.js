import { combineReducers } from 'redux';
import errors from './errorReducer';
import fetch from './fetchReducer';
import rsEffects from './rsEffectsReducer';
import user from './userReducer';
import projects from './projectsReducer';

const rootReducer = combineReducers({
  errors,
  fetch,
  rsEffects,
  user,
  projects,
});

export default rootReducer;
