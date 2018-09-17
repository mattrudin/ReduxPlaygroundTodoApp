import { combineReducers } from 'redux';
import todos from './TodoReducer';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter
});