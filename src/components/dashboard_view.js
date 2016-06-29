import React, { Component } from 'react';
class DashBoardView extends Component {
  render(){
    return(
      <div className="container">
        <div className="nav navbar-primary">
          <h1  style={{display:'inline'}}>FiToBe</h1>
          <p  style={{display:'inline'}}>FiP:9999</p>
          <p  style={{display:'inline',float:'right'}}>Name:Vic </p>
        </div>
        <div className="sidebar">
          <li><button>DashBoard</button></li>
          <li><button>Track</button></li>
          <li><button>Progress</button></li>
          <li><button>Bookmark</button></li>
          <li><button>Profile</button></li>
        </div>
        <div className="content container">
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default DashBoardView;
