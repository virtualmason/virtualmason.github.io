import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import PostDetails from './PostDetails';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory, browserHistory, DefaultRoute } from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}/>
    <Route path='/postdetails' component={PostDetails}/>
  </Router>,
  document.getElementById('root')
)
