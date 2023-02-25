import React from 'react';
import './Header.css';
import logo from './logo-no-background.png';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      <header>
        <img src={logo} alt="Climbunity Logo" />
        <div className='Header-Subtitle'>
          Local climbing area information
        </div>
        <div className="Header-Buttons">
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/"
            >
              Climbing Areas
          </NavLink>
          <NavLink 
            className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
            to="/about"
            >
              About Climbunity
          </NavLink>
        </div>
      </header>
    </div>
  )
}

export default Header;