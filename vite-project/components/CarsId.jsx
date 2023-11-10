import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CarsId() {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    
    const carData = JSON.parse(localStorage.getItem('carData')) || [];
    

    
    if (id >= 0 && id < carData.length) {
      setCar(carData[id]);
    }
  }, [id]); 
  return (
    <div>
      {car ? (
        <>
          <h2>Car Details</h2>
          <p>
            <strong>Name:</strong> {car.name}
          </p>
          <p>
            <strong>Age:</strong> {car.age}
          </p>
          
        </>
      ) : (
        <p>Car not found</p>
      )}
    </div>
  );
}
