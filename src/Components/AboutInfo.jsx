import React from 'react'
import './CompApp.css'
import Main from '../images/about/about-main.jpg'
import Car1 from '../images/about/icon1.png'
import Car2 from '../images/about/icon2.png'
import Car3 from '../images/about/icon3.png'


function AboutInfo() {
  return (
    <div className='AboutInfo Container-p1'>
      <img src={Main} className='Image' alt="" />
      <div className="child2">
        <p>About Company</p>
        <h1>You start the engine and your adventure begins</h1>
        <p>Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.</p>
        <div className="child2aa">
          <div className='child2a'>
            <img src={Car1} className='Image' alt="" />
            <div className='child2ab'>
              <h1>20</h1>
              <p>Car Types</p>
            </div>
          </div>
          <div className='child2a'>
            <img src={Car2} className='Image' alt="" />
            <div className='child2ab'>
              <h1>20</h1>
              <p>Car Types</p>
            </div>
          </div>
          <div className='child2a'>
            <img src={Car3} className='Image' alt="" />
            <div className='child2ab'>
              <h1>20</h1>
              <p>Car Types</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutInfo