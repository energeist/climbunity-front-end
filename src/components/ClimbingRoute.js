import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ClimbingRoute.css';

function ClimbingRoute(props) {
  const allWalls = props.props
  const location = useLocation()
  const wallKey = location.pathname.replace('/wall/','')
  const wallRoutes = allWalls[`${wallKey}`].climbs
  let routes = wallRoutes.map((route, index) => {
    return (
      <div className="routeList" key={route.name}>
        <Link 
          className="ClimbingRoute-title"
          to={`/route/${wallKey}-${index}-${(route.name).toLowerCase().split(' ').join('_')}`}
        >
          <h1>{route.name}</h1>
        </Link>
        <p>Grade: 
        {route.grades.yds ? <span>YDS - {route.grades.yds}</span> : ''}
        {route.grades.french ? <span>French - {route.grades.french}</span> : ''}
        </p>
      </div>
    )
  })

  return (
    <div className="routeList">
      {routes.length > 0 ? routes : "No results match your search"}
    </div>
  )
}
export default ClimbingRoute;