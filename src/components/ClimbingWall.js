import React from 'react';
// import animalCrackers from '../data/animal_crackers_wall.json';

import './ClimbingWall.css';

const context = require.context('../data', true, /.json$/);
const all_walls = {};
const dataKeys = [];
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`../data/${fileName}`);
  const namespace = fileName.replace('.json', '');
  dataKeys.push(namespace);
  all_walls[namespace] = JSON.parse(JSON.stringify(resource));
});

console.log("keys");
console.log(dataKeys);

function ClimbingWall() {
  console.log("all walls")
  console.log(all_walls)
  console.log("data keys")
  console.log(dataKeys)

  const walls = dataKeys.map((key) => {
    return (
      <div>
        <h1>{all_walls[key].area_name}</h1>
        <p>Number of routes: {all_walls[key].totalClimbs}</p>
      </div>
    )
  })
  
  return (
    <div className="Wall">
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