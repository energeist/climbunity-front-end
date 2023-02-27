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

// console.log("keys");
// console.log(dataKeys);

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

// dataKeys.forEach((key) => {
//   console.log(key)
//   console.log(all_walls[key].area_name)
//   all_walls[key].climbs.forEach((climb) => {
//     console.log(climb.name)
//     console.log(climb.yds)
//     console.log(climb.fa)
//     Object.keys(climb['type']).forEach((type) => {
//       console.log(type)
//     })
//   })
// })
// console.log(animalCrackers.area_name);
// console.log(animalCrackers.climbs);

export default ClimbingWall;