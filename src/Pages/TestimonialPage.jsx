import React from 'react'
import Navbar from '../Components/Navbar'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'
import Background from '../Components/Background'
import Banner2 from '../Components/Banner2'

function TestimonialPage() {
  return (
    <>
    <Navbar/>
    <Background name={'Testimonial'}/>
    <Testimonials/>
    <Banner2/>
    <Footer/>
    </>
  )
}

export default TestimonialPage