import React from 'react';
import { useParams } from 'react-router';
import './ClimbingRouteDetails.css';

// const context = require.context('../data', true, /.json$/);
// const all_walls = {};
// const dataKeys = [];
// context.keys().forEach((key) => {
//   const fileName = key.replace('./', '');
//   const resource = require(`../data/${fileName}`);
//   const namespace = fileName.replace('.json', '');
//   dataKeys.push(namespace);
//   all_walls[namespace] = JSON.parse(JSON.stringify(resource));
// });

function ClimbingRouteDetails(props) {
  // const params = useParams();
  // const { id } = params;// Location index
  // const { images, title, desc, hours, geo } = data[id];

  return (
    <div className="ClimbingRouteDetails">
      <div className="ClimbingRouteDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/no_image`} alt="placeholder"/>
      </div>
      <div className="ClimbingRouteDetails-info">
        <h1 className="ClimbingRouteDetails-name">climb.name</h1>
        <p className="ClimbingRouteDetails-grade">climb.grade.yds climb.grade.fr</p>
        <p className="ClimbingRouteDetails-grade">climb.type[0], climb.type[1]</p>
        <p className="ClimbingRouteDetails-desc">climb.content.description</p>
        <p className="ClimbingRouteDetails-geo"><em>lat: </em>lat <em>lon: </em>lon</p>
        <p className="ClimbingRouteDetails-fa">climb.fa</p>
      </div>
    </div>
  )
}

export default ClimbingRouteDetails;