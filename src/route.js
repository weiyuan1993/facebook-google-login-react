import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import LoginView from './components/login_view';

const Page1 = () => {
  return <div>I'm page One.</div>
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
    <Route path="page1" component={Page1} />
    <Route path="page2" component={Page2} />
    <Route path="page3" component={Page3} />
  </Route>
);
