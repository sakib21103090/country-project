import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [Countries ,setCountries] = useState([]);

      useEffect (() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res =>res.json())
        .then(data => setCountries(data))
        
      } ,[])
    return (
        <div>
            <h1> How many Country ? {Countries.length}</h1>
            <div className='grid-style-country'>
           
            {
            Countries.map(country =>
            <Country
             country={country}
             key={country.cca3} 
            
             ></Country>)
}
        </div>
        </div>
        
    );
};

export default Countries;