import React, {Component} from 'react';

class GoogleLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
       GOOGLEmessage:'未登入',
       GOOGLEemail:'',
       GOOGLEpicture:'',
    };
    this.renderGoogleLoginButton=this.renderGoogleLoginButton.bind(this);
  
  }
  componentDidMount(){
    //google載入後觸發render GOOGLE login button
    window.addEventListener('google-loaded',this.renderGoogleLoginButton);
  }
  renderGoogleLoginButton(){
    const onSignIn= (googleUser)=> {
      var profile = googleUser.getBasicProfile();
      // console.log('[Google+]ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      // console.log('[Google+]Name: ' + profile.getName());
      // console.log('[Google+]Image URL: ' + profile.getImageUrl());
      // console.log('[Google+]Email: ' + profile.getEmail());
      this.setState(
      {
        'GOOGLEmessage':'Welcome '+profile.getName(),
        'GOOGLEemail':'Email:'+profile.getEmail(),
        'GOOGLEpicture':profile.getImageUrl()
      });

    }
    gapi.signin2.render('googleSignIn', {
      'scope': 'https://www.googleapis.com/auth/plus.login',
      'width': 220,
      'height': 40,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess':onSignIn
    });
  }
  signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
    this.setState(
    {
        'GOOGLEmessage':'已登出',
        'GOOGLEemail':'',
        'GOOGLEpicture':''
    });

  }
  render(){
    return(
      <div>
        <div id="googleSignIn" data-onsuccess={()=>{this.onSignIn()}}></div>
        <button className="btn btn-default" onClick={()=>{this.signOut()}}>Sign out</button>
        <p>{this.state.GOOGLEmessage}</p>
        <p>{this.state.GOOGLEemail}</p>
        <img src={this.state.GOOGLEpicture} />
      </div>
    );
  }
}

export default GoogleLogin;
