import { combineReducers } from 'redux';
import rsEffects from './rsEffects'; // эффекты библиотеки reactstrap
import user from './user';
import projects from './projects';

const reducer = combineReducers({
  rsEffects,
  user,
  projects,
});

export default reducer;
