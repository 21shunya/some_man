import React from 'react';
import StaticInfo from './StaticInfo/StaticInfo';
import Activity from './Activity/Activity';


function App() {

  return (
    <div className='a'>
      <img className="el-1-1" src="el_1_1.svg" />
      <img className="el-1-2" src="el_1_2.svg" />
      <img className="el-2-1" src="el_2_1.svg" />
      <img className="el-2-2" src="el_2_2.svg" />
      <img className="el-3-1" src="el_3_1.svg" />
      <img className="el-3-2" src="el_3_2.svg" />
      <div className='a'></div>
      <div className="body-wrap">
        <StaticInfo />
        <Activity />
      </div>
    </div>
  );
}

export default App;
