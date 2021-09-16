import React, {useContext} from 'react';
import {SearchContext} from '../SearchContext';
import {Link} from 'react-router-dom';
// Import all functions required in this page from named libraries

import './weatherforecast.css';
// Import independent styling sheet for this page 

function Weatherforecast() {
  const {ObtWeather, ObtForecast} = useContext(SearchContext);
  const [stateWeather, setstateWeather] = ObtWeather;
  const [stateForecast, setstateForecast] = ObtForecast;

  // Initialise all variables from the SearchContent.js file in order to use 

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    // Initialise data format required

    const firday = `${stateForecast.list[4].dt}`;
    const secday = `${stateForecast.list[12].dt}`;
    const thiday = `${stateForecast.list[20].dt}`;
    const forday = `${stateForecast.list[28].dt}`;
    const fivday = `${stateForecast.list[36].dt}`;
    // Store date information as variables for ease of use

    const dateBuilder = (d) => {
        let day = days[d.getDay()];
        let date = d.getDate();
        return `${day} ${date}`
    }
    // Function for returning the date

    const todayDate = (d) => {
        let day = days[d.getDay()];
        let month = months[d.getMonth()];
        let date = d.getDate();
        let year = d.getFullYear();
        let hour = d.getHours();
        let minute = d.getMinutes();

        if (hour < 10) {hour = "0" + hour};
        if (minute < 10) {minute = "0" + minute};

        return `${day} ${date} ${month} ${year}, ${hour}:${minute}`
    }
    // Function for returning today's date with the time

    return (
      <div className={(typeof stateWeather.main != "undefined") ? ((stateWeather.main.temp > 12) ? 'app' : 'app cloudy') : 'app' }>
        {/* Load different backgrounds depending on the temperature */}
        <div className="forecast-mainpage">
            <header>
              <div className="name">Smart Biking</div>
              <h1>Weather Forecast</h1>
            </header>
            <main className="forecast-mainbody">
                <div className="forecast-bodycontent">
                    <div>
                        <h3 className="forecast-bodymaintitle">Daily Weather in {stateForecast.city.name}</h3>
                        <h4 className="forecast-bodydatetitle"><b>Now</b> {todayDate(new Date())}</h4>
                    </div>
                    <div className="forecast-tablesec">
                        <table className="forecast-table">
                            <tbody  className="forecast-tablebody">
                                <tr className="forecast-tableheadrow">
                                    <th className="forecast-tablecolumnhedate">Date</th>
                                    <th className="forecast-tablecolumnhetemp">Temp</th>
                                    <th className="forecast-tablecolumnhemain"></th>
                                    <th className="forecast-tablecolumnhehum"></th>
                                    <th className="forecast-tablecolumnhepres"></th>
                                </tr>

                                {/* All rows fetch the temperature, humidity and pressure for the next 5 days */}
                                <tr className="forecast-tablerow">
                                    <td className="forecast-tablecolumndate">{dateBuilder(new Date(firday * 1000))}</td>
                                    <td className="forecast-tablecolumntemp">{stateForecast.list[4].main.temp}°</td>
                                    <td className="forecast-tablecolumnmain">{stateForecast.list[4].weather[0].main}</td>
                                    <td className="forecast-tablecolumnhum">{stateForecast.list[4].main.humidity}%</td>
                                    <td className="forecast-tablecolumnpres">{stateForecast.list[4].main.pressure}p</td>
                                </tr>
                                <tr className="forecast-tablerow">
                                    <td className="forecast-tablecolumndate">{dateBuilder(new Date(secday * 1000))}</td>
                                    <td className="forecast-tablecolumntemp">{stateForecast.list[12].main.temp}°</td>
                                    <td className="forecast-tablecolumnmain">{stateForecast.list[12].weather[0].main}</td>
                                    <td className="forecast-tablecolumnhum">{stateForecast.list[12].main.humidity}%</td>
                                    <td className="forecast-tablecolumnpres">{stateForecast.list[12].main.pressure}p</td>
                                </tr>
                                <tr className="forecast-tablerow">
                                    <td className="forecast-tablecolumndate">{dateBuilder(new Date(thiday * 1000))}</td>
                                    <td className="forecast-tablecolumntemp">{stateForecast.list[20].main.temp}°</td>
                                    <td className="forecast-tablecolumnmain">{stateForecast.list[20].weather[0].main}</td>
                                    <td className="forecast-tablecolumnhum">{stateForecast.list[20].main.humidity}%</td>
                                    <td className="forecast-tablecolumnpres">{stateForecast.list[20].main.pressure}p</td>
                                </tr>
                                <tr className="forecast-tablerow">
                                    <td className="forecast-tablecolumndate">{dateBuilder(new Date(forday * 1000))}</td>
                                    <td className="forecast-tablecolumntemp">{stateForecast.list[28].main.temp}°</td>
                                    <td className="forecast-tablecolumnmain">{stateForecast.list[28].weather[0].main}</td>
                                    <td className="forecast-tablecolumnhum">{stateForecast.list[28].main.humidity}%</td>
                                    <td className="forecast-tablecolumnpres">{stateForecast.list[28].main.pressure}p</td>
                                </tr>
                                <tr className="forecast-tablerow">
                                    <td className="forecast-tablecolumndate">{dateBuilder(new Date(fivday * 1000))}</td>
                                    <td className="forecast-tablecolumntemp">{stateForecast.list[36].main.temp}°</td>
                                    <td className="forecast-tablecolumnmain">{stateForecast.list[36].weather[0].main}</td>
                                    <td className="forecast-tablecolumnhum">{stateForecast.list[36].main.humidity}%</td>
                                    <td className="forecast-tablecolumnpres">{stateForecast.list[36].main.pressure}p</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <div className="bottom">
                {/* Links to access independent pages when user clicks on them */}
                <Link to={"/Home"}><div className="widget-home" style={ { margin: '40px 00px 0px 20px', display: "inline-block"} }></div></Link>
                <Link to={"/Currentweather"}><div className="widget-current2" style={ { margin: '40px 00px 0px 0px', display: "inline-block"} }></div></Link>
                <Link to={"/Gear"}><div className="widget-gear" style={ { margin: '40px 20px 0px 0px', display: "inline-block" }}></div></Link>
            </div>
        </div>
        </div>
    );
}

export default Weatherforecast;
{/* Export the Weatherforecast function for access in other pages */}