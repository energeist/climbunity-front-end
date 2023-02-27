import React from 'react';
import { Link } from 'react-router-dom';
import './ClimbingWall.css';

const context = require.context('../data', true, /.json$/);
const allWalls = {};
const dataKeys = [];
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`../data/${fileName}`);
  const namespace = fileName.replace('.json', '');
  dataKeys.push(namespace);
  allWalls[namespace] = JSON.parse(JSON.stringify(resource));
});

function ClimbingWall() {
  const walls = dataKeys.map((key) => {
    return (
      <div className="WallList" key={key}>
        <Link 
          className="ClimbingWall-title"
          to={`/wall/${key}`}
        >
          <h1>{allWalls[key].area_name}</h1>
        </Link>
        <p>Number of routes: {allWalls[key].totalClimbs}</p>
      </div>
    )
  })

  return (
    <div className="WallList">
      {walls.length > 0 ? walls : "No results match your search"}
    </div>
  )
}

export default ClimbingWall;