import React from 'react';
import './ClimbingAreasList.css';
import ClimbingArea from './ClimbingArea';

function ClimbingAreaList(props) {
  const allWalls = props.props
  const wallKeys = Object.keys(allWalls)
  return (
    <div className="ClimbingAreasList">
        {/* hardcoded for now, might expand data out later */}
        <ClimbingArea areaName={'Muir Valley'} numWalls={wallKeys.length} path={'muir_valley'} data={allWalls}/>
        <ClimbingArea areaName={'Also Muir Valley'} numWalls={0}/>
    </div>
  )
}

export default ClimbingAreaList;