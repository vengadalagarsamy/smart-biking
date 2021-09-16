import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import {SearchProvider} from './SearchContext';
import Home from './Home/Home';
import Weatherforecast from './Weatherforecast/Weatherforecast';
import GearList from './Gear/gearList';
import Gearlistcontainer from './Gear/gearListcontainer';
import Currentweather from './Currentweather/Currentweather';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// Import all functions required in this page from named libraries

ReactDOM.render(
  <SearchProvider>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Search />
        </Route>
        <Route exact path="/Home">
          <Home />
        </Route>
        <Route exact path="/Weatherforecast">
          <Weatherforecast />
        </Route>
        <Route exact path="/Gear">
          <Gearlistcontainer />
        </Route>
        <Route exact path="/Currentweather">
          <Currentweather />
        </Route>
      </Switch>
    </Router>
  </SearchProvider>,
  /*Enable switching between pages when the Route is called*/
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
