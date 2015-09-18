/*
Simple web service to act like a blog
and do simple CRUD operations.
Or maybe something simpler.

This is our controller.
*/
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

import * as todo from './todo.js';

const app = express();

app.use(bodyParser.json());
app.use(logger('combined'));

app.get('/todos', (req, res, next) => {
  todo.getAllTodo().then( list => {
    res.send(list);
  }).catch((err) => {
    next(err);
  });
});

app.post('/todos', (req, res, next) => {
  todo.addTodoItem(req.body).then((idx) => {
    res.send({added: idx});
  }).catch((err) => {
    next(err);
  });
});

app.listen(3001, () => {
  /* eslint no-console:0 */
  console.log('listening on 3001');
});
