import React from 'react'
import './CompApp.css';
import Cars from '../images/chooseUs/main.png'
import Icon1 from '../images/chooseUs/icon1.png'
import Icon2 from '../images/chooseUs/icon2.png'
import Icon3 from '../images/chooseUs/icon3.png'


function ChooseUs() {
    return (
        <div className='Chooseus Container-p1'>
                <img src={Cars} alt="" />
            <div className="ChooseData">
                <div className="child1">
                    <h2>Why Choose Us</h2>
                    <h1>Best valued deals you will ever find</h1>
                    <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
                    <button>Find Details</button>
                </div>
                <div className="child2">
                    <div className="child2a">
                        <img src={Icon1} className="Image" alt="" />
                        <div className="childaa">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                    <div className="child2a">
                        <img src={Icon2}  className="Image" alt="" />
                        <div className="childaa">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                    <div className="child2a">
                        <img src={Icon3} className="Image" alt="" />
                        <div className="childaa">
                            <h2>Cross Country Drive</h2>
                            <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseUs