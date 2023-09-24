import React, { useState, useEffect } from 'react';
import './CompApp.css';
import { CAR_DATA } from "./CarData";

function VehicleInfo() {
    const [selectedCar, setSelectedCar] = useState(null);

    const handleClick = (index, car) => {
        setSelectedCar(car);
    };

    useEffect(() => {
        // Set the selected car to the first car in CAR_DATA when the component mounts
        setSelectedCar(CAR_DATA[0][0]);
    }, []);

    return (
        <div className='VehicleInfo Container-p1'>
            <div className="text">
                <h3>Vehicle Models</h3>
                <h1>Our rental fleet</h1>
                <p>Choose from a variety of our amazing vehicles to rent for <br /> your next adventure or business trip</p>
            </div>
            <div className="content">
                <div className="child1">
                    {CAR_DATA.map((carArray, index) => {
                        const car = carArray[0];
                        return (
                            <button
                                key={index}
                                onClick={() => handleClick(index, car)}
                            >
                                {car.name}
                            </button>
                        );
                    })}
                </div>
                <div className="child2">
                    {selectedCar && (
                        <img src={selectedCar.img} alt={selectedCar.name} />
                    )}
                </div>
                <div className="child3">
                    {selectedCar && (
                        <table>
                            <tr>
                                <th>${selectedCar.price}</th>
                                <th>rent per day</th>
                            </tr>
                            <tr>
                                <td>Model:</td>
                                <td>{selectedCar.model}</td>
                            </tr>
                            <tr>
                                <td>Make</td>
                                <td>{selectedCar.mark}</td>
                            </tr>
                            <tr>
                                <td>Year</td>
                                <td>{selectedCar.year}</td>
                            </tr>
                            <tr>
                                <td>Doors</td>
                                <td>{selectedCar.doors}</td>
                            </tr>
                            <tr>
                                <td>AC</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Transmission</td>
                                <td>{selectedCar.transmission}</td>
                            </tr>
                            <tr>
                                <td>Fuel</td>
                                <td>{selectedCar.fuel}</td>
                            </tr>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default VehicleInfo;
