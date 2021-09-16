//Import all required functions
import React, {Component, useContext} from 'react';
import {SearchContext} from '../SearchContext';
import {Link} from 'react-router-dom';
//import required pictures
import Gear from "./gear";
import sunny from "../assets/sunny.jpg";
import cloudy from "../assets/cloudy.jpg";


class GearList extends Component{

    state = {
        gear: [
            {id: 1, title: "", message: ""}, //This array will hold all the recommended gears
            {id: 2, title: "", message: ""},
            {id: 3, title: ""},
            {id: 4, title: ""},
        ],
        currentLocation: "nowhere", //stores the current location
        backgroundImage: `url(${sunny})`,
        query: this.props.query, //this should be equal to whatever the user has entered on the main page
        buttonHeight: -270 //to dynamically determine button height, depending on the number of results //was -181
    }

    styles = {
        backgroundImage: this.state.backgroundImage,
        backgroundSize: 'cover',
        width: 414,
        height: 786,
        textAlign: 'center',
        paddingTop: 30,
        margin: '0 auto',
        };

fontColor = "black"; //the font colour will change, depending on if the background is light or dark

    getWeather(){ //get weather information from API
        var key = 'ba4c76e4ecc59db40fe4d0ccb7aea0bf';

        if (this.state.query === ""){
            console.log("Waiting for user to enter a location");
        } else {
            const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.state.query + '&appid=' + key + '&units=metric'; //fetch data from server

            fetch(url) //fetching data from openWeather
                .then(function (resp) {
                    return resp.json()
                }) // Convert data to json
                .then(data => {
                    console.log(data);
                    this.setVars(data);
                })
                .catch(function hi () {
                    // catch any errors
                    console.log("ERROR");
                    //alert("Location not found");
                    //this.state.error = true;
                });
        }
    }

    constructor(props) {
        super(props);
        //this.setState({query:`${stateQuery}`});
        this.getWeather = this.getWeather.bind(this);
        //call API
        this.getWeather(); //get weather
    }


setVars(data){ //this method initialises key variables
        console.log(data); //print response from server (for testing)
    let newGear = [ //will contain all content for gear divs
        {id: 1, title: "Helmet", message: "We always recommend a helmet, whatever the weather"},
    ];
    newGear.push({id: 2, title: data.main.temp < 10 ? "Warm clothes" : "Cool clothes", message: data.main.temp < 10 ? "It's cold today!" : "It's warm today"})
    if (data.wind.speed >= 8) newGear.push({id: 3, title: "Glasses", message: "It's windy out there"});
    if (data.main.temp <= 0) newGear.push({id: 4, title: "Ice tyres", message: "Brrr... try not to freeze"},);

    let currentDate = Math.round(+new Date()/1000) ; //new date, converted to API format
    newGear.push({id: 5, title: currentDate > data.sys.sunset || currentDate < data.sys.sunrise ? "Bike lights" : "Sunglasses", message: currentDate > data.sys.sunset || currentDate < data.sys.sunrise ? "It's dark outside" : "The sun is out" })

    this.fontColor = currentDate > data.sys.sunset || currentDate < data.sys.sunrise ? "white" : "black"; //changing font colour depending on background colour

    if(data.main.temp > 12) { //changing background, depending on the weather
        this.setState ( {backgroundImage: `url(${sunny})`} );
    } else {
        this.setState ( {backgroundImage: `url(${cloudy})`} );
    }
    this.styles = {
        display: 'flex',
        flexDirection: "column",
        backgroundImage: this.state.backgroundImage,
        backgroundSize: 'cover',
        width: 414,
        height: 786,
        textAlign: 'center',
        paddingTop: 30,
        margin: '0 auto',
    };


    this.setState({currentLocation: data.name});
    this.setState({gear: newGear});
}



setQuery(newQuery){
        this.state.query = newQuery;
}

    search = evt => { //search event
        if (evt.key === "Enter") {
            this.getWeather(); //get weather when searched
        }
    }


    render() {

        return (
            <div style={ this.styles } >

                <header>
                    <div className="name">Smart Biking</div>
                </header>
                <div style={{  height: 300, paddingBottom:10  }}>

              <h1 className="name_1">Gear Recommendation</h1>





                    <h4 className="name_2" style={{margin: '40px 20px 50px 20px'}}>{this.state.query === "" ? "Please enter a location" : "The following gear is recommended based on current weather conditions in " + this.state.currentLocation}</h4>
                    { this.state.gear.map(gear => <Gear key={gear.id} title = {gear.title} message={gear.message}/>) }
                </div>

              <div className={"bottom"} style={{ bottom: this.state.buttonHeight , position: "relative" }}>
                  <Link to={"/Home"}><div className="widget-home" style={ { margin: '40px 00px 0px 20px', display: "inline-block"} }></div></Link>
                  <Link to={"/Weatherforecast"}><div className="widget-weafor" style={ { margin: '40px 00px 0px 0px', display: "inline-block"} }></div></Link>
                  <Link to={"/Currentweather"}><div className="widget-current" style={ { margin: '40px 20px 0px 0px', display: "inline-block" }}></div></Link>
              </div>

            </div>

        );

    }
}

export default GearList;
