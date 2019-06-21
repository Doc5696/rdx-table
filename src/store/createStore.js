import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import rootReducer from './reducers';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(createSagaMiddleware))
);

axios.interceptors.request.use(
  function(config) {
    config.baseURL = 'http://localhost:3000';
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

export default store;
