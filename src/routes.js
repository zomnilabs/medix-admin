import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';

export default <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/login" component={Login} />
</Route>