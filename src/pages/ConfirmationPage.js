import React from 'react'
import { useLocation } from 'react-router-dom';

export const ConfirmationPage = () => {

  const location = useLocation();
  const hotel = location.state;

  console.log(hotel);

  return (
    <>

  <div>here is the copy of your order</div>

    </>
    
    
  );
}
