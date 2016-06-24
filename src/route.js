import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { Link } from 'react-router';
import App from './components/app';
import LoginView from './components/login_view';
import SignUpView from './components/signup_view';
const Page1 = () => {
  return (
    <div>
      I'm page One.
      <Link to="/">回首頁</Link>
    </div>
  );
}
const Page2 = () => {
  return <div>I'm page Two.</div>
}
const Page3 = () => {
  return <div>I'm page Three.</div>
}

export default(
  <Route path="/" component={App} >
    <IndexRoute component={LoginView} fb={FB} />
    <Route path="sign-up" component={SignUpView} fb={FB} />
    <Route path="page1" component={Page1} />
    <Route path="page2" component={Page2} />
    <Route path="page3" component={Page3} />
  </Route>
);
