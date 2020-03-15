import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducers from 'redux/reducers';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware, logger)
  )
);

export default store;
