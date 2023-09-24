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
import FAQs from '../Components/FAQs'
import VehicleInfo from '../Components/VehicleInfo'

function Home() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <BookCar/>
       <PlainTrip/>
       <VehicleInfo/>
       <Banner/>
       <ChooseUs/>
       <Testimonials/>
       <FAQs/>
       <Download/>
       <Footer/>
    </div>
  )
}

export default Home