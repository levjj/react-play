/*
Simple web service to act like a blog
and do simple CRUD operations.
Or maybe something simpler.

This is our controller.
*/
import express from 'express';
import proxy from 'express-http-proxy';
import logger from 'morgan';
import {match} from 'react-router';
import createLocation from 'history/lib/createLocation';

import {routes} from './app/router';
import page from './app/page';

const app = express();

app.use(logger('combined'));

app.use('/api', proxy('localhost:3001'));

app.use(express.static('build'));

app.get('*', (req, res) => {
  const location = createLocation(req.url);

  match({routes: routes(), location}, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(301, redirectLocation.pathname +
                        redirectLocation.search);
    } else if (error) {
      res.status(500).send(error.message);
    } else if (renderProps === null) {
      res.status(404).send('Not found');
    } else {
      page(renderProps)
        .then((html) => res.send(html),
              (err) => res.status(500).send(err));
    }
  });
});

app.listen(3000, () => {
  /* eslint no-console:0 */
  console.log('listening on 3000');
});
