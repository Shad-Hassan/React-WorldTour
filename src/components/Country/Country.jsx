import { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const {name, flags, population, area, cca3} = country;
    
    const [visited,setVisited] = useState(false);
    
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt="" className='flagger' />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button style={{ marginRight:'20px'}} onClick={handleVisited}>{visited? 'Visited': 'Tour'}</button>

            {visited? 'I have a visited this country.' : 'I want to visit'}
        </div>
    );
};

export default Country;