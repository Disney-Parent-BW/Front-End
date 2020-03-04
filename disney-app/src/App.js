import React from "react";
import { Route, Switch } from 'react-router-dom';

import Registration from './components/Registration.js';
import PrivateRoute from './components/PrivateRoute.js';
// import Login from './components/Login.js';
import Dashboard from './components/Dashboard.js';
// import Navigation from './components/Navigation.js';

import axiosWithAuth from './utils/axiosWithAuth';

import './App.css';

function App() {
  return (

      <div className="App">
        {/* <Navigation/> */}
          <Switch>
            <Route exact path="/" component={Registration}/>
            {/* <Route path="/login" component={Login} /> */}
            <PrivateRoute path="/dashboard" component={Dashboard} /> 
          </Switch>
      </div>
  );
}     
  
export default App;