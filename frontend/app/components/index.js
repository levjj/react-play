import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {list} from '../actions/todo';

@connect(state => ({
  todos: state.todos,
  isLoading: state.isLoading
}))
export default class Index extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
  }

  componentDidMount() {
    document.title = this.title;
    if (!this.props.todos) {
      return this.props.dispatch(list());
    }
  }

  title = 'My Slick ToDo List';

  render() {
    const {todos, isLoading} = this.props;
    return (
      <div className="row">
        <h1>My To Do List</h1>
        {(isLoading || !todos ? [] : todos).map((todo) => (
          <div className="well">{todo.title}</div>
          ))}
        {isLoading && <p><img src="http://www.arktimes.com/images/icons/spinner.gif" /></p>}
        <p>
          <Link to="/edit" className="btn btn-primary">Edit This List</Link>
        </p>
      </div>);
  }
}
