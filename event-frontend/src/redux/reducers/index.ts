import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';
import usersReducer from './usersReducer';
import eventReducer from './eventReducer';

const reducers = combineReducers({
  app: appReducer,
  usersPage: usersReducer,
  eventPage: eventReducer,
  form: formReducer
});

type ReducersType = typeof reducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<ReducersType>;

export default reducers;
