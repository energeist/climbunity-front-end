import React from 'react';
import { Link } from 'react-router-dom';
import animalCrackers from '../data/animal_crackers_wall.json';
import './ClimbingAreasList.css';

// const context = require.context('../data', true, /.json$/);
// const all = {};
// const dataKeys = [];
// context.keys().forEach((key) => {
//   const fileName = key.replace('./', '');
//   const resource = require(`../data/${fileName}`);
//   const namespace = fileName.replace('.json', '');
//   dataKeys.push(namespace);
//   all[namespace] = JSON.parse(JSON.stringify(resource));
// });

// console.log(all.animal_crackers_wall);
// console.log("keys");
// console.log(dataKeys);

function ClimbingArea() {
  return (
    <div className="ClimbingAreas">
      <p>CLIMBING AREA</p>
        <Link 
          className="ClimbingArea-title"
          to={`/area`}>
          <h1>Muir Valley</h1>
        </Link>
        Number of walls: 33
    </div>
  )
}

console.log(animalCrackers.area_name);
console.log(animalCrackers.climbs);

export default ClimbingArea;