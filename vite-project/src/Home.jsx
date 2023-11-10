import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [carName, setCarName] = useState('');
  const [carAge, setCarAge] = useState('');
  const [cars, setCars] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve carData from localStorage when the component mounts
    const storedCars = JSON.parse(localStorage.getItem('carData')) || [];
    setCars(storedCars);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  useEffect(() => {
    
    cars ? localStorage.setItem('carData', JSON.stringify(cars)) : console.log('cleared');
  }, [cars]);

  function handleNameChange(e) {
    setCarName(e.target.value);
  }

  function handleAgeChange(e) {
    setCarAge(e.target.value);
  }

  function handleCarAdd() {
    const newCar = {
      name: carName,
      age: carAge,
    };

    // Update the state to include the new car
    setCars((prevCars) => [...prevCars, newCar]);

    // Clear the input fields
    setCarName('');
    setCarAge('');
  }

  return (
    <form>
      <input type="text" value={carName} onChange={handleNameChange}></input>
      <input type="number" value={carAge} onChange={handleAgeChange}></input>
      <button type="button" onClick={handleCarAdd}>
        Add Car
      </button>
    </form>
  );
}
