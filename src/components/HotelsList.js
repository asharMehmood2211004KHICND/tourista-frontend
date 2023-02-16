import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './HotelsList.module.css';
import { HotelItem } from './HotelItem';

export const HotelsList = ({ hotelsData }) => {







    return (
        // <div>HotelsList</div>
        <div  >
            {hotelsData.map(item => (
                
                    <HotelItem   key={item.id} id={item.id} name={item.name} experience={item.experience} location={item.location}  />
                
            ))}
        </div>
    )
}
