import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './components/App';
import ClimbingAreasList from './components/ClimbingAreasList';
import ClimbingArea from './components/ClimbingWall';
import ClimbingWall from './components/ClimbingWall';
import ClimbingRoute from './components/ClimbingRoute';
import ClimbingRouteDetails from './components/ClimbingRouteDetails';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <title>Climbunity</title>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<ClimbingAreasList />} />
          <Route path="/area" element={<ClimbingArea />} />
          <Route path="/wall" element={<ClimbingRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/" element={<ClimbingRouteDetails />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
