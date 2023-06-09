import React, { useEffect, useState } from 'react'
import { Country } from './Country';

export const Countries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div className='border'>
            <h1>Load Counter With Child Element.</h1>
            <div className="grid_col_03">
                {
                    countries.map(country => <Country country={country} key={country.name.common} />)
                }
            </div>
        </div>
    )
}



