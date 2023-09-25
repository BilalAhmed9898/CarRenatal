import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import Icon from '../images/logo/logo.png';
import './CompApp.css';
import { Link } from 'react-router-dom';

function Navbar() {

  const [isMenuActive, setIsMenuActive] = useState(false);

  // Define the toggleMenu function
  const toggleMenu = () => {
    setIsMenuActive(!isMenuActive);
  };

  // Define the handleClose function
  const handleClose = () => {
    setIsMenuActive(false); // Close the menu when the close icon is clicked
  };
  useEffect(() => {

  }, [])



  const navbarClassName = `navbar ${isMenuActive ? 'active' : ''}`;
  return (
    <div className='Container Container-p1'>
      <div className="icon">
        <img src={Icon} alt="" />
      </div>
      <ul className={navbarClassName}>
        <li><HiX size={30} className='mobile' color='red' onClick={handleClose} /></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Model">Vehicle Model</Link></li>
        <li><Link to="/Testimonial">Testimonial</Link></li>
        <li><Link to="/Team">Our Team</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
      <div className="Auth">
        <p>SignIn</p>
        <button>Register</button>
      </div>
      <div className="mobile">
        <HiMenu id='bar' size={30} onClick={toggleMenu} />
      </div>
    </div>
  );
}

export default Navbar;
