import React from 'react'
import '../App.css'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import PlainTrip from '../Components/PlainTrip'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import Testimonials from '../Components/Testimonials'
import ChooseUs from '../Components/ChooseUs'
import Download from '../Components/Download'
import BookCar from '../Components/BookCar'

function Home() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <BookCar/>
       <PlainTrip/>
       <Banner/>
       <ChooseUs/>
       <Testimonials/>
       <Download/>
       <Footer/>
    </div>
  )
}

export default Home