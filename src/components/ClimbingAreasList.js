import React from 'react';
import './ClimbingAreasList.css';
import ClimbingArea from './ClimbingArea';

const redRiverGorge = [
  "Muir Valley", 
  "Bald Rock Fork Recreational Preserve",
  "Cathedral Domain Climbing Area",
  "Miller Fork Recreational Preserve",
  "Natural Bridge Region",
  "Northern Gorge",
  "Pendergrass Murray Recreational Preserve",
  "Southern Region Crags"
];

// All routes attach to Muir Valley, a future improvement will be to incorporate ALL data for the Red River Gorge area

function ClimbingAreaList(props) {
  const allWalls = props.props;
  const wallKeys = Object.keys(allWalls);
  return (
    <div className="ClimbingAreasList">
      {
        redRiverGorge.map((area) => {
          return <ClimbingArea areaName={area} key={area} numWalls={wallKeys.length} path={'muir_valley'} data={allWalls}/>
        })
      }
    </div>
  );
}

export default ClimbingAreaList;