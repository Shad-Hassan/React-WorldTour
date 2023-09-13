import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './National.css'

const Countries = () => {
    const [countries,setCountries] = useState([]);
    const[visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);
    
    useEffect( ()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    }, [])

    const handleVisitedCountries = country => {
        console.log('add this to your visited country');
        const newVisit = [...visitedCountries,country];
        setVisitedCountries(newVisit);
        
    }

    const handleVisitedFlags = flag => {
        const newFlags = [...visitedFlags,flag];
        setVisitedFlags(newFlags);
    }
    
    return (
        <div>
            <h2>Countries: {countries.length}</h2>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul style={{textAlign:'left'}}>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li> )
                    }                    
                </ul>
            </div>
            <div className="flagContainer">
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                }
            </div>
            <div className="nationalContainer">

            {
                countries.map(country => <Country
                     key={country.cca3} 
                     handleVisitedCountries={handleVisitedCountries}
                     handleVisitedFlags={handleVisitedFlags}
                     country={country}></Country>)
            }

            </div>
        </div>
    );
};

export default Countries;