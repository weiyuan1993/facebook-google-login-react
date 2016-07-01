import React, { Component } from 'react';
class DashBoardSlideBar extends Component {
  render(){
    return(
      <div>
          <div className="sb-slidebar bg-black sb-left sb-style-overlay">
            <div className="scrollable-content scrollable-slim-sidebar">
              <div className="pad10A">
                <div className="divider-header">Online</div>
                <ul className="chat-box">
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial1.jpg" alt />
                      <div className="small-badge bg-green" />
                    </div>
                    <b>
                      Grace Padilla
                    </b>
                    <p>On the other hand, we denounce...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial2.jpg" alt />
                      <div className="small-badge bg-green" />
                    </div>
                    <b>
                      Carl Gamble
                    </b>
                    <p>Dislike men who are so beguiled...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial3.jpg" alt />
                      <div className="small-badge bg-green" />
                    </div>
                    <b>
                      Michael Poole
                    </b>
                    <p>Of pleasure of the moment, so...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial4.jpg" alt />
                      <div className="small-badge bg-green" />
                    </div>
                    <b>
                      Bill Green
                    </b>
                    <p>That they cannot foresee the...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial5.jpg" alt />
                      <div className="small-badge bg-green" />
                    </div>
                    <b>
                      Cheryl Soucy
                    </b>
                    <p>Pain and trouble that are bound...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                </ul>
                <div className="divider-header">Idle</div>
                <ul className="chat-box">
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial6.jpg" alt />
                      <div className="small-badge bg-orange" />
                    </div>
                    <b>
                      Jose Kramer
                    </b>
                    <p>Equal blame belongs to those...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial7.jpg" alt />
                      <div className="small-badge bg-orange" />
                    </div>
                    <b>
                      Dan Garcia
                    </b>
                    <p>Weakness of will, which is same...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial8.jpg" alt />
                      <div className="small-badge bg-orange" />
                    </div>
                    <b>
                      Edward Bridges
                    </b>
                    <p>These cases are perfectly simple...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                </ul>
                <div className="divider-header">Offline</div>
                <ul className="chat-box">
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial1.jpg" alt />
                      <div className="small-badge bg-red" />
                    </div>
                    <b>
                      Randy Herod
                    </b>
                    <p>In a free hour, when our power...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                  <li>
                    <div className="status-badge">
                      <img className="img-circle" width={40} src="../../assets/image-resources/people/testimonial2.jpg" alt />
                      <div className="small-badge bg-red" />
                    </div>
                    <b>
                      Patricia Bagley
                    </b>
                    <p>when nothing prevents our being...</p>
                    <a href="#" className="btn btn-md no-border radius-all-100 btn-black"><i className="glyph-icon icon-comments-o" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="sb-slidebar bg-black sb-right sb-style-overlay">
            <div className="scrollable-content scrollable-slim-sidebar">
              <div className="pad15A">
                <a href="#" title data-toggle="collapse" data-target="#sidebar-toggle-1" className="popover-title">
                  Cloud status
                  <span className="caret" />
                </a>
                <div id="sidebar-toggle-1" className="collapse in">
                  <div className="pad15A">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="text-center font-gray pad5B text-transform-upr font-size-12">New visits</div>
                        <div className="chart-alt-3 font-gray-dark" data-percent={55}><span>55</span>%</div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center font-gray pad5B text-transform-upr font-size-12">Bounce rate</div>
                        <div className="chart-alt-3 font-gray-dark" data-percent={46}><span>46</span>%</div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center font-gray pad5B text-transform-upr font-size-12">Server load</div>
                        <div className="chart-alt-3 font-gray-dark" data-percent={92}><span>92</span>%</div>
                      </div>
                    </div>
                    <div className="divider mrg15T mrg15B" />
                    <div className="text-center">
                      <a href="#" className="btn center-div btn-info mrg5T btn-sm text-transform-upr updateEasyPieChart">
                        <i className="glyph-icon icon-refresh" />
                        Update charts
                      </a>
                    </div>
                  </div>
                </div>
                <div className="clear" />
                <a href="#" title data-toggle="collapse" data-target="#sidebar-toggle-6" className="popover-title">
                  Latest transfers
                  <span className="caret" />
                </a>
                <div id="sidebar-toggle-6" className="collapse in">
                  <ul className="files-box">
                    <li>
                      <i className="files-icon glyph-icon font-red icon-file-archive-o" />
                      <div className="files-content">
                        <b>blog_export.zip</b>
                        <div className="files-date">
                          <i className="glyph-icon icon-clock-o" />
                          added on <b>22.10.2014</b>
                        </div>
                      </div>
                      <div className="files-buttons">
                        <a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download">
                          <i className="glyph-icon icon-cloud-download" />
                        </a>
                        <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete">
                          <i className="glyph-icon icon-times" />
                        </a>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <i className="files-icon glyph-icon icon-file-code-o" />
                      <div className="files-content">
                        <b>homepage-test.html</b>
                        <div className="files-date">
                          <i className="glyph-icon icon-clock-o" />
                          added  <b>19.10.2014</b>
                        </div>
                      </div>
                      <div className="files-buttons">
                        <a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download">
                          <i className="glyph-icon icon-cloud-download" />
                        </a>
                        <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete">
                          <i className="glyph-icon icon-times" />
                        </a>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <i className="files-icon glyph-icon font-yellow icon-file-image-o" />
                      <div className="files-content">
                        <b>monthlyReport.jpg</b>
                        <div className="files-date">
                          <i className="glyph-icon icon-clock-o" />
                          added on <b>10.9.2014</b>
                        </div>
                      </div>
                      <div className="files-buttons">
                        <a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download">
                          <i className="glyph-icon icon-cloud-download" />
                        </a>
                        <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete">
                          <i className="glyph-icon icon-times" />
                        </a>
                      </div>
                    </li>
                    <li className="divider" />
                    <li>
                      <i className="files-icon glyph-icon font-green icon-file-word-o" />
                      <div className="files-content">
                        <b>new_presentation.doc</b>
                        <div className="files-date">
                          <i className="glyph-icon icon-clock-o" />
                          added on <b>5.9.2014</b>
                        </div>
                      </div>
                      <div className="files-buttons">
                        <a href="#" className="btn btn-xs hover-info tooltip-button" data-placement="left" title="Download">
                          <i className="glyph-icon icon-cloud-download" />
                        </a>
                        <a href="#" className="btn btn-xs hover-danger tooltip-button" data-placement="left" title="Delete">
                          <i className="glyph-icon icon-times" />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="clear" />
                <a href="#" title data-toggle="collapse" data-target="#sidebar-toggle-3" className="popover-title">
                  Tasks for today
                  <span className="caret" />
                </a>
                <div id="sidebar-toggle-3" className="collapse in">
                  <ul className="progress-box">
                    <li>
                      <div className="progress-title">
                        New features development
                        <b>87%</b>
                      </div>
                      <div className="progressbar-smaller progressbar" data-value={87}>
                        <div className="progressbar-value bg-azure">
                          <div className="progressbar-overlay" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="progress-title">
                        Finishing uploading files
                        <b>66%</b>
                      </div>
                      <div className="progressbar-smaller progressbar" data-value={66}>
                        <div className="progressbar-value bg-red">
                          <div className="progressbar-overlay" />
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="progress-title">
                        Creating tutorials
                        <b>58%</b>
                      </div>
                      <div className="progressbar-smaller progressbar" data-value={58}>
                        <div className="progressbar-value bg-blue-alt" />
                      </div>
                    </li>
                    <li>
                      <div className="progress-title">
                        Frontend bonus theme
                        <b>74%</b>
                      </div>
                      <div className="progressbar-smaller progressbar" data-value={74}>
                        <div className="progressbar-value bg-purple" />
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="clear" />
                <a href="#" title data-toggle="collapse" data-target="#sidebar-toggle-4" className="popover-title">
                  Pending notifications
                  <span className="bs-label bg-orange tooltip-button" title="Label example">New</span>
                  <span className="caret" />
                </a>
                <div id="sidebar-toggle-4" className="collapse in">
                  <ul className="notifications-box notifications-box-alt">
                    <li>
                      <span className="bg-purple icon-notification glyph-icon icon-users" />
                      <span className="notification-text">This is an error notification</span>
                      <div className="notification-time">
                        a few seconds ago
                        <span className="glyph-icon icon-clock-o" />
                      </div>
                      <a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details">
                        <i className="glyph-icon icon-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <span className="bg-warning icon-notification glyph-icon icon-ticket" />
                      <span className="notification-text">This is a warning notification</span>
                      <div className="notification-time">
                        <b>15</b> minutes ago
                        <span className="glyph-icon icon-clock-o" />
                      </div>
                      <a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details">
                        <i className="glyph-icon icon-arrow-right" />
                      </a>
                    </li>
                    <li>
                      <span className="bg-green icon-notification glyph-icon icon-random" />
                      <span className="notification-text font-green">A success message example.</span>
                      <div className="notification-time">
                        <b>2 hours</b> ago
                        <span className="glyph-icon icon-clock-o" />
                      </div>
                      <a href="#" className="notification-btn btn btn-xs btn-black tooltip-button" data-placement="left" title="View details">
                        <i className="glyph-icon icon-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
export default DashBoardSlideBar;
