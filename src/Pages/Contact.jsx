import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Background from '../Components/Background'
import Banner2 from '../Components/Banner2'
import ContactForm from '../Components/ContactForm'

function Contact() {
  return (
    <>
    <Navbar/>
    <Background name={'Contact'}/>
    <ContactForm/>
    <Banner2/>
    <Footer/>
    </>
  )
}

export default Contact