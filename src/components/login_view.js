import React, { Component } from 'react';
import { Link } from 'react-router';

import FbLogin from './fb-login';
import GoogleLogin from './google-login';

class LoginView extends Component {
  render(){
    return(
      <div>
        <h1>Login</h1>
        <div className="col-md-6">
          <Link to="sign-up" className="btn btn-success">JOIN US NOW</Link>
          <Link to="dashboard" className="btn btn-info">Dashboard</Link>
        </div>
        <div className="col-md-6">
          <h3>Facebook Login</h3>
          <FbLogin fb={this.props.route.fb} />
          <h3>Google+ Login</h3>
          <GoogleLogin />
        </div>

      </div>
    );
  }
}

export default LoginView;
