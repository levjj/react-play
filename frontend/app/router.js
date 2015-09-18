import {Router} from 'backbone';
import $ from 'jquery';

import IndexView from './views/index';
import EditView from './views/edit';

export default class MyRouter extends Router {
  routes() {
    return {
      '': 'index',
      'edit': 'edit'
    };
  }

  index() {
    const view = new IndexView({el: $('#body')});
    document.title = view.title;
    view.render();
  }

  edit() {
    const view = new EditView({el: $('#body')});
    document.title = view.title;
    view.render();
  }
}
