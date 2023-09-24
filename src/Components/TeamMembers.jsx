import React from 'react'
import './CompApp.css'
import Member1 from '../images/team/1.png'
import Member2 from '../images/team/2.png'
import Member3 from '../images/team/3.png'
import Member4 from '../images/team/4.png'
import Member5 from '../images/team/5.png'
import Member6 from '../images/team/6.png'

function TeamMembers() {
  return (
    <div className='Container-p1'>
      <div className="mainTeam">
        <div className="child">
          <div className="profile">
            <img src={Member1} alt="" />
          </div>
          <div className="title">
            <h2>Luke Miller</h2>
            <p>Salesman</p>
          </div>
        </div>
        <div className="child">  <div className="profile">
          <img src={Member2} alt="" />
        </div>
          <div className="title">
            <h2>Luke Miller</h2>
            <p>Salesman</p>
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Member3} alt="" />
        </div>
          <div className="title">
            <h2>Luke Miller</h2>
            <p>Salesman</p>
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Member4} alt="" />
        </div>
          <div className="title">
            <h2>Luke Miller</h2>
            <p>Salesman</p>
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Member5} alt="" />
        </div>
          <div className="title">
            <h2>Luke Miller</h2>
            <p>Salesman</p>
          </div></div>
        <div className="child">  <div className="profile">
          <img src={Member6} alt="" />
        </div>
          <div className="title">
            <h2>Luke Miller</h2>
            <p>Salesman</p>
          </div></div>
      </div>
    </div>
  )
}

export default TeamMembers