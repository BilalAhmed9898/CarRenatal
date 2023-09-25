import React from 'react'
import './CompApp.css';
import Image1 from '../images/download/appstore.svg'
import Image2 from '../images/download/googleapp.svg'

function Download() {
    return (
        <div className='Downloads Container-p1'>
            <div className="text">
                <h1>Download our app to get most out of it</h1>
                <p>Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. Incommode so intention defective at convinced. Led income months itself and houses you.</p>
                <div className='DownloadImage'>
                    <img src={Image1} className='image' alt="" />
                    <img src={Image2} className='image' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Download