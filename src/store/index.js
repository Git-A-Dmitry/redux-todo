import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/root-reducer';
// import { todo } from './todo-reducer';

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
