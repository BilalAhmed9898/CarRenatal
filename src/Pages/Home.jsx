import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import PlainTrip from '../Components/PlainTrip'

function Home() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <PlainTrip/>
    </div>
  )
}

export default Home