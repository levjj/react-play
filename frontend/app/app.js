import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

import ApiClient from './api';
import Router from './router';
import ToDoReducer from './reducers/todo';

export default function init(data, isClient) {
  const client = new ApiClient(isClient);

  function middleware(dispatch, getState) {
    return (next) => (action) => {
      const {promise, types, ...rest} = action;
      if (!promise) return next(action);
      const [REQUEST, SUCCESS, FAILURE] = types;
      next({...rest, type: REQUEST});
      return promise(client, dispatch, getState).then(
        (result) => next({...rest, result, type: SUCCESS}),
        (error) => next({...rest, error, type: FAILURE}));
    };
  }

  const create = applyMiddleware(middleware)(createStore);
  return create(ToDoReducer, data);
}

if (typeof window !== 'undefined') {
  /* eslint no-underscore-dangle:0 */
  const store = init(window.__data, true);
  React.render((
    <Provider store={store}>
      {() => <Router />}
    </Provider>
  ), document.getElementById('body'));
}
