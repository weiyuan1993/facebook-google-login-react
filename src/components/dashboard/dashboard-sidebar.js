import React, { Component } from 'react';
class DashBoardSideBar extends Component {
  render(){
    return(
      <div id="page-sidebar">
        <div id="header-logo" className="logo-bg">
          <a href="index.html" className="logo-content-big" title="DelightUI">
            Delight <i>UI</i>
            <span>Material Design Dashboard Template</span>
          </a>
          <a href="index.html" className="logo-content-small" title="DelightUI">
            Delight <i>UI</i>
            <span>Material Design Dashboard Template</span>
          </a>
          <a id="close-sidebar" href="#" title="Close sidebar">
            <i className="glyph-icon icon-outdent" />
          </a>
        </div>
        <div className="scroll-sidebar">
          <ul id="sidebar-menu">
            <li className="header"><span>Overview</span></li>
            <li>
              <a href="index.html" title="Admin Dashboard">
                <i className="glyph-icon icon-linecons-tv" />
                <span>Admin dashboard</span>
              </a>
            </li>
            <li className="header"><span>Components</span></li>
            <li>
              <a href="javascript:void(0);" title="Elements">
                <i className="glyph-icon icon-linecons-diamond" />
                <span>Elements</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li><a href="buttons.html" title="Buttons"><span>Buttons</span></a></li>
                  <li><a href="labels-badges.html" title="Labels & Badges"><span>Labels &amp; Badges</span></a></li>
                  <li><a href="content-boxes.html" title="Content boxes"><span>Content boxes</span></a></li>
                  <li><a href="icons.html" title="Icons"><span>Icons</span></a></li>
                  <li><a href="nav-menus.html" title="Navigation menus"><span>Navigation menus</span></a></li>
                  <li><a href="response-messages.html" title="Response messages"><span>Response messages</span></a></li>
                  <li><a href="images.html" title="Images"><span>Images</span></a></li>
                </ul>
              </div>{/* .sidebar-submenu */}
            </li>
            <li>
              <a href="javascript:void(0);" title="Dashboard boxes">
                <i className="glyph-icon icon-linecons-lightbulb" />
                <span>Dashboard boxes</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li><a href="chart-boxes.html" title="Chart boxes"><span>Chart boxes</span></a></li>
                  <li><a href="tile-boxes.html" title="Tile boxes"><span>Tile boxes</span></a></li>
                  <li><a href="social-boxes.html" title="Social boxes"><span>Social boxes</span></a></li>
                  <li><a href="panel-boxes.html" title="Panel boxes"><span>Panel boxes</span></a></li>
                </ul>
              </div>{/* .sidebar-submenu */}
            </li>
            <li>
              <a href="javascript:void(0);" title="Widgets">
                <i className="glyph-icon icon-linecons-wallet" />
                <span>Widgets</span>
              </a>
              <div className="sidebar-submenu">
                <ul>
                  <li><a href="tabs.html" title="Responsive tabs"><span>Responsive tabs</span></a></li>
                  <li><a href="collapsable.html" title="Collapsables"><span>Collapsable accordions</span></a></li>
                  <li><a href="bs-carousel.html" title="Bootstrap Carousel"><span>Bootstrap carousel</span></a></li>
                  <li><a href="calendar.html" title="Calendar"><span>Calendar</span></a></li>
                  <li><a href="scrollbars.html" title="Custom scrollbars"><span>Custom scrollbars</span></a></li>
                  <li><a href="modals.html" title="Modals"><span>Modals</span></a></li>
                  <li><a href="notifications.html" title="Notifications"><span>Notifications</span></a></li>
                  <li><a href="lazyload.html" title="Lazyload"><span>Lazyload</span></a></li>
                  <li><a href="loading-feedback.html" title="Loading feedback"><span>Loading feedback</span></a></li>
                  <li><a href="popovers-tooltips.html" title="Popovers & Tooltips"><span>Popovers &amp; Tooltips</span></a></li>
                  <li><a href="progress-bars.html" title="Progress bars"><span>Progress bars</span></a></li>
                  <li><a href="sortable-elements.html" title="Sortable elements"><span>Sortable elements</span></a></li>
                </ul>
              </div>{/* .sidebar-submenu */}
            </li>
            <li className="header"><span>Extra</span></li>
          </ul>{/* #sidebar-menu */}
        </div>
      </div>
    );
  }
}
export default DashBoardSideBar;
