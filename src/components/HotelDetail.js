import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const HotelDetail = ({}) => {

  const [hotel,setHotel] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  }

  const handleBookNowButtonClick=()=>{
    navigate("/booking");
  }
  
  

  useEffect(()=>{

    const fetchHotel = async ()=>{
      
      const response = await fetch(`http://localhost:8080/hotel/${id}`);
      const data = await response.json();
      setHotel(data);

    };

    fetchHotel();


  },[id]);


  
  if (!hotel) {
    return <div>Loading...</div>;
  }







  return (
    <>
    
    <div>
      <h1>{hotel.name}</h1>
      <p>{hotel.shortDescription}</p>
      <p>{hotel.location}</p>
      <p>{hotel.price}</p>

      <button onClick={handleBackButtonClick}>Go Back</button>

      <button onClick={handleBookNowButtonClick} >Book Now</button>

    </div>
    
    </>




  );
}
