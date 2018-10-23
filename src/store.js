// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const isProd = (process.env.NODE_ENV === 'production') ? true: false;
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// Production store
let configureStore = (preloadedState) => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(thunk)
)
if (!isProd) {
  // Development store
  configureStore = (preloadedState) => {
    const store = createStore(
      rootReducer,
      preloadedState,
      enhancers,
      compose(
        applyMiddleware(thunk, createLogger()),
      )
    );
  
    return store
  }
}

export default configureStore;
