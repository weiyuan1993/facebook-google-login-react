import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Link } from 'react-router';
import App from './components/app';
import LoginView from './components/login_view';
import SignUpView from './components/signup_view';
import DashBoardView from './components/dashboard_view';
import DashBoard from './components/dashboard';
// import Dashboard from './components/dashboard;'
export default(
  <Route path="/" component={App} >
    <IndexRoute component={LoginView} fb={FB} />
    <Route path="sign-up" component={SignUpView} fb={FB} />
    <Route path="dashboard" component={DashBoardView}>
      <IndexRoute component={DashBoard} />
    </Route>
  </Route>
);
