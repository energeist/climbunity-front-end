import React from 'react';
import { Link } from 'react-router-dom';
import animalCrackers from '../data/animal_crackers_wall.json';
import './ClimbingAreasList.css';
import ClimbingArea from './ClimbingArea';

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

function ClimbingAreaList() {
  return (
    <div className="ClimbingAreasList">
      <p>AREA LIST</p>
        <ClimbingArea />
        {/* <Link 
          className="ClimbingArea-title"
          to={`/area`}>
          Muir Valley
        </Link> */}
        {/* <p>Number of walls: 33</p> */}
    </div>
  )
}

console.log(animalCrackers.area_name);
console.log(animalCrackers.climbs);

export default ClimbingAreaList;