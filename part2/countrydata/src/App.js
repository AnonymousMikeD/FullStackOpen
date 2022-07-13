import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';
import Search, { Handle, ListChecker } from './components/Search'
import Country from "./components/Country";


function App() {
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState('');

  const showInfo=(country)=> setSearch(country);

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountry(response.data)
      })
  }, [])

  return (
    <>
      <Handle search={search} setSearch={setSearch}/>
      <ListChecker country={country} search={search} showInfo={showInfo}/>
    </>
  );
}

export default App;
