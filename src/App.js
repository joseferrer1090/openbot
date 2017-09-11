import React, { Component } from 'react'
import { Router, Switch } from 'react-router'
import { Link, Route, BrowserRouter, HashRouter } from 'react-router-dom'
import Principal from "./Components/Principal/principal";
import About from "./Components/Principal/about";
import Contact from "./Components/Principal/contact";
import Bot from "./Components/Principal/bot";
import SignalBTC from "./Components/Principal/signalbtc";
import Multilevel from "./Components/Principal/botlevel";
import Elearning from "./Components/Principal/elearning";
import Trading from "./Components/Principal/trading";
import Login from "./Components/Login/login";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div> 
                    { /* Rutas Solo de Front*/ } 
                        <Route exact path = "/" component = {Principal}/> 
                        <Route exact path = "/about" component = {About}/> 
                        <Route exact path = "/signalbtc"  component = {SignalBTC}/> 
                        <Route exact path = "/multilevel" component = {Multilevel}/> 
                        <Route exact path = "/bot"       component = {Bot}/>   
                        <Route exact path = "/elearning" component = {Elearning} />
                        <Route exact path = "/contact"   component = {Contact}/> 
                        <Route exact path = "/trading"   component = {Trading}/> 
                        <Route exact path = "/loogin"    component = {Login}/>
                </div> 
            </HashRouter>
        )
    }
}
export default App;