import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import usersReducer from './usersReducer';

const reducers = combineReducers({
  app: appReducer,
  usersPage: usersReducer,
  form: formReducer
});

export default reducers;
