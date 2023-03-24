import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.Country)
    const{area,population,name,flags}=props.country;
        return (
        <div>
             <div className='style-country'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>population: {population}</h4>
            <h4>Area: {area}</h4>
        </div>
        </div>
    );
};

export default Country;