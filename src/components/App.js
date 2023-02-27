import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App(props) {
  // console.log("allWalls in App")
  const allWalls = props.props
  // console.log(allWalls)
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
