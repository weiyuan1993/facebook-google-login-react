import React, { Component } from 'react';
import LoginView from './login_view';
export default class App extends Component {

  render() {
    return (
      <div>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
