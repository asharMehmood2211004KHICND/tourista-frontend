import React from 'react'
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom'
import styles from "./HotelsList.module.css"
export const HotelItem = ({ name, experience, location,id }) => {

        const navigate = useNavigate();
        
        const handleClick = () => {
              navigate(`/hotel/${id}`)  
        }

    return (
        <div className={styles.hotelItem}>

        {/* <Link to={`/hotel/${id}`}>{name}</Link> */}

            <h2 onClick={handleClick} > name : {name}</h2>
            <p>experience: {experience}</p>
            <p> location : {location} </p>

        </div>
    )
}
