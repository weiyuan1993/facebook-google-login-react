import React, {Component} from 'react';
import FbLogin from './fb-login';
import GoogleLogin from './google-login';

class LoginView extends Component {
  render(){
    return(
      <div>
        <h1>Facebook Login</h1>
        <FbLogin fb={this.props.fb} />
        <h1>Google+ Login</h1>
        <GoogleLogin />
      </div>
    );
  }
}

export default LoginView;
