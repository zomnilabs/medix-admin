import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import Login from './containers/Login';
import Accounts from './containers/Accounts';

export default <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/accounts" component={Accounts} />
</Route>