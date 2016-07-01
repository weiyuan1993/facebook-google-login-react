
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
        <Calorie />
        <NutrientAnalysisTable />
        <Weight />
        <EatfitRecord />
        <MofitRecord />
      </div>
    );
  }
}
export default DashBoard;
