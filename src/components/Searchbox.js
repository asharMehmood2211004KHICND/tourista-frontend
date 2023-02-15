import React, { useEffect } from 'react'
import { useState } from 'react';
import styles from './Searchbox.module.css';
export const Searchbox = () => {


    const [selectedCity, setSelectedCity] = useState('');


    const [selectedExperience, setSelectedExperience] = useState('');

    const [selectedPool, setSelectedPool] = useState('');

    const [hotelsData,setHotelsData] = useState([]);

    useEffect(() => {

    }, [])


    function searchResults() {
            const url = "http://localhost:8080/hotel/all";
           fetchData(url,setHotelsData) 
    }

    async function fetchData(url,setData){
           const response = await fetch(url);
           const data = await response.json();
            setData(data);
            console.log(data);
    }





    const handleCity = (event) => {
        setSelectedCity(event.target.value);
    };

    const handleExperience = (event) => {
        setSelectedExperience(event.target.value);
    };

    const handlePool = (event) => {
        setSelectedPool(event.target.value);
    };


    






    return (

        <div className={styles.searchbox}>


            <div>
                <label htmlFor="city">City:</label>
                <select id="city" value={selectedCity} onChange={handleCity}>
                    <option value="karachi">Karachi</option>
                    <option value="lahore">lahore</option>
                    <option value="islamabad">islamabad</option>
                </select>
            </div>

            <div>
                <label htmlFor="experience">Experience:</label>
                <select id="experience" value={selectedExperience} onChange={handleExperience}>
                    <option value="Luxury">Luxury</option>
                    <option value="Budget">Budget</option>
                    <option value="Business">Business</option>
                </select>
            </div>



            <div>
                <label htmlFor="experience">Pool:</label>
                <select id="experience" value={selectedPool} onChange={handlePool}>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>

            <button onClick={searchResults} >search</button>







        </div>


    );
}
