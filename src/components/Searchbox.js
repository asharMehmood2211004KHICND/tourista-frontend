import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Searchbox.module.css';
export const Searchbox = ({hotelsData,setHotelsData}) => {


    const [selectedCity, setSelectedCity] = useState('');


    const [selectedExperience, setSelectedExperience] = useState('');

    const [selectedPool, setSelectedPool] = useState('');

    const navigate = useNavigate();

    async function searchResults(e) {
        e.preventDefault()

        let url = "http://localhost:8080/hotel/search?";

        const urlParams = new URLSearchParams()
        urlParams.append("location", selectedCity);
        urlParams.append("experience", selectedExperience);
        urlParams.append("pool", selectedPool);

        url += urlParams.toString()
        console.log(url)

        const res = await fetchData(url)
        console.log(res)
        setHotelsData(res)
        // navigate('/');
    }


    async function fetchData(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data
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

        <form className={styles.searchbox} onSubmit={searchResults}>

            <div>
                <label htmlFor="city">City:</label>
                <select required={true} id="city" value={selectedCity} onChange={handleCity}>
                    <option value='' disabled >Select city</option>
                    <option value="karachi">Karachi</option>
                    <option value="lahore">lahore</option>
                    <option value="islamabad">Islamabad</option>
                </select>
            </div>

            <div>
                <label htmlFor="experience">Experience:</label>
                <select required={true} id="experience" value={selectedExperience} onChange={handleExperience}>
                    <option value='' disabled >Select Experience</option>
                    <option value="luxury">Luxury</option>
                    <option value="budget">Budget</option>
                    <option value="business">Business</option>
                </select>
            </div>



            <div>
                <label htmlFor="experience">Pool:</label>
                <select required={true} id="experience" value={selectedPool} onChange={handlePool}>
                    <option value='' disabled >Select Experience</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <button type='submit' >search</button>


        </form>


    );
}
