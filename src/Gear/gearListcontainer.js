import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import {SearchContext} from '../SearchContext';
import GearList from './gearList';

function Gearlistcontainer() { //this is a container for the GearList page
  //a container was necessary because React doesn't allow context variables in a class, so must get the variables here, and pass them as props
    const {ObtQuery} = useContext(SearchContext);
    const [stateQuery, setstateQuery] = ObtQuery;

  return (
    <GearList query={stateQuery}/>
  );
}

export default Gearlistcontainer;
