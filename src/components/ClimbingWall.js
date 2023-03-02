import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ClimbingWall.css';

function ClimbingWall(props) {
  const [ query, setQuery ] = useState('');
  const allWalls = props.props
  const data = Object.values(allWalls)
  const walls = data.filter((obj) => {
    const inName = obj.area_name.toLowerCase().includes(query.toLowerCase())
    return inName }).map((wall) => {
    return (
      <div className="WallCard" key={wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join
      ('_').toLowerCase()} >
        <img src={`${process.env.PUBLIC_URL}/images/wall${wall.area_name.length%7}.jpg`} alt="placeholder" />
        <div className="WallCardContent">
          <Link 
            className="ClimbingWall-title"
            to={`/wall/${wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()}`}
            >
            <h1>{allWalls[wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()].area_name}</h1>
          </Link>
          <p>Number of routes: {allWalls[wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase()].totalClimbs}</p>
        </div>
      </div>
    )
  })

  return (
    <div className="RouteSearch">
      <form>
        <input
          value={query}
          placeholder="Search walls by name:"
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