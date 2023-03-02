import React from 'react';
import './Header.css';
import logo from './logo-no-background.png';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';

function Header() {
  const handleClick = () => {
    navigate(-1);
  };
  const location = useLocation()
  const navigate = useNavigate()
  console.log(location.pathname)
  return (
    <div className='Header'>
      <header>
        <img src={logo} alt="Climbunity Logo" />
        <div className='Header-Subtitle'>
          Climbing in the Red River Gorge
        </div>
        <div className="Header-Buttons">
          <div>
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
            { location.pathname === '/' ? '' :
              <NavLink 
                className="nav-link"
                onClick={handleClick}
                >
                  Go Back
              </NavLink>
            }
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;