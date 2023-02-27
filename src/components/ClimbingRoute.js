import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ClimbingRoute.css';

function ClimbingRoute(props) {
  // console.log("allWalls in ClimbingRoute")
  const allWalls = props.props
  // console.log(allWalls)
  const location = useLocation()
  // console.log("location on this page")
  const wallKey = location.pathname.replace('/wall/','')
  // console.log(wallKey)
  // console.log("routes on this wall")
  const wallRoutes = allWalls[`${wallKey}`].climbs
  // console.log(wallRoutes)
  // console.log(wallRoutes[0].name)
  // console.log(wallRoutes[0].grades.yds)
  // console.log(wallRoutes[0].grades.french)
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
        {route.grades.yds ? <span>YDS: {route.grades.yds}</span> : ''}
        {route.grades.french ? <span>French: {route.grades.french}</span> : ''}
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