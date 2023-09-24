import React from 'react'
import './CompApp.css'
import Car1 from '../images/cars-big/audi-box.png'
import Car2 from '../images/cars-big/audia1.jpg'
import Car4 from '../images/cars-big/benz.jpg'
import Car6 from '../images/cars-big/bmw320.jpg'
import Car7 from '../images/cars-big/carforbox.jpg'
import Car10 from '../images/cars-big/passatcc.jpg'

function CarModel() {
  return (
    <div className='Container-p1'>
      <div className="mainTeam">
        <div className="child">
          <div className="profile">
            <img src={Car1} alt="" />
          </div>
          <div className="title">
            <h2>Audi A1</h2>
            <p>$45
            per day</p>
             
          </div>
        </div>
        <div className="child">  <div className="profile">
          <img src={Car2} alt="" />
        </div>
          <div className="title">
            <h2>Audi-SUV</h2>
            <p>$45
            per day</p>
             
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Car4} alt="" />
        </div>
          <div className="title">
            <h2>Benz</h2>
            <p>$25
            per day</p>
             
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Car6} alt="" />
        </div>
          <div className="title">
            <h2>BMW-i3</h2>
            <p>$30
            per day</p>
             
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Car7} alt="" />
        </div>
          <div className="title">
            <h2>Audi R-8</h2>
            <p>$100
            per day</p>
             
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Car10} alt="" />
        </div>
          <div className="title">
            <h2>BMW i-2</h2>
            <p>$35
            per day</p>
             
          </div></div>
      </div>
    </div>
  )
}

export default CarModel