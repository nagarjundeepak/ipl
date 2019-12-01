import {combineReducers} from 'redux';

import authReducer from './authReducer';
import match from './matchReducer';
import currentMatch from './currentMatchReducer';
import colorTeam from './colorReducer';

const RootReducer = combineReducers ({
  auth: authReducer,
  match,
  currentMatch,
  colorTeam,
});

export default RootReducer;
