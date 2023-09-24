import React from 'react'
import './CompApp.css'
import Icon1 from '../images/plan/icon1.png'
import Icon2 from '../images/plan/icon2.png'
import Icon3 from '../images/plan/icon3.png'

function PlainTrip() {
    return (
        <div className='Main Container-p1'>
            <div className="tripText">
                <h2>Plan your trip now</h2>
                <h1>Quick & easy car rental</h1>
            </div>
            <div className="boxes">
                <div className="child1">
                    <img src={Icon1} alt="" srcset="" />
                    <h3>Select Car</h3>
                    <p>
                    Our knowledgeable and friendly operators are always ready to help with any questions or concerns
                </p>
                </div>
                <div className="child2">
                    <img src={Icon2} alt="" srcset="" />
                    <h3>Contact Operator</h3>
                    <p>
                        Our knowledgeable and friendly operators are always ready to help with any questions or concerns
                    </p>
                </div>
                <div className="child2">
                    <img src={Icon3} alt="" srcset="" />
                    <h3>Let's Drive</h3>
                    <p>
                        Our knowledgeable and friendly operators are always ready to help with any questions or concerns
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlainTrip