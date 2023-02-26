import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './ClimbingRoute.css';

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

function ClimbingRoute(props) {
  console.log("allWalls in ClimbingRoute")
  const allWalls = props.props
  console.log(allWalls)
  const location = useLocation()
  console.log("location on this page")
  const wallKey = location.pathname.replace('/wall/','')
  console.log(wallKey)
  console.log("routes on this wall")
  const wallRoutes = allWalls[`${wallKey}`].climbs
  console.log(wallRoutes)
  console.log(wallRoutes[0].name)
  console.log(wallRoutes[0].grades.yds)
  console.log(wallRoutes[0].grades.french)
  let routes = wallRoutes.map((route) => {
    return (
      <div className="routeList" key={route}>
        <p>CLIMBING ROUTE</p>
        <Link 
          className="ClimbingRoute-title"
          to={`/route/${route.name}`}
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
// }
  //   return (
  //     <div>
  //       <h1>{all_walls[key].area_name}</h1>
  //       <p>Number of routes: {all_walls[key].totalClimbs}</p>
  //     </div>

  //     <div>
  //       <p>CLIMBING ROUTE</p>
  //       <Link
  //         className="ClimbingRoute-title"
  //         to={`/route/route-name`}
  //       >
  //         <h1>Route</h1>
  //       </Link>
  //       <p>grade, types</p>
  //     </div>
  //   )
  // })
  
  // return (
  //   <div className="ClimbingRoute">
  //     {walls.length > 0 ? walls : "No results match your search"}
  //   </div>
  // )
}
export default ClimbingRoute;