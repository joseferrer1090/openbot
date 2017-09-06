import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Header extends Component {
    render(){
        return(
            <header>
                <div className="container">
                    <div className="logo float-left"><a href="index.html"><img src="images/logo/logo.png" alt="Logo" /></a>
                    </div>
                    <div className="address-list float-left">
                        <ul>
                            <li>
                                <div className="icon"><i className="flaticon-signs header-flat" aria-hidden="true" /></div>
                                12/A New market, NY</li>
                            <li>
                                <div className="icon"><i className="flaticon-mail  header-flat" aria-hidden="true" /></div>
                                Info_bcore@gmail.com
                            </li>
                        </ul>
                    </div>
                    <div className="social-icon float-left">
                        <ul>
                            <li><a href="#" className><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a href="#" className><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                            <li><a href="#" className><i className="fa fa-vine" aria-hidden="true" /></a></li>
                            <li><a href="#" className><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                    <div className="search float-right theme-search-box">
                        <form>
                            <input type="text" className="search-color" placeholder="Search" />
                            <button><span className><i className="fa fa-search" /></span></button>
                        </form>
                    </div>
                </div>

                <nav className="navbar theme-main-menu">
                    <div className="container">
                        <div className="Mu-color-one main-container clear-fix">
                            <a href="appointment-form.html" className="float-right hvr-shutter-out-horizontal">Login &nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>

                            <div className="menu-wrapper clear-fix float-left">

                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <i className="fa fa-bars" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown-holder active"><a href="index.html">Inicio</a>
                                            <ul className="sub-menu hidden">
                                                <li><a href="index.html">Home Version One</a></li>
                                                <li><a href="index-vs2.html">Home Version Two</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-holder hidden"><a href="about-us-v1.html">Nosotros</a>
                                            { /* <ul className="sub-menu">
                                                <li><a href="about-us.html">about version one</a></li>
                                                <li><a href="about-vs2.html">about version two</a></li>
                                            </ul> */}
                                        </li>
                                        <li><a href="contact.html">Signal BTC</a></li>
                                        <li><a href="contact.html">Multilevel Bot</a></li>
                                        <li><a href="contact.html">Bot</a></li>
                                        <li><a href="contact.html">E-learning</a></li>
                                        <li><a href="contact.html">Trading</a></li>

                                        {/*<li className="dropdown-holder"><a href="service-v1.html">Servicios</a>
                                            <ul className="sub-menu">
                                                <li><a href="#">Signal BTC</a></li>
                                                <li><a href="#">Multilevel Bot</a></li>
                                                <li><a href="#">Bot</a></li>
                                                <li><a href="#">E-learning</a></li>
                                                <li><a href="#">Trading</a></li>
                                            </ul>
                                        </li>*/}
                                        <li><a href="contact.html">Contact</a></li>
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