import {View} from 'backbone';
import template from '../templates/index.hbs';

export default class IndexView extends View {

  title = 'Slick ToDo List'

  initialize() {
    this.listenTo(window.todos, 'all', this.render);
    this.model = window.todos;
    this.model.fetch();
  }

  render() {
    this.$el.html(template({todo: this.model.toJSON()}));
    return this;
  }
}
