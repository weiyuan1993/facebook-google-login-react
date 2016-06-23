import React, { Component } from 'react';
import LoginView from './login_view';
export default class App extends Component {

  render() {
    return (
      <div>
        <h1>React 登入</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
