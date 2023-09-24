import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Background from '../Components/Background'
import Banner2 from '../Components/Banner2'
import TeamMembers from '../Components/TeamMembers'

function Team() {
  return (
    <>
    <Navbar/>
    <Background name={'Team'}/>
    <TeamMembers/>
    <Banner2/>
    <Footer/>
    </>
  )
}

export default Team