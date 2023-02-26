import React from 'react';
import './ClimbingAreasList.css';
import ClimbingArea from './ClimbingArea';

// console.log(all.animal_crackers_wall);
// console.log("keys");
// console.log(dataKeys);

function ClimbingAreaList(props) {
  console.log("allWalls in ClimbingAreaList ")
  const allWalls = props.props
  const wallKeys = Object.keys(allWalls)
  console.log(wallKeys.length)
  console.log(allWalls)
  return (
    <div className="ClimbingAreasList">
      <p>AREA LIST</p>
        {/* hardcoded for now, might expand data out later */}
        <ClimbingArea areaName={'Muir Valley'} numWalls={wallKeys.length} path={'muir_valley'} data={allWalls}/>
        <ClimbingArea areaName={'Not Muir Valley'} numWalls={0}/>
    </div>
  )
}

export default ClimbingAreaList;