import React from 'react'
import './CompApp.css';

function BookCar() {
  return (
    <div className='BookCar Container-p1'>
      <div className="BookCarBox">
        <div className="title">
          <h2>Book a Car</h2>
        </div>
        <div className="TextFeilds">
          <select name="example">
            <option value="option1">Select Your Car</option>
            <option value="option2">Audi A1 S-Line
            </option>
            <option value="option3">
              VW Golf 6
            </option>
            <option value="option4">
              Toyota Camry
            </option>
            <option value="option2">
              BMW 320 ModernLine
            </option>
            <option value="option3">
              Mercedes-Benz GLK
            </option>
          </select>
          <select name="example">
            <option value="option1">Select Pick Up Location</option>
            <option value="option2">City 1</option>
            <option value="option2">City 2</option>
            <option value="option2">City 3</option>
            <option value="option3">City 4</option>
          </select>
          <select name="example">
            <option value="option1">Select Drop Up Location</option>
            <option value="option2">City 1</option>
            <option value="option2">City 2</option>
            <option value="option2">City 3</option>
            <option value="option3">City 4</option>
          </select>
          <input type="date" />
          <input type="date" />
          <button className='Button'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default BookCar