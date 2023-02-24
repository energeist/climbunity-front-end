import React from 'react';
import animalCrackers from '../data/animal_crackers_wall.json';

import './ClimbingWall.css';

const context = require.context('../data', true, /.json$/);
const all = {};
const dataKeys = [];
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`../data/${fileName}`);
  const namespace = fileName.replace('.json', '');
  dataKeys.push(namespace);
  all[namespace] = JSON.parse(JSON.stringify(resource));
});

console.log(all.animal_crackers_wall);

console.log("keys");
console.log(dataKeys);

function ClimbingWall() {

  return (
    <div className="Wall">
      <h1>Climbing Areas</h1>
    </div>
  )
}

console.log(animalCrackers.area_name);
console.log(animalCrackers.climbs);

export default ClimbingWall;