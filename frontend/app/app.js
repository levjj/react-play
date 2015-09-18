import Backbone from 'backbone';
import $ from 'jquery';

import {TodoList} from './models/todo';
import Router from './router';

$(() => {
  window.todos = new TodoList();
  window.router = new Router();
  Backbone.history.start();
});
