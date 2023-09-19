import React from 'react'
import Icon from '../images/logo/logo.png'
import './CompApp.css'

function Navbar() {
  return (
    <div className='Container Container-p1'>
      <div className="icon">
        <img src={Icon} alt="" />
      </div>
      <div className="links">
        <p>Home</p>
        <p>Abou</p>
        <p>Vehicle Model</p>
        <p>Testimonials</p>
        <p>Our Team</p>
        <p>Contact</p>
      </div>
      <div className="Buttons">
        <p>SignIn</p>
        <button>Register</button>
      </div>
    </div>
  )
}

export default Navbar