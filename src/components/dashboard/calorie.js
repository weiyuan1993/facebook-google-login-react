import React, { Component } from 'react';
class Calorie extends Component {
  render(){
    return(
      <div class="panel">
          <div class="panel-body">
      <div class="example-box-wrapper">
        <div class="row">
          <div className="col-md-4">
              <a href="#" title="Example tile shortcut" className="tile-box tile-box-alt btn-primary">
                  <div className="tile-header">
                      目標卡路里
                  </div>
                  <div className="tile-content-wrapper">
                      <div className="chart-alt-10" data-percent="21"><span>21</span>%</div>
                  </div>
              </a>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Calorie;
