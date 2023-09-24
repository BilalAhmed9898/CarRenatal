import React from 'react'
import './index.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Model from './Pages/Model'
import Team from './Pages/Team'
import Testimonial from './Pages/TestimonialPage'



function App() {
  return (
    <Routes>
      <Route path="/"  exact element={<Home />} />
      <Route path="/About"  exact element={<About />} />
      <Route path="/Contact"  exact element={<Contact />} />
      <Route path="/Model"  exact element={<Model />} />
      <Route path="/Team"  exact element={<Team />} />
      <Route path="/Testimonial"  exact element={<Testimonial />} />
    </Routes>
  )
}

export default App