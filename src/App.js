import React from 'react';
import {useState, useEffect} from 'react'
import axios from 'axios' 
import Home from './Home';

function App() {
  const [wine, setWine] = useState([]);
  useEffect(() =>{
    axios.get('http://localhost:8000/wines/')
    .then(res =>{
      setWine(res.data)
    })
    .catch(err =>{
      console.error(err)
    })
  },[])

    return (
			<div>
				{/* {wine.map(wine => (
        <li key ={wine.id}>{wine.brand_name}</li>
        ))} */}
				<Home props={wine}/>
			</div>
		);
}

export default App;