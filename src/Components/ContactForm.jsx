import React from 'react'
import './CompApp.css';

function ContactForm() {
  return (
    <div className='ContactForm Container-p1'>
     <div className="child1">
      <h1>Need additional information?</h1>
      <p>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
      <h2>Phone : (123) 456-7869</h2>
      <h2>Email : name@gmail.com</h2>
      <h2>Location : Karachi , Pakistan</h2>
      </div>
     <div className="child2">
     <form action="">
      <label htmlFor="" className='FullName'>Full Name <span className='Unique'>*</span></label>
      <input type="text" placeholder='E.g : "John Wick"' />
      <label htmlFor="" className='FullName'>Email <span className='Unique'>*</span></label>
      <input type="email" name="" id="" placeholder='Yourname@gmail.com' />
      <label htmlFor="" className='FullName'>Tell us About it <span className='Unique'>*</span></label>
      <textarea name="" id="" cols="60" rows="10" placeholder='Write Here . . .'></textarea>
      <button>Submit</button>
     </form>
     </div>
    </div>
  )
}

export default ContactForm