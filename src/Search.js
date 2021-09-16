import React, {useContext} from 'react';
import {SearchContext} from './SearchContext';
import {Link} from "react-router-dom";
// Import all functions required in this page from named libraries

import './searchpage.css';
// Import independent styling sheet for this page 


function Search() {
  const {ObtQuery, ObtWeather, ObtForecast, ObtKey, ObtBase} = useContext(SearchContext);
  const [stateQuery, setstateQuery] = ObtQuery;
  const [stateWeather, setstateWeather] = ObtWeather;
  const [stateForecast, setstateForecast] = ObtForecast;
  const stateKey = ObtKey;
  const stateBase = ObtBase;

  // Initialise all variables from the SearchContent.js file in order to fetch API data

  const updateQuery = e => {
      setstateQuery(e.target.value);
  };
  const datafetch = evt => {
    if (evt.key === "Enter") {
        fetch(`${stateBase}weather?q=${stateQuery}&units=metric&APPID=${stateKey}`)
        .then(res => res.json())
        .then(result => {
            setstateWeather(result);
            console.log(result);
        });
        fetch(`${stateBase}forecast?q=${stateQuery}&units=metric&APPID=${stateKey}`)
        .then(rest => rest.json())
        .then(forresult => {
            setstateForecast(forresult);
            console.log(forresult);
        });
    }
  }
  // Fetch all API data using the named location and store them into the variables for use in other pages

  return (
    <div className="search-mainpage">

      <header className="search-branding">
        <h1>Smart Biking</h1>
      </header>

      <main className="search-mainbody">
        <div>
            <input
            type="text"
            placeholder="Enter a location..."
            className="search-searchbar"
            value={stateQuery}
            onChange={updateQuery}
            onKeyPress={datafetch}
            />
        </div>
        {/* Allows user to input the location for the forecast and fetch the 
            data by calling the fetch function given above */}

        <h3 className="search-giventxt">Current location: {stateWeather.name}</h3>
        {/* Display the current location */}
      </main>

        <Link to={"/Home"}><button class="button">Next</button></Link>
        {/* Link to open the Home page once data has been fetched */}
    </div>
  );
}

export default Search;
{/* Export the Search function for access in other pages */}
