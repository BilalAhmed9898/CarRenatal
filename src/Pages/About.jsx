import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import PlainTrip from '../Components/PlainTrip'
import Background from '../Components/Background'
import Banner2 from '../Components/Banner2'

function About() {
  return (
    <>
    <Navbar/>
    <Background name={'About'}/>
    <PlainTrip/>
    <Banner2/> 
    <Footer/>
    </>
  )
}

export default About