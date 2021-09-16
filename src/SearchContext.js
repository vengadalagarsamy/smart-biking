import React, {createContext, useState} from 'react';
// import createContect and useState functions from React Library in
// order to be able to use global variables in all pages of the app

export const SearchContext = createContext();
// export this const in order to import and use all variables in this page
// onto all other pages

export const SearchProvider = props => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState({});
    const API_KEY = "47d6bf5dc43b1c524c183fd597a64c85";
    const API_BASE = "https://api.openweathermap.org/data/2.5/";

    /* These are the variables which are passed to the other pages in order to use the information in them.
        These store the API details needed in order to fetch the information required properly */

    return (
         <SearchContext.Provider value={{
            ObtQuery:[query, setQuery],
            ObtWeather:[weather,setWeather],
            ObtForecast:[forecast, setForecast],
            ObtKey:API_KEY,
            ObtBase:API_BASE
            }}>
            {props.children}
         </SearchContext.Provider>

         /* Returns the information in the variables and allows for them to be modified when calling this page */
    );
};