import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/root-reducer';
// import { todo } from './todo-reducer';
import { loadState, saveState } from './local-storage';

// export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(
    //
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
  // return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};
