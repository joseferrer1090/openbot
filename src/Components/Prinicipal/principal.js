import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from "../../Layouts/header";
import Slider from "../../Layouts/slider";

class Principal extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Slider/>
            </div>
        )

    }
} export default Principal;