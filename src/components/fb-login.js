import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {
  action_fbLogIn,
  action_getFbName,
  action_getFbEmail,
  action_getFbCover,
  action_fbLogOut
} from '../actions/index';

class FbLogin extends Component {
  constructor(props){
    super(props);
    this.FB = props.fb;
    this.state = {
       FBmessage: '未登入',
       FBemail:'',
       FBcover:''
     };
  }
  //component 生成前
  componentWillMount(){
    //檢查登入狀態
    window.fbAsyncInit = function() {
      FB.getLoginStatus(function(response) {
        console.log("[FB]檢查登入狀態...");
        if(response.status=='connected'){
          console.log("[FB]已登入");
        }else{
          console.log("[FB]未登入");
        }
      });
    };
  }
  //component 掛載完成後
  componentDidMount() {
    FB.init({
      appId      : '153010411778212',
      cookie     : true,  // enable cookies to allow the server to access
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.5' // use version 2.2
    });
    let self = this;
    FB.getLoginStatus(function(response) {
      self.onStatusChange(response);
    });

    //監聽是否登出，登入狀態變化
    this.FB.Event.subscribe('auth.logout',
      this.onLogout.bind(this));
    this.FB.Event.subscribe('auth.statusChange',
      this.onStatusChange.bind(this));

  }
  //當登入狀態改變
  onStatusChange(response) {
    console.log('[FB]' ,response );

    let self = this;
    if( response.status === "connected" ) {
      const isLogIn = true;
      this.props.action_fbLogIn(isLogIn);

      this.FB.api('/me', function(response) {
        self.props.action_getFbName(response.name);//dispatch action_getFbName
        let message = "Welcome";
          self.setState({
            FBmessage: message
          });
          self.getPicture();
      });
    }
  }
  facebookLogin(){
    FB.login(function(response) {
      if (response.authResponse) {
        //user just authorized your app
        console.log("Login Success")
      }
    }, {scope: 'email,public_profile', return_scopes: true});
  }
  //登出按鈕
  logOut(){
    let self = this;
    FB.logout(function(response) {
      console.log(response,'Person is now logged out');
      //self.setState({FBmessage:'已登出'});
      self.checkLoginState();
    });
  }
  onLogout(response) {
     this.props.action_fbLogOut();
     this.setState({
        FBmessage: "已登出",
        FBemail:'',
        FBpicture:'',
        FBcover:''
     });
  }
  checkLoginState() {
    let self = this;
    FB.getLoginStatus(function(response) {
      self.onStatusChange(response);
    });
  }
  getEmail(){
    let self = this;
    FB.api('/me',{fields:'email'}, function(response) {
        self.props.action_getFbEmail(response.email);
    });
  }
  getPicture(){
    let self = this;
    FB.api('/me',{fields:'picture'}, function(response) {
        self.setState({FBpicture:response.picture.data.url});
    });
  }
  getCover(){
    let self = this;
    FB.api('/me',{fields:'cover'}, function(response) {
        // self.setState({FBcover:response.cover.source});
        self.props.action_getFbCover(response.cover.source);
    });
  }
  render(){
    return(

      <div>
        <div
            className="fb-login-button"
            scope="public_profile,email"
            onlogin={()=>{this.checkLoginState()}}
            data-auto-logout-link={true}
            data-size="large">
        </div>
        <br/>
        <button className="btn btn-primary" onClick={()=>{this.facebookLogin()}}>Facebook Login</button>
        <p>{this.state.FBmessage} {this.props.fbName}</p>
        <img src={this.state.FBpicture} />
        <p>{this.props.fbEmail}</p>
        <img src={this.props.fbCover} />
        <button className="btn btn-primary" onClick={()=>{this.getEmail()}}>Get email</button>
        <button className="btn btn-primary" onClick={()=>{this.getCover()}}>Get Cover</button>
        <button className="btn btn-danger"  onClick={()=>{this.logOut()}}>Log Out</button>
        <br/>
        Redux:
        <br/>
        facebook is login:
        {this.props.fbIsLogIn}
        <br/>
        Name:
        {this.props.fbName}
      </div>
    );
  }

}
function mapStateToProps(state){ //存取rootReducer回傳的state
  return {
    fbIsLogIn:state.FB.isLogIn,
    fbName:state.FB.fbName,
    fbEmail:state.FB.fbEmail,
    fbCover:state.FB.fbCover
  };
}
export default connect(mapStateToProps, {
  action_fbLogIn,
  action_getFbName,
  action_getFbEmail,
  action_getFbCover,
  action_fbLogOut })(FbLogin);
