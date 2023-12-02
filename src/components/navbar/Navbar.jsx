// Navbar.js

import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/Request';
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currentUser = JSON.parse(localStorage.getItem("DMEUser"))
  const handleLogout = async (e) => {
    try {
      await newRequest.post("auth/logout")
      localStorage.setItem("DMEUser", null)
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <nav className="navbar">
      <div className="brand">
        <img src='dmetronic.jpeg' alt='' />
        <div className="vertical-line"></div>
        <div>DMETRONIC</div>
      </div>
      <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <Link to={'/'}> <li>Home</li></Link>
        <Link to={'/softwarepage'}> <li>SoftwareServices</li></Link>
        <Link to={'/hardware'}><li>Hardware</li></Link>
        <Link to={'wiringdiagram'}><li>WiringDiagram</li></Link>
        <Link to={'/pinout'}><li>PinOut</li></Link>
        <Link to={'/tutorials'}><li>Tutorials </li></Link>
        <Link to={'downloads'}><li>Downloads</li></Link>
        <Link to={'upload'}><li>Uploads</li></Link>
        {currentUser ?
          (
            <>

              <Link><FaShoppingCart className='shopicon' /> </Link>
              <Link to={''}><li>{currentUser.username}</li></Link>
              <Link onClick={handleLogout}><li>logout</li></Link>
            </>)
          :
          (
            <>
              <Link to={'register'}><li>register</li></Link>
              <Link to={'login'}><li>login</li></Link>
            </>)
        }
      </ul>
    </nav>
  );
};

export default Navbar;
