import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    
    const [visited,setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
    }

    const passWithParams = () =>{
        handleVisitedCountries(country);
    }
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" className='flagger' />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button style={{marginTop:'10px'}} onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button style={{ marginRight:'20px',marginTop:'10px',marginBlock:'10px'}} onClick={handleVisited}>{visited? 'Visited': 'Tour'}</button>

            {visited? 'I have a visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;