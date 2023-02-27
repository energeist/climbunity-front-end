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
  const filterWalls = data.filter((obj) => {
    const inNamee = obj.area_name.toLowerCase().includes(query.toLowerCase())
    return inNamee }).map((wall) => { return console.log(wall.area_name.replaceAll(',','').replaceAll("'",'').split(' ').join('_').toLowerCase())
  })
  // const wallSearch = allWalls.filter((obj) => {
  //   const inName = obj.name.toLowerCase().includes(query.toLowerCase())
  //   return inName }).map((key) => {return console.log(key)})
  // console.log(wallSearch)
  const walls = dataKeys.filter((obj) => {
    const inName = true
    return inName }).map((key) => {
    return (
      <div className="WallList" key={key}>
        <Link 
          className="ClimbingWall-title"
          to={`/wall/${key}`}
        >
          <h1>{allWalls[key].area_name}</h1>
        </Link>
        <p>Number of routes: {allWalls[key].totalClimbs}</p>
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