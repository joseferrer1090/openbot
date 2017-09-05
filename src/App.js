import React, { Component } from 'react'
import {Link, Route, BrowserRouter, HashRouter} from 'react-router-dom'
import {Router, Switch} from 'react-router'
import Principal from "./Components/Prinicipal/principal";



class App extends Component{
  render (){
    return(
        <HashRouter>
            <div>
                <Route exact patch="/" component={Principal}/>
            </div>
        </HashRouter>
    )
  }
} export default App;