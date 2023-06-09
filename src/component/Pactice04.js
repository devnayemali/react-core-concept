import React, { useEffect, useState } from 'react'

export const Pactice04 = () => {
    return (
        <div className='border'>
            <LoadCountries />
        </div>
    )
}


function LoadCountries() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h1>Load Api Country</h1>
            <div className="grid_col_03">
                {countries.map(country => (
                    <div className='country_item item_box bg_white' key={country.name.common}>
                        <img className='img_100 mb-5' src={country.flags.png} alt='img' />
                        <p>Country Name: {country.name.common}</p>
                        <p>Capital: {country.capital ? country.capital[0] : "No Capital"}</p>
                        <p>Borders : {country.borders ? country.borders.join(", ") : 'No Border'}</p>
                        <p>independent : {country.independent === true ? 'Yes' : 'No'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
