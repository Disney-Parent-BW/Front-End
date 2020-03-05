import React from "react";
import { Route, Switch } from 'react-router-dom';

import Registration from './components/Registration.js';
import PrivateRoute from './components/PrivateRoute.js';
import Dashboard from './components/Dashboard.js';

// import axiosWithAuth from './utils/axiosWithAuth';
import Logon from './Logon';

import './App.css';

function App() {
  return (
      <div className="App">
        {/* <Navigation/> */}
        {/* <Logon/> */}
          <Switch>
            <Route exact path="/" component={Registration}/>
            <Route path= "/Logon" component={Logon}/>
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
          </Switch>
      </div>
  );
}     
  
export default App;