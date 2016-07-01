import React, { Component } from 'react';
import DashBoardHeader from './dashboard-header';
import DashBoardSideBar from './dashboard-sidebar';
import DashBoardSlideBar from './dashboard-slidebar';
import DashBoardContent from './dashboard-content';

class DashBoardView extends Component {
   componentDidMount(){
     document.getElementById('fullscreen-btn').addEventListener('click', function () {
         if (screenfull.enabled) {
             screenfull.request();
         }
     });
   }
  render(){
    return(
      <div>
        <div id="loading">
          <div className="svg-icon-loader" style={{position:"absolute",left:"37%",top:"40%"}} >
            <img src="/assets/images/svg-loaders/bars.svg" width={40} alt />
          </div>
        </div>
        <div id="sb-site">
          <DashBoardSlideBar />
          <div id="page-wrapper">
              <div id="mobile-navigation">
                <button id="nav-toggle" className="collapsed" data-toggle="collapse" data-target="#page-sidebar"><span /></button>
              </div>
              <DashBoardSideBar />
              <div id="page-content-wrapper">
                <div id="page-content">
                  <DashBoardHeader />
                  <DashBoardContent />
                </div>
              </div>
              </div>
        </div>
      </div>
    );
  }
}
export default DashBoardView;
