import React from 'react';
import {Provider} from 'react-redux';
import {RoutingContext} from 'react-router';

import init from './app';

export default function(renderProps) {
  const component = renderProps.components[0].WrappedComponent;
  const title = component.title;
  const store = init({});
  const state = store.getState();
  return component.fetchData(state, store.dispatch).then(() => {
    const body = React.renderToString(
      <Provider store={store}>
        {() => <RoutingContext {...renderProps} />}
      </Provider>
    );
    return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <div id="body">${body}</div>
  </div>
  <script>window.__data=${JSON.stringify(store.getState())}</script>
  <script src="main.js"></script>
</body>
</html>`;
  });
}
