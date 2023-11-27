// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">
        <img src='dmetronic.jpeg' alt=''/>
      <div className="vertical-line"></div>
       <div>DMETRONIC</div> 
        </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
      <Link  to={'/'}> <li>Home</li></Link>
       <Link to={'/softwarepage'}> <li>SoftwareServices</li></Link>
        <Link  to={'/hardware'}><li>Hardware</li></Link>
        <Link  to={'wiringdiagram'}><li>WiringDiagram</li></Link>
        <Link  to={'/pinout'}><li>PinOut</li></Link>
        <Link  to={'/tutorials'}><li>Tutorials </li></Link>
        <Link  to={'downloads'}><li>Downloads</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;
