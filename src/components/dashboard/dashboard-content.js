import React, { Component } from 'react';
class DashBoardContent extends Component {
  render(){
    return(
      <div>
        <div id="page-title">
          <h2>Dashboard</h2>
          <p>The most complete user interface framework that can be used to create stunning admin dashboards and presentation websites.</p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-danger">
                  <span className="bs-badge badge-absolute">1</span>
                  <div className="tile-header">
                    Reach
                  </div>
                  <div className="tile-content-wrapper">
                    <i className="glyph-icon icon-file-photo-o" />
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-success">
                  <div className="tile-header">
                    Comments
                  </div>
                  <div className="tile-content-wrapper">
                    <i className="glyph-icon icon-desktop" />
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-info">
                  <span className="bs-badge badge-absolute">2</span>
                  <div className="tile-header">
                    Reviews
                  </div>
                  <div className="tile-content-wrapper">
                    <i className="glyph-icon icon-download" />
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" title="Example tile shortcut" className="tile-box tile-box-shortcut btn-warning">
                  <div className="tile-header">
                    Visitors
                  </div>
                  <div className="tile-content-wrapper">
                    <i className="glyph-icon icon-code-fork" />
                  </div>
                </a>
              </div>
            </div>
            <div className="panel mrg20T">
              <div className="panel-body">
                <h3 className="title-hero">
                  Weekly Sales
                </h3>
                <div className="example-box-wrapper">
                  <div id="data-example-1" className="mrg20B" style={{width: '100%', height: 300}} />
                </div>
              </div>
            </div>
            <div className="panel-layout">
              <div className="panel-box col-xs-6">
                <div className="panel-content bg-white">
                  <canvas id="icon-cloud" width={80} height={80} />
                </div>
                <div className="panel-content bg-black">
                  <div className="center-vertical">
                    <ul className="center-content nav nav-justified">
                      <li>
                        <h4>
                          <i className="glyph-icon font-green opacity-80 icon-chevron-down" />
                          7 º
                        </h4>
                        <p className="opacity-80 text-transform-upr font-size-11 mrg5T">Low</p>
                      </li>
                      <li>
                        <h4>
                          <i className="glyph-icon font-red opacity-80 icon-chevron-up" />
                          21 º
                        </h4>
                        <p className="opacity-80 text-transform-upr font-size-11 mrg5T">High</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="panel-box col-xs-6 bg-blue-alt">
                <div className="panel-content">
                  <h3>San Francisco</h3>
                  <h4 className="opacity-60">California</h4>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-body">
                <h3 className="title-hero">
                  Basic
                </h3>
                <div className="example-box-wrapper">
                  <table cellPadding={0} cellSpacing={0} border={0} className="table table-striped table-bordered" id="datatable-example">
                    <thead>
                      <tr>
                        <th>Browser</th>
                        <th>Platform(s)</th>
                        <th>Engine version</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="odd gradeX">
                        <td>Internet
                          Explorer 4.0</td>
                        <td>Win 95+</td>
                        <td className="center"> 4</td>
                      </tr>
                      <tr className="even gradeC">
                        <td>Internet
                          Explorer 5.0</td>
                        <td>Win 95+</td>
                        <td className="center">5</td>
                      </tr>
                      <tr className="odd gradeA">
                        <td>Internet
                          Explorer 5.5</td>
                        <td>Win 95+</td>
                        <td className="center">5.5</td>
                      </tr>
                      <tr className="even gradeA">
                        <td>Internet
                          Explorer 6</td>
                        <td>Win 98+</td>
                        <td className="center">6</td>
                      </tr>
                      <tr className="odd gradeA">
                        <td>Internet Explorer 7</td>
                        <td>Win XP SP2+</td>
                        <td className="center">7</td>
                      </tr>
                      <tr className="even gradeA">
                        <td>AOL browser (AOL desktop)</td>
                        <td>Win XP</td>
                        <td className="center">6</td>
                      </tr>
                      <tr className="gradeA">
                        <td>Firefox 1.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td className="center">1.7</td>
                      </tr>
                      <tr className="gradeA">
                        <td>Firefox 1.5</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td className="center">1.8</td>
                      </tr>
                      <tr className="gradeA">
                        <td>Firefox 2.0</td>
                        <td>Win 98+ / OSX.2+</td>
                        <td className="center">1.8</td>
                      </tr>
                      <tr className="gradeA">
                        <td>Firefox 3.0</td>
                        <td>Win 2k+ / OSX.3+</td>
                        <td className="center">1.9</td>
                      </tr>
                      <tr className="gradeA">
                        <td>Camino 1.0</td>
                        <td>OSX.2+</td>
                        <td className="center">1.8</td>
                      </tr>
                      <tr className="gradeA">
                        <td>Camino 1.5</td>
                        <td>OSX.3+</td>
                        <td className="center">1.8</td>
                      </tr>
                      <tr className="gradeU">
                        <td>All others</td>
                        <td>-</td>
                        <td className="center">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div></div></div>
            <div className="panel">
              <div className="panel-body">
                <h3 className="title-hero">
                  Alternate carousel
                </h3>
                <div className="example-box-wrapper">
                  <div className="owl-carousel-4 slider-wrapper inverse arrows-outside carousel-wrapper">
                    <div>
                      <div className="thumbnail-box-wrapper mrg5A">
                        <div className="thumbnail-box">
                          <a className="thumb-link" href="#" title />
                          <div className="thumb-content">
                            <div className="center-vertical">
                              <div className="center-content">
                                <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" />
                              </div>
                            </div>
                          </div>
                          <div className="thumb-overlay bg-black" />
                          <img src="../../assets/image-resources/stock-images/img-17.jpg" alt />
                        </div>
                        <div className="thumb-pane">
                          <h3 className="thumb-heading animated rollIn">
                            <a href="#" title>
                              Working in the morning
                            </a>
                            <small>12 March 2015</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumbnail-box-wrapper mrg5A">
                        <div className="thumbnail-box">
                          <a className="thumb-link" href="#" title />
                          <div className="thumb-content">
                            <div className="center-vertical">
                              <div className="center-content">
                                <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" />
                              </div>
                            </div>
                          </div>
                          <div className="thumb-overlay bg-black" />
                          <img src="../../assets/image-resources/stock-images/img-18.jpg" alt />
                        </div>
                        <div className="thumb-pane">
                          <h3 className="thumb-heading animated rollIn">
                            <a href="#" title>
                              Working in the morning
                            </a>
                            <small>12 March 2015</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumbnail-box-wrapper mrg5A">
                        <div className="thumbnail-box">
                          <a className="thumb-link" href="#" title />
                          <div className="thumb-content">
                            <div className="center-vertical">
                              <div className="center-content">
                                <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" />
                              </div>
                            </div>
                          </div>
                          <div className="thumb-overlay bg-black" />
                          <img src="../../assets/image-resources/stock-images/img-19.jpg" alt />
                        </div>
                        <div className="thumb-pane">
                          <h3 className="thumb-heading animated rollIn">
                            <a href="#" title>
                              Working in the morning
                            </a>
                            <small>12 March 2015</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumbnail-box-wrapper mrg5A">
                        <div className="thumbnail-box">
                          <a className="thumb-link" href="#" title />
                          <div className="thumb-content">
                            <div className="center-vertical">
                              <div className="center-content">
                                <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" />
                              </div>
                            </div>
                          </div>
                          <div className="thumb-overlay bg-black" />
                          <img src="../../assets/image-resources/stock-images/img-20.jpg" alt />
                        </div>
                        <div className="thumb-pane">
                          <h3 className="thumb-heading animated rollIn">
                            <a href="#" title>
                              Working in the morning
                            </a>
                            <small>12 March 2015</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumbnail-box-wrapper mrg5A">
                        <div className="thumbnail-box">
                          <a className="thumb-link" href="#" title />
                          <div className="thumb-content">
                            <div className="center-vertical">
                              <div className="center-content">
                                <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" />
                              </div>
                            </div>
                          </div>
                          <div className="thumb-overlay bg-black" />
                          <img src="../../assets/image-resources/stock-images/img-23.jpg" alt />
                        </div>
                        <div className="thumb-pane">
                          <h3 className="thumb-heading animated rollIn">
                            <a href="#" title>
                              Working in the morning
                            </a>
                            <small>12 March 2015</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="thumbnail-box-wrapper mrg5A">
                        <div className="thumbnail-box">
                          <a className="thumb-link" href="#" title />
                          <div className="thumb-content">
                            <div className="center-vertical">
                              <div className="center-content">
                                <i className="icon-helper icon-center animated zoomInUp font-white glyph-icon icon-linecons-camera" />
                              </div>
                            </div>
                          </div>
                          <div className="thumb-overlay bg-black" />
                          <img src="../../assets/image-resources/stock-images/img-24.jpg" alt />
                        </div>
                        <div className="thumb-pane">
                          <h3 className="thumb-heading animated rollIn">
                            <a href="#" title>
                              Working in the morning
                            </a>
                            <small>12 March 2015</small>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dashboard-box dashboard-box-chart bg-white content-box">
              <div className="content-wrapper">
                <div className="header">
                  8960
                  <span>Total Downloads<b> in last</b> 6 years</span>
                </div>
                <div className="bs-label bg-orange">~51%</div>
                <div className="center-div sparkline-big-alt">2210,2310,2010,2310,2123,2350</div>
                <div className="row list-grade">
                  <div className="col-md-2">2009</div>
                  <div className="col-md-2">2010</div>
                  <div className="col-md-2">2011</div>
                  <div className="col-md-2">2012</div>
                  <div className="col-md-2">2013</div>
                  <div className="col-md-2">2014</div>
                </div>
              </div>
              <div className="button-pane">
                <div className="size-md float-left">
                  <a href="#" title>
                    View more details
                  </a>
                </div>
                <a href="#" className="btn btn-primary float-right tooltip-button" data-placement="top" title="View details">
                  <i className="glyph-icon icon-caret-right" />
                </a>
              </div>
            </div>
            <div className="content-box">
              <h3 className="content-box-header bg-default">
                <i className="glyph-icon icon-cog" />
                Live server status
                <span className="header-buttons-separator">
                  <a href="#" className="icon-separator remove-button" data-animation="flipOutX">
                    <i className="glyph-icon icon-times" />
                  </a>
                </span>
              </h3>
              <div className="content-box-wrapper pad0A">
                <div className="mrg20A">
                  <div className="row">
                    <div className="col-md-7 center-margin pad0A">
                      <canvas id="chart-area" width={150} height={150} />
                    </div>
                  </div>
                </div>
                <table className="table remove-background">
                  <tbody>
                    <tr>
                      <td className="text-left size-sm">
                        <div className="badge mrg10L badge-small mrg5R bg-azure" />
                        New user registrations
                      </td>
                      <td className="text-right">
                        <a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag">
                          <i className="glyph-icon icon-flag" />
                        </a>
                        <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit">
                          <i className="glyph-icon icon-edit" />
                        </a>
                        <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove">
                          <i className="glyph-icon icon-remove" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left size-sm">
                        <div className="badge mrg10L badge-small mrg5R bg-orange" />
                        Returning visitors
                      </td>
                      <td className="text-right">
                        <a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag">
                          <i className="glyph-icon icon-flag" />
                        </a>
                        <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit">
                          <i className="glyph-icon icon-edit" />
                        </a>
                        <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove">
                          <i className="glyph-icon icon-remove" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-left size-sm">
                        <div className="badge mrg10L badge-small mrg5R bg-gray" />
                        Page views
                      </td>
                      <td className="text-right">
                        <a href="#" className="btn btn-sm hover-yellow tooltip-button" data-placement="top" title="Flag">
                          <i className="glyph-icon icon-flag" />
                        </a>
                        <a href="#" className="btn btn-sm hover-blue-alt tooltip-button" data-placement="top" title="Edit">
                          <i className="glyph-icon icon-edit" />
                        </a>
                        <a href="#" className="btn btn-sm hover-red tooltip-button" data-placement="top" title="Remove">
                          <i className="glyph-icon icon-remove" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="panel-layout">
                  <div className="panel-box">
                    <div className="panel-content bg-facebook">
                      <i className="glyph-icon font-size-35 icon-facebook" />
                    </div>
                    <div className="panel-content pad15A bg-white">
                      <div className="center-vertical">
                        <ul className="center-content list-group list-group-separator row mrg0A">
                          <li className="col-md-6">
                            <b>1,456</b>
                            <p className="font-gray">Friends</p>
                          </li>
                          <li className="col-md-6">
                            <b>593</b>
                            <p className="font-gray">Likes</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel-layout">
                  <div className="panel-box">
                    <div className="panel-content bg-twitter">
                      <i className="glyph-icon font-size-35 icon-twitter" />
                    </div>
                    <div className="panel-content pad15A bg-white">
                      <div className="center-vertical">
                        <ul className="center-content list-group list-group-separator row mrg0A">
                          <li className="col-md-6">
                            <b>356</b>
                            <p className="font-gray">Followers</p>
                          </li>
                          <li className="col-md-6">
                            <b>981</b>
                            <p className="font-gray">Tweets</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel">
              <div className="panel-body">
                <h3 className="title-hero">
                  Users activity
                </h3>
                <div className="example-box-wrapper">
                  <div className="timeline-box timeline-box-left">
                    <div className="tl-row">
                      <div className="tl-item float-right">
                        <div className="tl-icon bg-red">
                          <i className="glyph-icon icon-toggle-on" />
                        </div>
                        <div className="popover right">
                          <div className="arrow" />
                          <div className="popover-content">
                            <div className="tl-label bs-label label-info">Appointment</div>
                            <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. </p>
                            <div className="tl-time">
                              <i className="glyph-icon icon-clock-o" />
                              a few seconds ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tl-row">
                      <div className="tl-item float-right">
                        <div className="tl-icon bg-primary">
                          <i className="glyph-icon icon-wifi" />
                        </div>
                        <div className="popover right">
                          <div className="arrow" />
                          <div className="popover-content">
                            <div className="tl-label bs-label bg-yellow">Teleconference</div>
                            <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. </p>
                            <div className="tl-time">
                              <i className="glyph-icon icon-clock-o" />
                              a few seconds ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tl-row">
                      <div className="tl-item float-right">
                        <div className="tl-icon bg-black">
                          <i className="glyph-icon icon-headphones" />
                        </div>
                        <div className="popover right">
                          <div className="arrow" />
                          <div className="popover-content">
                            <div className="tl-label bs-label label-danger">Meeting</div>
                            <p className="tl-content">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. </p>
                            <div className="tl-time">
                              <i className="glyph-icon icon-clock-o" />
                              a few seconds ago
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default DashBoardContent;
