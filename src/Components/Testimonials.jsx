import React from 'react'
import './CompApp.css';
import { IconQuote } from "@tabler/icons-react";
import Pic1 from '../images/testimonials/pfp1.jpg'
import Pic2 from '../images/testimonials/pfp2.jpg'

function Testimonials() {
    return (
        <div className='Testimonial'>
            <div className="text">
                <h2>Reviewed by People</h2>
                <h1>
                    Client's Testimonials
                </h1>
                <p>
                    Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.
                </p>
            </div>
            <div className="boxes">
                <div className="box1">
                    <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    <div className="box1a">
                        <img src={Pic1} className='image' alt="" />
                        <div className="box1aa">
                            <h2>Parry Hotter</h2>
                            <p>Belgrade</p>
                        </div>
                        <IconQuote width={50} height={50} color='red'/>
                    </div>
                </div>
                <div className="box2">
                    <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                    <div className="box1a">
                        <img src={Pic2} className='image' alt="" />
                        <div className="box1aa">
                            <h2>Parry Hotter</h2>
                            <p>Belgrade</p>
                        </div>
                        <IconQuote width={50} height={50} color='red' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials