import React,{ Component } from 'react';
import { Link, withRouter } from 'react-router';
import FbLogin from './fb-login';
import GoogleLogin from './google-login';

class SignUpView extends Component {
  render(){
    return(
      <div>
        <h1>Sign Up</h1>
        <Link to="/">Login</Link>
        <FbLogin fb={this.props.route.fb} />
        <GoogleLogin />
        <button onClick={()=>{this.props.router.push('/')}}>Submit</button>
      </div>
    );
  }
}
export default withRouter(SignUpView);
