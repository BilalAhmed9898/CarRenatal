import React from 'react'
import './CompApp.css'

function Footer() {
  return (
    <div className='Footer Container-p1'>
      <div className="child1">
        <h2>Car <span>Rental</span></h2>
        <p>
          We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
        </p>
        <p>(123) -456-789</p>
        <p>Carrental@gmail.com</p>
      </div>
      <div className="child2">
        <h2>COMPANY</h2>
        <p>New York</p>
        <p>Careers</p>
        <p>Mobile</p>
        <p>Blog</p>
        <p>How we work</p>
      </div>
      <div className="child3">
        <h2>
          Working Hours
        </h2>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 19:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="child4">
        <h2>SUBSCRIPTION</h2>
        <p>Subscribe your Email address for latest news & updates.</p>
        <input type="text" name="" id="" placeholder='Enter Email Address' />
        <button>Submit </button>
      </div>
    </div>
  )
}

export default Footer