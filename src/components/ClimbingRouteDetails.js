import React from 'react';
import { useLocation } from 'react-router-dom';
// import { useParams } from 'react-router';
import './ClimbingRouteDetails.css';

function ClimbingRouteDetails(props) {
  
  // const params = useParams();
  // const { id } = params;// Location index
  // const { images, name, desc, hours, geo } = data[id];
  
  const location = useLocation()
  const wallKey = location.pathname.replace('/route/','').split('-')[0]
  const routeKey = location.pathname.replace('/route/','').split('-')[1]
  const currentRoute = props.props[`${wallKey}`].climbs[routeKey]
  console.log(Object.keys(currentRoute.type)[0])
  return (
    <div className="ClimbingRouteDetails">
      <div className="ClimbingRouteDetails-image">
        <img src={`${process.env.PUBLIC_URL}/images/no_image.jpeg`} alt="placeholder"/>
      </div>
      <div className="ClimbingRouteDetails-info">
        <h1 className="ClimbingRouteDetails-name">{currentRoute.name}</h1>
        <p className="ClimbingRouteDetails-grade">Grade: 
          {currentRoute.grades.yds ? <span> YDS - {currentRoute.grades.yds} | </span> : ''}  
          {currentRoute.grades.french ? <span>French - {currentRoute.grades.french}</span> : ''} 
        </p>
        <p className="ClimbingRouteDetails-grade">Route type(s): {Object.keys(currentRoute.type)
          .map((type)=>{
            return(
             <span>{type}</span> 
            )
          })}</p>
        <p className="ClimbingRouteDetails-desc">Description: {currentRoute.content.description}</p>
        <p className="ClimbingRouteDetails-desc">Location: {currentRoute.content.location}</p>
        <p className="ClimbingRouteDetails-desc">Protection: {currentRoute.content.protection}</p>
        <p className="ClimbingRouteDetails-geo"><em>lat: </em>{currentRoute.metadata.lnglat.coordinates[1]} <em>lon: </em>{currentRoute.metadata.lnglat.coordinates[0]}</p>
        <p className="ClimbingRouteDetails-fa">First Ascent By: {currentRoute.fa}</p>
      </div>
    </div>
  )
}

export default ClimbingRouteDetails;