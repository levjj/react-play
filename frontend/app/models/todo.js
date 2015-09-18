import {Model, Collection} from 'backbone';

export class Todo extends Model {
  defaults() {
    return {
      title: 'empty todo...'
    };
  }
}

export class TodoList extends Collection {
  url() { return '/api/todos'; }
}
TodoList.prototype.model = Todo;
