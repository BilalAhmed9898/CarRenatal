import React from 'react';
import Icon from '../images/logo/logo.png';
import './CompApp.css';
import { Link } from 'react-router-dom'; // Import the Link component

function Navbar() {
  return (
    <div className='Container Container-p1'>
      <div className="icon">
        <img src={Icon} alt="" />
      </div>
      <ul className="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Model">Vehicle Model</Link></li>
        <li><Link to="/Testimonial">Testimonial</Link></li>
        <li><Link to="/Team">Our Team</Link></li>
        <li><Link to="/Contact">Contact</Link></li>

      </ul>
      <div className="Buttons">
        <p>SignIn</p>
        <button>Register</button>
      </div>
    </div>
  );
}

export default Navbar;
