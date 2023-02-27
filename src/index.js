import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';
import ClimbingAreasList from './components/ClimbingAreasList';
import ClimbingWall from './components/ClimbingWall';
import ClimbingRoute from './components/ClimbingRoute';
import ClimbingRouteDetails from './components/ClimbingRouteDetails';
import About from './components/About';

const context = require.context('./data', true, /.json$/);
const allWalls = {};
const dataKeys = [];
context.keys().forEach((key) => {
  const fileName = key.replace('./', '');
  const resource = require(`./data/${fileName}`);
  const namespace = fileName.replace('.json', '');
  dataKeys.push(namespace);
  allWalls[namespace] = JSON.parse(JSON.stringify(resource));
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <title>Climbunity</title>
    <Router>
      <Routes>
        <Route path="/" element={<App props={allWalls}/>}>
          <Route path="/" element={<ClimbingAreasList props={allWalls}/>} />
          <Route path="/area/:id" element={<ClimbingWall props={allWalls}/>} />
          <Route path="/wall/:id" element={<ClimbingRoute props={allWalls}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/route/:id" element={<ClimbingRouteDetails props={allWalls}/>} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
