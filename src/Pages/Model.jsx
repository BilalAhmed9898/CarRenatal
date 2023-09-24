import React from 'react'
import Navbar from '../Components/Navbar'
import Background from '../Components/Background'
import Footer from '../Components/Footer'
import Banner2 from '../Components/Banner2'
import CarModel from '../Components/CarModel'

function Model() {
  return (
    <>
    <Navbar/>
    <Background name={'VehicleModel'}/>
    <CarModel/>
    <Banner2/>
    <Footer/>
    </>
  )
}

export default Model