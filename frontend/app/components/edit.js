import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import history from '../history';

import {add} from '../actions/todo';

@connect(state => ({
  isLoading: state.isLoading
}))
export default class Edit extends Component {
  static propTypes = {
    isLoading: PropTypes.bool,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    document.title = this.title;
  }

  title = 'Edit ToDo List';

  submit(evt) {
    evt.preventDefault();
    const el = React.findDOMNode(this.refs.newtodo);
    this.props.dispatch(add({title: el.value}))
      .then(() => history.replaceState(null, '/'));
  }

  render() {
    const {isLoading} = this.props;
    return (
      <form className="form" action="#" onSubmit={::this.submit}>
        <h1>Edit To Do List</h1>
        <p className="lead">
          New todo item:
        </p>
        <div className="input-group input-group-lg">
          <input ref="newtodo" type="text" className="form-control" placeholder="Todo Item" aria-describedby="sizing-addon1" />
        </div>
        <br />
        <div className="input-group input-group-lg">
          <Link to="/" className="btn btn-primary" href="#">Back</Link>
          &nbsp;
          <input className="btn btn-primary" type="submit" value={isLoading ? 'Saving...' : 'Submit'} disabled={isLoading} />
        </div>
      </form>);
  }
}
