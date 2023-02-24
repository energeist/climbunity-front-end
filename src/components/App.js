import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import ClimbingWall from './ClimbingWall';

function App() {
  return (
    <div className="App">
      <Header />
      <ClimbingWall />
      <Footer />
    </div>
  );
}

export default App;
