import React from 'react';
import './country.css'

const Country = ({stats}) => {
    return(
        <div className='country'>
            <img src={`https://www.countryflags.io/${stats.CountryCode}/shiny/64.png`} alt={`drapeau de ${stats.Country}`}></img>
            <h2>{stats.Country}</h2>
            <div>
                <p>{`Active : ${stats.Active}`}</p>
                <p>{`Confirmed : ${stats.Confirmed}`}</p>
                <p>{`Deaths : ${stats.Deaths}`}</p>
                <p>{`Recovered : ${stats.Recovered}`}</p>
            </div>

        </div>
    )
}

export default Country;