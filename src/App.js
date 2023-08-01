import './App.css';
import React from 'react';
import { useEffect, useState } from 'react';
import retriveData from './Services/services/sw-api';


export default function App() {
//use state
  const [starShips, setstarShips] = useState({});
  // const [pageTracker, setCurrentPage] = useState(1);
//fetch data, use effect happens once the page loads
useEffect(() => {
  const effect = async () => {
    setstarShips (await retriveData())
  }
  effect()
}, [])

  return (
    <div className="App">
      <h1>Star Wars Star Ships</h1>
  {starShips?.results?.map((starShip) => {
      return <h1>{starShip.name}</h1>
    })}
    </div>
  );
}


