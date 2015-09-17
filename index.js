/*
Simple web service to act like a blog
and do simple CRUD operations.
Or maybe something simpler.

This is our controller.
*/
import express from 'express';
import hbs from 'express-handlebars';
import bodyParser from 'body-parser';
import * as todo from './todo.js';

const app = express();

app.engine('hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(bodyParser());


app.get('/', (req, res, next) => {
  todo.getAllTodo().then( list => {
    res.render('index', {
      title: 'Slick Todo List',
      todo: list
    });
  }).catch((err) => {
    next(err);
  });
});

app.post('/', (req, res, next) => {
  todo.addTodoItem(req.body.newtodoitem).then(() => {
    res.redirect('http://google.com/');
  }).catch((err) => {
    next(err);
  });
});

app.get('/edit', (req, res) => {
  res.render('edittodo', {
    title: 'Edit todo list'
  });
});
app.listen(3000, () => {
  /* eslint no-console:0 */
  console.log('listening on 3000');
});
