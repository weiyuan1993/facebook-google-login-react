import React, {Component} from 'react';
import FbLogin from './fb-login';
import GoogleLogin from './google-login';

class LoginView extends Component {
  render(){
    return(
      <div>
        <div className="col-md-6">
          <h3>JOIN US NOW</h3>
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
