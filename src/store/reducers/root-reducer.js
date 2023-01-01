import { combineReducers } from 'redux';

import { todos } from './todo-reducer';
import { filters } from '../filters/filter-reducer';

export const rootReducer = combineReducers({
  todos: todos,
  filters: filters,
});
