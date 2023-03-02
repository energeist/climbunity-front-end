import React, { useState } from 'react';
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
  const [ query, setQuery ] = useState('');
  const allWalls = props.props;
  const wallKeys = Object.keys(allWalls);
  const areas = redRiverGorge.filter((obj) => {
    const inName = obj.toLowerCase().includes(query.toLowerCase())
  return inName }).map((area) => {
    return <ClimbingArea areaName={area} key={area} numWalls={wallKeys.length} path={'muir_valley'} data={allWalls}/>
  })
  
  return (
    <div className="RouteSearch">
      <form>
        <input
          value={query}
          placeholder="Search areas in the Red River Gorge:"
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </form>
      <div className="ClimbingAreasList">
        { areas.length > 0 ? areas : "No results match your search" }
      </div>
    </div>
  );
}

export default ClimbingAreaList;