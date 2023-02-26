import React from 'react';
// import { useParams } from 'react-router';
import './ClimbingRouteDetails.css';

function ClimbingRouteDetails(props) {
  console.log("allWalls in ClimbingRouteDetails")
  const allWalls = props.props
  console.log(allWalls)
  // const params = useParams();
  // const { id } = params;// Location index
  // const { images, name, desc, hours, geo } = data[id];

  return (
    <div className="ClimbingRouteDetails">
      <div className="ClimbingRouteDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/no_image.jpeg`} alt="placeholder"/>
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