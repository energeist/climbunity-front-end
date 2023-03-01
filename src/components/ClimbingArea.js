import React from 'react';
import { Link } from 'react-router-dom';
import './ClimbingArea.css';

function ClimbingArea(props) {
  const {areaName, numWalls} = props
  return (
    <div className="ClimbingArea">
      <img src={`${process.env.PUBLIC_URL}/images/wall6.jpg`} alt="placeholder" />
      <div className="AreaCardContent">
        <Link 
          className="ClimbingArea-title"
          to={`/area/muir-valley`}>
          <h1>{areaName}</h1>
        </Link>
        Number of walls: {numWalls}
      </div>
    </div>
  )
}

export default ClimbingArea;