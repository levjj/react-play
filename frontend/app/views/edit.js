import {View} from 'backbone';
import template from '../templates/edit.hbs';

export default class EditView extends View {

  title = 'Add new ToDo Item'

  events() {
    return {
      'submit form': 'submit'
    };
  }

  submit(evt) {
    evt.preventDefault();
    window.todos.create({title: this.input.val()});
    window.router.navigate('');
  }

  render() {
    this.$el.html(template({todos: this.model}));
    this.input = this.$('input');
    return this;
  }
}
