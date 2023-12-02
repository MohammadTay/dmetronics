// Footer.js

import React from 'react';
import './Footer.css';
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <p>Email: contact@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h2>Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <FaFacebookSquare />
              <FaInstagramSquare />
              <FaSquareXTwitter />
              <FaTiktok />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
