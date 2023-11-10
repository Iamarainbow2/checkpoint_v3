import React, { useState, useEffect } from 'react';

export default function CarsList() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
   
    const storedCars = JSON.parse(localStorage.getItem('carData')) || [];
    setCars(storedCars);
    console.log(cars)
  }, []); 

  return (
    <div>
      <h2>Cars List</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            <strong>Name:</strong> {car.name}, <strong>Age:</strong> {car.age}
          </li>
        ))}
      </ul>
    </div>
  );
}
