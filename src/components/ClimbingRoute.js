import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ClimbingRoute.css';

function ClimbingRoute(props) {
  const [ query, setQuery ] = useState('');
  const allWalls = props.props
  const location = useLocation()
  const wallKey = location.pathname.replace('/wall/','')
  const wallRoutes = allWalls[`${wallKey}`].climbs
  const routeNames = []
  wallRoutes.forEach((climb) => routeNames.push(climb.name)) // do this because computer is hard (fixes indexing issue with filter)
  const routes = wallRoutes.filter((obj) => {
    const inName = obj.name.toLowerCase().includes(query.toLowerCase())
    const inYDSGrade = obj.grades.yds.toLowerCase().includes(query.toLowerCase())
    const inFrenchGrade = obj.grades.french.toLowerCase().includes(query.toLowerCase())
    const inType = query.toLowerCase() in obj.type // this is a little jank but it works well enough, will search for 'sport', 'trad', 'aid' or 'tr'
    return inName || inYDSGrade || inFrenchGrade || inType }).map((route, index) => {
    return (
      <div className="RouteCard" key={route.name}>
          <img src={`${process.env.PUBLIC_URL}/images/wall6.jpg`} alt="placeholder" />
          <div className="RouteCardContent">
            <Link 
              className="ClimbingRoute-title"
              to={`/route/${wallKey}-${routeNames.indexOf(route.name)}-${(route.name).toLowerCase().split(' ').join('_')}`}
            >
              <h1>{route.name}</h1>
            </Link>
            <p>Grade: 
              {route.grades.yds ? <span>YDS - {route.grades.yds}</span> : ''}
              {route.grades.french ? <span>French - {route.grades.french}</span> : ''}
            </p>
          </div>
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