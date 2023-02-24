import React from 'react';
import './ClimbingRoute.css';

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

function ClimbingRoute(props) {
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
export default ClimbingRoute;