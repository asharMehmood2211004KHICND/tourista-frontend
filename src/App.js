import logo from './logo.svg';

import styles from './App.module.css';
import { useState } from 'react';
import { Searchbox } from './components/Searchbox';
import { HotelsList } from './components/HotelsList';

function App() {


  const [hotelsData, setHotelsData] = useState([]);


  return (
    // <div className={styles.appBody} >toruista app</div>
    <>


    



      



      <Searchbox hotelsData={hotelsData} setHotelsData={setHotelsData} />
      <br></br>
      <br></br>
      <HotelsList hotelsData={hotelsData} />

    
    </>
  );
}

export default App;
