import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export const HotelDetail = ({}) => {

  const [hotel,setHotel] = useState(null);
  //extracting id from url
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  }

  const handleBookNowButtonClick=()=>{
    navigate("/booking",{ state: hotel });
  }
  
  
  //get hotel by id 
  useEffect(()=>{

    const fetchHotel = async ()=>{
      
      const response = await fetch(`http://localhost:8080/hotel/${id}`);
      const data = await response.json();
      setHotel(data);
      //hotel = hotel object with all the info.. can be retrived on booking page using location property {} 

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
