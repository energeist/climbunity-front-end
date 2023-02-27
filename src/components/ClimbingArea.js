import React from 'react';
import { Link } from 'react-router-dom';
import './ClimbingAreasList.css';

function ClimbingArea(props) {
  const {areaName, numWalls, path} = props
  // console.log("allWalls in ClimbingArea")
  return (
    <div className="ClimbingAreas">
        <Link 
          className="ClimbingArea-title"
          to={`/area/muir-valley`}>
          <h1>{areaName}</h1>
        </Link>
        Number of walls: {numWalls}
    </div>
  )
}

export default ClimbingArea;