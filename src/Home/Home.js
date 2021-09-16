//Import all required functions
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {SearchContext} from '../SearchContext';
//import home.css to apply styling to elements of page
import './home.css';

function Home() {
  //Initialises variables from SearchContent.js file to fetch API data
  const {ObtWeather} = useContext(SearchContext);
  const [stateWeather, setstateWeather] = ObtWeather;

  //function to build date
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}`
  }

  return (
    <div className={(typeof stateWeather.main != "undefined") ? ((stateWeather.main.temp > 12) ? 'app' : 'app cloudy') : 'app' }> {/*Variable background based on current weather conditions*/}
      <header>
        <div className="name">Smart Biking</div>
        </header>
        <main>
          <div className="date"><b>Now</b> {dateBuilder(new Date())}</div> {/*Use datebuilder function to generate todays date and display*/}
            <div className="weatherhead">
            {(typeof stateWeather.main != "undefined") ? (
              <div>
                <div className="location">
                  <div className="city">{stateWeather.name}, {stateWeather.sys.country}</div> {/*Display location name and country from API*/}
                </div>
                <div className="weather">
                  <div className="temperat">{Math.round(stateWeather.main.temp)}°c</div> {/*Display temperature from weather API*/}
                  <div className="condition">{stateWeather.weather[0].description} | feels like: {Math.round(stateWeather.main.feels_like)}°c</div>{/*Display description and details of weather*/}
                </div>
              </div>
    ) : ('')}
          </div>
          {/*Widgets which link to other app pages*/}
          <Link to={"/Currentweather"}><div className="Current"><div className="name3">Current Weather</div></div></Link>
          <Link to={"/Weatherforecast"}><div className="WeaFor"><div className="name3">Weather Forecast</div></div></Link>
          <Link to={"/Gear"}><div className="Gear"><div className="name2">Gear Recommendation</div></div></Link>
          <Link to={"/"}><div className="Search"><div className="name3">Edit Location</div></div></Link>
        </main>
    </div>
  );
}

export default Home;
