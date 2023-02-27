import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ClimbingRoute.css';

function ClimbingRoute(props) {
  const [ query, setQuery ] = useState('');
  const allWalls = props.props
  const location = useLocation()
  const wallKey = location.pathname.replace('/wall/','')
  const wallRoutes = allWalls[`${wallKey}`].climbs
  console.log(wallRoutes)
  const routes = wallRoutes.filter((obj) => {
    const inName = obj.name.toLowerCase().includes(query.toLowerCase())
    const inYDSGrade = obj.grades.yds.toLowerCase().includes(query.toLowerCase())
    return inName || inYDSGrade }).map((route, index) => {
    return (
      <div className="RouteCard" key={route.name}>
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
    <div className="RouteSearch">
      <form>
        <input
          value={query}
          placeholder="Search this page:"
          onChange={(evt) => setQuery(evt.target.value)}
        />
      </form>
      <div className="RouteList">
        {routes.length > 0 ? routes : "No results match your search"}
      </div>
    </div>
  )
}
export default ClimbingRoute;