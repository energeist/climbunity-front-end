import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ClimbingWall.css';

function ClimbingWall(props) {
  const [ query, setQuery ] = useState('');
  const allWalls = props.props
  const dataKeys = Object.keys(allWalls)
  console.log("dataKeys")
  console.log(dataKeys)
  const data = Object.values(allWalls)
  const walls = data.filter((obj) => {
    const inName = obj.area_name.toLowerCase().includes(query.toLowerCase())
    return inName }).map((wall) => {
    return (
      <div className="WallList" key={wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()}>
        <Link 
          className="ClimbingWall-title"
          to={`/wall/${wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()}`}
        >
          <h1>{allWalls[wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()].area_name}</h1>
        </Link>
        <p>Number of routes: {allWalls[wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()].totalClimbs}</p>
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
      <div className="WallList">
        {walls.length > 0 ? walls : "No results match your search"}
      </div>
    </div>
  )
}

export default ClimbingWall;