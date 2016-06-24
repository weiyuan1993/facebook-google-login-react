import { combineReducers } from 'redux';
import fbReducer from './reducer-fb-login';
const rootReducer = combineReducers({
  FB:fbReducer
});

export default rootReducer;
