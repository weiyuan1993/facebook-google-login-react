import React, { Component } from 'react';
class DashBoardHeader extends Component {
 render(){
   return(
     <div id="page-header">
             <div id="header-nav-left">
               <a className="header-btn" id="logout-btn" href="lockscreen-3.html" title="Lockscreen page example">
                 <i className="glyph-icon icon-linecons-lock" />
               </a>
               <div className="user-account-btn dropdown">
                 <a href="#" title="My Account" className="user-profile clearfix" data-toggle="dropdown">
                   <img width={28} src="../../assets/image-resources/gravatar.jpg" alt="Profile image" />
                   <span>Michael Lee</span>
                   <i className="glyph-icon icon-angle-down" />
                 </a>
                 <div className="dropdown-menu float-right">
                   <div className="box-sm">
                     <div className="login-box clearfix">
                       <div className="user-img">
                         <a href="#" title className="change-img">Change photo</a>
                         <img src="../../assets/image-resources/gravatar.jpg" alt />
                       </div>
                       <div className="user-info">
                         <span>
                           Michael Lee
                           <i>UX/UI developer</i>
                         </span>
                         <a href="#" title="Edit profile">Edit profile</a>
                         <a href="#" title="View notifications">View notifications</a>
                       </div>
                     </div>
                     <div className="divider" />
                     <ul className="reset-ul mrg5B">
                       <li>
                         <a href="#">
                           View login page example
                           <i className="glyph-icon float-right icon-caret-right" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           View lockscreen example
                           <i className="glyph-icon float-right icon-caret-right" />
                         </a>
                       </li>
                       <li>
                         <a href="#">
                           View account details
                           <i className="glyph-icon float-right icon-caret-right" />
                         </a>
                       </li>
                     </ul>
                     <div className="button-pane button-pane-alt pad5L pad5R text-center">
                       <a href="#" className="btn btn-flat display-block font-normal btn-danger">
                         <i className="glyph-icon icon-power-off" />
                         Logout
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
             </div>{/* #header-nav-left */}
             <div id="header-nav-right">
               <a href="#" className="hdr-btn popover-button" title="Search" data-placement="bottom" data-id="#popover-search">
                 <i className="glyph-icon icon-search" />
               </a>
               <div className="hide" id="popover-search">
                 <div className="pad5A box-md">
                   <div className="input-group">
                     <input type="text" className="form-control" placeholder="Search terms here ..." />
                     <span className="input-group-btn">
                       <a className="btn btn-primary" href="#">Search</a>
                     </span>
                   </div>
                 </div>
               </div>
               <div className="dropdown" id="dashnav-btn">
                 <a href="#" data-toggle="dropdown" data-placement="bottom" className="popover-button-header tooltip-button" title="Dashboard Quick Menu">
                   <i className="glyph-icon icon-linecons-cog" />
                 </a>
                 <div className="dropdown-menu float-left">
                   <div className="box-sm">
                     <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                       <a href="#" className="btn vertical-button hover-blue-alt" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-dashboard opacity-80 font-size-20" />
                         </span>
                         Dashboard
                       </a>
                       <a href="#" className="btn vertical-button hover-green" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-tags opacity-80 font-size-20" />
                         </span>
                         Widgets
                       </a>
                       <a href="#" className="btn vertical-button hover-orange" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-fire opacity-80 font-size-20" />
                         </span>
                         Tables
                       </a>
                       <a href="#" className="btn vertical-button hover-orange" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20" />
                         </span>
                         Charts
                       </a>
                       <a href="#" className="btn vertical-button hover-purple" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-laptop opacity-80 font-size-20" />
                         </span>
                         Buttons
                       </a>
                       <a href="#" className="btn vertical-button hover-azure" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-code opacity-80 font-size-20" />
                         </span>
                         Panels
                       </a>
                     </div>
                     <div className="divider" />
                     <div className="pad5T pad5B pad10L pad10R dashboard-buttons clearfix">
                       <a href="#" className="btn vertical-button remove-border btn-info" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-dashboard opacity-80 font-size-20" />
                         </span>
                         Dashboard
                       </a>
                       <a href="#" className="btn vertical-button remove-border btn-danger" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-tags opacity-80 font-size-20" />
                         </span>
                         Widgets
                       </a>
                       <a href="#" className="btn vertical-button remove-border btn-purple" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-fire opacity-80 font-size-20" />
                         </span>
                         Tables
                       </a>
                       <a href="#" className="btn vertical-button remove-border btn-azure" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-bar-chart-o opacity-80 font-size-20" />
                         </span>
                         Charts
                       </a>
                       <a href="#" className="btn vertical-button remove-border btn-yellow" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-laptop opacity-80 font-size-20" />
                         </span>
                         Buttons
                       </a>
                       <a href="#" className="btn vertical-button remove-border btn-warning" title>
                         <span className="glyph-icon icon-separator-vertical pad0A medium">
                           <i className="glyph-icon icon-code opacity-80 font-size-20" />
                         </span>
                         Panels
                       </a>
                     </div>
                   </div>
                 </div>
               </div>
               <a href="#" className="hdr-btn" id="fullscreen-btn" title="Fullscreen">
                 <i className="glyph-icon icon-arrows-alt" />
               </a>
               <a href="#" className="hdr-btn sb-toggle-left" id="chatbox-btn" title="Chat sidebar">
                 <i className="glyph-icon icon-linecons-paper-plane" />
               </a>
               <div className="dropdown" id="notifications-btn">
                 <a data-toggle="dropdown" href="#" title>
                   <span className="small-badge bg-yellow" />
                   <i className="glyph-icon icon-linecons-megaphone" />
                 </a>
                 <div className="dropdown-menu box-md float-left">
                   <div className="popover-title display-block clearfix pad10A">
                     Notifications
                     <a className="text-transform-cap font-primary font-normal btn-link float-right" href="#" title="View more options">
                       More options...
                     </a>
                   </div>
                   <div className="scrollable-content scrollable-slim-box">
                     <ul className="no-border notifications-box">
                       <li>
                         <span className="bg-danger icon-notification glyph-icon icon-bullhorn" />
                         <span className="notification-text">This is an error notification</span>
                         <div className="notification-time">
                           a few seconds ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-warning icon-notification glyph-icon icon-users" />
                         <span className="notification-text font-blue">This is a warning notification</span>
                         <div className="notification-time">
                           <b>15</b> minutes ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-green icon-notification glyph-icon icon-sitemap" />
                         <span className="notification-text font-green">A success message example.</span>
                         <div className="notification-time">
                           <b>2 hours</b> ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-azure icon-notification glyph-icon icon-random" />
                         <span className="notification-text">This is an error notification</span>
                         <div className="notification-time">
                           a few seconds ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-warning icon-notification glyph-icon icon-ticket" />
                         <span className="notification-text">This is a warning notification</span>
                         <div className="notification-time">
                           <b>15</b> minutes ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-blue icon-notification glyph-icon icon-user" />
                         <span className="notification-text font-blue">Alternate notification styling.</span>
                         <div className="notification-time">
                           <b>2 hours</b> ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-purple icon-notification glyph-icon icon-user" />
                         <span className="notification-text">This is an error notification</span>
                         <div className="notification-time">
                           a few seconds ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-warning icon-notification glyph-icon icon-user" />
                         <span className="notification-text">This is a warning notification</span>
                         <div className="notification-time">
                           <b>15</b> minutes ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-green icon-notification glyph-icon icon-user" />
                         <span className="notification-text font-green">A success message example.</span>
                         <div className="notification-time">
                           <b>2 hours</b> ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-purple icon-notification glyph-icon icon-user" />
                         <span className="notification-text">This is an error notification</span>
                         <div className="notification-time">
                           a few seconds ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                       <li>
                         <span className="bg-warning icon-notification glyph-icon icon-user" />
                         <span className="notification-text">This is a warning notification</span>
                         <div className="notification-time">
                           <b>15</b> minutes ago
                           <span className="glyph-icon icon-clock-o" />
                         </div>
                       </li>
                     </ul>
                   </div>
                   <div className="button-pane button-pane-alt pad5T pad5L pad5R text-center">
                     <a href="#" className="btn btn-flat btn-primary" title="View all notifications">
                       View all notifications
                     </a>
                   </div>
                 </div>
               </div>
               <div className="dropdown" id="progress-btn">
                 <a data-toggle="dropdown" href="#" title>
                   <span className="small-badge bg-azure" />
                   <i className="glyph-icon icon-linecons-params" />
                 </a>
                 <div className="dropdown-menu pad0A box-sm float-left" id="progress-dropdown">
                   <div className="scrollable-content scrollable-slim-box">
                     <ul className="no-border progress-box progress-box-links">
                       <li>
                         <a href="#" title>
                           <div className="progress-title">
                             Finishing uploading files
                             <b>23%</b>
                           </div>
                           <div className="progressbar-smaller progressbar" data-value={23}>
                             <div className="progressbar-value bg-blue-alt">
                               <div className="progressbar-overlay" />
                             </div>
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="#" title>
                           <div className="progress-title">
                             Roadmap progress
                             <b>91%</b>
                           </div>
                           <div className="progressbar-smaller progressbar" data-value={91}>
                             <div className="progressbar-value bg-red">
                               <div className="progressbar-overlay" />
                             </div>
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="#" title>
                           <div className="progress-title">
                             Images upload
                             <b>58%</b>
                           </div>
                           <div className="progressbar-smaller progressbar" data-value={58}>
                             <div className="progressbar-value bg-green" />
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="#" title>
                           <div className="progress-title">
                             WordPress migration
                             <b>74%</b>
                           </div>
                           <div className="progressbar-smaller progressbar" data-value={74}>
                             <div className="progressbar-value bg-purple" />
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="#" title>
                           <div className="progress-title">
                             Agile development procedures
                             <b>91%</b>
                           </div>
                           <div className="progressbar-smaller progressbar" data-value={91}>
                             <div className="progressbar-value bg-black">
                               <div className="progressbar-overlay" />
                             </div>
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="#" title>
                           <div className="progress-title">
                             Systems integration
                             <b>58%</b>
                           </div>
                           <div className="progressbar-smaller progressbar" data-value={58}>
                             <div className="progressbar-value bg-azure" />
                           </div>
                         </a>
                       </li>
                       <li>
                         <a href="#" title>
                           <div className="progress-title">
                             Code optimizations
                             <b>97%</b>
                           </div>
                           <div className="progressbar-smaller progressbar" data-value={97}>
                             <div className="progressbar-value bg-yellow" />
                           </div>
                         </a>
                       </li>
                     </ul>
                   </div>
                   <div className="button-pane button-pane-alt pad5A text-center">
                     <a href="#" className="btn btn-flat display-block font-normal hover-green" title="View all notifications">
                       View all notifications
                     </a>
                   </div>
                 </div>
               </div>
               <div className="dropdown" id="cloud-btn">
                 <a href="#" data-placement="bottom" className="tooltip-button sb-toggle-right" title="Statistics Sidebar">
                   <i className="glyph-icon icon-linecons-cloud" />
                 </a>
               </div>
             </div>{/* #header-nav-right */}
           </div>

   );
 }
}
export default DashBoardHeader;
