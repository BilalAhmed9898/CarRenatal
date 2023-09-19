import React from 'react'
import './CompApp.css'
import HeroCar from '../images/hero/main-car.png'

function Hero() {
  return (
    <div className='MainHero Container-p1'>
      <div className="herotext">
        <h3>Plan your trip now</h3>
        <h1>Save <span className='unique'>big</span> with our <br /> car rental</h1>
        <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
        <div>
        <button className='btn1'>Book Ride </button>
        <button className='btn1 btn2'>Learn More !</button>
        </div>
      </div>
      <div className="HeroImage">
          <img src={HeroCar} className='image' alt="Car" />
      </div>
    </div>
  )
}

export default Hero