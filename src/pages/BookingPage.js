import React from 'react'
import { TextField } from '../components/TextField';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';





export const BookingPage = () => {

  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  // const [expenseWithoutTax,setAmountWithoutTax] = useState(0);
  // const [expenseWithTax, setexpenseWithTax] = useState(1)

  const [selectedCheckInDate, setSelectedCheckInDate] = useState(new Date());
  const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(new Date());

  const [expense, setExpense] = useState(0);
  const [tax, setTax] = useState(0);

  const[postedData,setPostedData] = useState();

  const location = useLocation();
  const hotelData = location.state;

  const timeDifference = selectedCheckOutDate.getTime() - selectedCheckInDate.getTime();
  const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

  async function calculateExpense(e) {

    let url = "http://localhost:8080/bill/calculate?";

    const urlParams = new URLSearchParams()
    urlParams.append("price", hotelData.price);
    // urlParams.append("checkInDate", selectedCheckInDate.getFullYear()+'-'+selectedCheckInDate.getMonth()+'-'+selectedCheckInDate.getDate());
    // urlParams.append("checkOutDate", selectedCheckOutDate.getDate());
    urlParams.append("days", daysDifference);

    url += urlParams.toString()
    console.log(url)

    const res = await fetchData(url)
    console.log(res)
    //setHotelsData(res)
    // setting the expense
    //setExpense(res);
    //navigate('/');
    console.log(res["tax"])
    setTax(res["tax"])
    setExpense(res["withTax"])

  }


  async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
  }

  function printdate() {
    console.log(daysDifference)
  }

  function backToHome() {
    navigate("/")
  }

  function confirm(){

    fetch('http://localhost:8080/bill/save', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    
    "name":nameValue,
    "email":emailValue,
    "address":addressValue,
    "expense":expense
  })
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
  
})
.then(data => {
  // do something with the response data
  console.log(data);
  // setPostedData(data)
  // console.log(postedData)
})
.catch(error => {
  // handle the error
  console.error('There was a problem with the fetch operation:', error);
});





    navigate("/confirmation", {state:{confirmedExpense:expense,confirmedTax:tax,confirmedCheckInDate:selectedCheckInDate,confirmedCheckOutDate:selectedCheckOutDate,confirmedEmail:emailValue}})
  }





  return (
    <div>
      name <TextField value={nameValue} setValue={setNameValue} ></TextField><br></br>
      address <TextField value={addressValue} setValue={setAddressValue} ></TextField><br></br>
      email <TextField value={emailValue} setValue={setEmailValue} ></TextField><br></br>
      arrival date <DatePicker selected={selectedCheckInDate} onChange={(date) => setSelectedCheckInDate(date)} dateFormat="yyyy/MM/dd" /><br></br>
      departure date <DatePicker selected={selectedCheckOutDate} onChange={(date) => setSelectedCheckOutDate(date)} dateFormat="yyyy/MM/dd" /><br></br>
      price <h1>{hotelData.price}</h1><br></br>
      {/* <button onClick={calculateExpense}>view expense</button><br></br> */}
      <button onClick={calculateExpense}>view expense</button><br></br>

      expense<h3>{expense}</h3>
      {/* without tax <h3>{expenseWithoutTax}</h3>         */}

      tax<h3>{tax}</h3>

      <button onClick={backToHome} >Cancel</button>
      <button onClick={confirm} >Book my stay</button>

    </div>

  );
}
