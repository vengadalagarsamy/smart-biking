//Import all required functions
import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {SearchContext} from '../SearchContext';
//import currentweather.css to apply styling to elements of page
import './currentweather.css';

function Currentweather() {
  //Initialises variables from SearchContent.js file to fetch API data
  const {ObtWeather, ObtForecast} = useContext(SearchContext);
  const [stateWeather, setstateWeather] = ObtWeather;
  const [stateForecast, setstateForecast] = ObtForecast;

  //function which generates the date
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month}`
  }

  //function to convert UNIX time to standard depiction
  const timeBuilder = (d) => {
    let hour = d.getHours();
    let minute = d.getMinutes();
    
    if (hour < 10) {hour = "0" + hour};
    if (minute < 10) {minute = "0" + minute};

    return `${hour}:${minute}`
  }

  return (
    <div className={(typeof stateWeather.main != "undefined") ? ((stateWeather.main.temp > 12) ? 'app' : 'app cloudy') : 'app' }>{/*Change background based on weather conditions*/}
    <header>
      <div className="name">Smart Biking</div>
      <h1>Current Weather</h1>
    </header>

    {/*Header section at top of page*/}
    <container className="current-head2">
      <div className="current-date"><b>Now</b> {dateBuilder(new Date())}</div>{/*Use datebuilder function to generate todays date and display*/}
      <div className="current-location">{stateWeather.name}, {stateWeather.sys.country}</div>{/*Display location name and country from API*/}
      <div className="current-weathr">{Math.round(stateWeather.main.temp)}°c</div>{/*Display temperature from weather API*/}
    </container>


    <main>
      {/*This section is for the icons and values in the weather analysis div*/}
      <div>
        <div className="current-analysis">
          <h3 className="current-weana">Weather analysis</h3>

          <div className="current-stats">
            <div className="current-windspeed"></div>
            <div className="current-windspeed2">{Math.round(stateWeather.wind.speed)} km/h</div>{/*Display wind speed from API*/}
            <div className="current-windspeed3">Wind</div>

            <div className="current-humidity"></div>
            <div className="current-humidity2">{stateWeather.main.humidity}%</div>
            <div className="current-humidity3">Humidity</div>

            <div className="current-pressure"></div>
            <div className="current-pressure2">{stateWeather.main.pressure}p</div>
            <div className="current-pressure3">Pressure</div>

            <div className="current-visibility"></div>
            <div className="current-visibility2">{stateWeather.visibility}m</div>
            <div className="current-visibility3">Visibility</div>

            <div className="current-winddir"></div>
            <div className="current-winddir2">{Math.round(stateWeather.wind.deg)}°</div>
            <div className="current-winddir3">Wind direction</div>

            <div className="current-clouds"></div>
            <div className="current-clouds2">{stateWeather.clouds.all}%</div>
            <div className="current-clouds3">Clouds</div>

            <div className="current-mint"></div>
            <div className="current-mint2">{Math.round(stateWeather.main.temp_min)}°</div>
            <div className="current-mint3">Min temp</div>

            <div className="current-maxt"></div>
            <div className="current-maxt2">{Math.round(stateWeather.main.temp_max)}°</div>
            <div className="current-maxt3">Max temp</div>

            <div className="current-sunrise"></div>
            <div className="current-sunrise2">{timeBuilder(new Date(`${stateWeather.sys.sunrise}`*1000))}</div>
            <div className="current-sunrise3">Sunrise</div>

            <div className="current-sunset"></div>
            <div className="current-sunset2">{timeBuilder(new Date(`${stateWeather.sys.sunset}`*1000))}</div>
            <div className="current-sunset3">Sunset</div>
          </div>

        </div>

      </div>

    {/*Navigation widgets on bottom of page*/}
    <div className="bottom">
        <Link to={"/Home"}><div className="widget-home" style={ { margin: '40px 00px 0px 20px', display: "inline-block"} }></div></Link>
        <Link to={"/Weatherforecast"}><div className="widget-weafor" style={ { margin: '40px 00px 0px 0px', display: "inline-block"} }></div></Link>
        <Link to={"/Gear"}><div className="widget-gear" style={ { margin: '40px 20px 0px 0px', display: "inline-block" }}></div></Link>
    </div>
    </main>

    </div>
  );
}

export default Currentweather;
