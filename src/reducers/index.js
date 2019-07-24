import { combineReducers } from 'redux';
import rsEffects from './rsEffects'; // эффекты библиотеки reactstrap
import user from './user';

const reducer = combineReducers({
  rsEffects,
  user,
});

export default reducer;
