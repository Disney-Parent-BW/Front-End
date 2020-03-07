import React from "react";
import { Route, Switch } from 'react-router-dom';

import Registration from './components/Registration.js';
import PrivateRoute from './components/PrivateRoute.js';
import Dashboard from './components/Dashboard.js';
// import Navigation from './components/Navigation';
import UserSearch from './components/UserSearch';

import Logon from './Logon';

import './App.css';
// import SearchForm from "./components/SearchForm.js";

function App() {
  return (
      <div className="App">
        {/* <Navigation/> */}
        {/* <Logon/> */}
          <Switch>
            <Route exact path="/" component={Registration}/>
            <Route path= "/Logon" component={Logon}/>
            <Route path= "/Search" component={UserSearch}/>
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
          </Switch>
      </div>
  );
}     
  
export default App;