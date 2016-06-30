import React, { Component } from 'react';
import Calorie from './calorie';
import Weight from './weight';
import NutrientAnalysisTable from './nutrient-analysis-table';
import EatfitRecord from './eatfit-record';
import MofitRecord from './mofit-record';

class DashBoard extends Component {
  render(){
    return(
      <div>
        DashBoard Content
        <div className="col-md-8">
          <div className="col-md-4">
            <Calorie />
          </div>
          <div className="col-md-4">
            <NutrientAnalysisTable />
          </div>
          <div className="col-md-4">
            <Weight />
          </div>
          <div className="col-md-6">
            <EatfitRecord />
          </div>
          <div className="col-md-6">
            <MofitRecord />
          </div>
        </div>
        <div className="col-md-4">
          
        </div>
      </div>
    );
  }
}
export default DashBoard;
