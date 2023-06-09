import React from 'react'

export const Country = (props) => {
    const { name, capital, population, area, flags } = props.country;
    return (
        <div className='country_item item_box bg_white'>
            <img className='mb-5 img_100' src={flags.png} alt={flags.alt ? flags.alt : 'flags image'} />
            <p>Country Name: {name.common}</p>
            <p>Capital: {capital ? capital : 'No Capital'}</p>
            <p>Population: {population}</p>
            <p>Area : {area}</p>
        </div>
    )
}
