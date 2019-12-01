import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers/rootReducer';
import {loadState, saveState} from './localStorage';
const presistedState = loadState ();

const middleware = [thunk];

const store = createStore (
  RootReducer,
  presistedState,
  compose (applyMiddleware (...middleware))
);

store.subscribe (() => {
  saveState (store.getState ());
});

export default store;
