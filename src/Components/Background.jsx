import React from 'react'
import './CompApp.css';
import Car from '../images/hero/heroes-bg.png'

function Background(props) {
  return (
    <div className='BackgroundImage Container-p1'>
     <h2>{props.name}</h2>
     <h4>Home / {props.name}</h4>
    </div>
  )
}

export default Background