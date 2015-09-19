/*
Simple web service to act like a blog
and do simple CRUD operations.
Or maybe something simpler.

This is our controller.
*/
import express from 'express';
import proxy from 'express-http-proxy';
import logger from 'morgan';
import path from 'path';

const app = express();

app.use(logger('combined'));

app.use('/api', proxy('localhost:3001'));

app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => {
  /* eslint no-console:0 */
  console.log('listening on 3000');
});
