import React, {Component} from 'react';
import {Route, Router} from 'react-router';
import history from './history';

import Index from './components/index';
import Edit from './components/edit';

export function routes() {
  return [
    <Route path="/" component={Index}/>,
    <Route path="/edit" component={Edit}/>
  ];
}

export default class MyRouter extends Component {
  render() {
    return (<Router history={history()} children={routes()}/>);
  }
}
