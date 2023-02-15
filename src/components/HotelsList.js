import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './HotelsList.module.css';

export const HotelsList = ({hotelsData}) => {

    
   




  return (
    // <div>HotelsList</div>
    <div  >
      {hotelsData.map(item => (
        <div className={styles.hotelItem}  key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.experience}</p>
        </div>
      ))}
    </div>
  )
}
