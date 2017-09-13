import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import LogOpenBot from './../Layouts/img/Recurso2.png'


class Header extends Component {
    render(){
        return(
            <header>
                <div className="container">
                    <div className="logo float-left">
                        <a href="/"><img className="img-responsive" src={LogOpenBot} alt="Logo" style={{width:'200px', marginTop:'-30px'}} /></a>
                    </div>
                    <div className="address-list float-left">
                        <ul>
                            <li></li>
                            <li>
                                <div className="icon"><i className="flaticon-signs header-flat" aria-hidden="true" /></div>
                                Direccion Direccion</li>
                            <li>
                                <div className="icon"><i className="flaticon-mail  header-flat" aria-hidden="true" /></div>
                                info@openbot.com
                            </li>
                        </ul>
                    </div>
                    <div className="social-icon float-left hidden">
                        <ul>
                            <li><a href="#" className> <i className="fa fa-language" aria-hidden="true"></i> </a></li>
                        </ul>
                    </div>
                    <div className="search float-right theme-search-box hidden">
                        <form>
                            <input type="text" className="search-color" placeholder="" />
                            <button><span className><i className="fa fa-language" /></span></button>
                        </form>
                    </div>
                </div>

                <nav className="navbar theme-main-menu">
                    <div className="container">
                        <div className="Mu-color-one main-container clear-fix">
                            <a href="#login" className="float-right hvr-shutter-out-horizontal">Login &nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>

                            <div className="menu-wrapper clear-fix float-left">

                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <i className="fa fa-bars" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown-holder active">
                                            <a href="/">Inicio</a>
                                        </li>
                                            <li><a href="#signalbtc">Signal BTC</a></li>
                                            <li><a href="#multilevel">Multilevel Bot</a></li>
                                            <li><a href="#bot">Bot</a></li>
                                            <li><a href="#elearning">E-learning</a></li>
                                            <li><a href="#trading">Trading</a></li>
                                        <li>
                                            <a href="#contact">Contacto</a>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}export default Header;