import React from "react";
import "./style.css";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js'


export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={Register}/>
      <Route exact path="/login" component={Login}/>
    </Switch>
    </BrowserRouter>
  );
}
