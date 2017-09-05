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
                            <a href="appointment-form.html" className="float-right hvr-shutter-out-horizontal">Appointment &nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>

                            <div className="menu-wrapper clear-fix float-left">

                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <i className="fa fa-bars" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown-holder active"><a href="index.html">Home</a>
                                            <ul className="sub-menu">
                                                <li><a href="index.html">Home Version One</a></li>
                                                <li><a href="index-vs2.html">Home Version Two</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-holder"><a href="about-us-v1.html">About us</a>
                                            <ul className="sub-menu">
                                                <li><a href="about-us.html">about version one</a></li>
                                                <li><a href="about-vs2.html">about version two</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-holder"><a href="service-v1.html">Services</a>
                                            <ul className="sub-menu">
                                                <li><a href="service.html">Service version one</a></li>
                                                <li><a href="service-singel.html">Service singel</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-holder"><a href="project.html">Projects</a>
                                            <ul className="sub-menu">
                                                <li><a href="project.html">Project</a></li>
                                                <li><a href="project-vs2.html">project version Two</a></li>
                                                <li><a href="project-vs3.html">project version Three</a></li>
                                                <li><a href="project-vs4.html">project version four</a></li>
                                                <li><a href="project-single.html">project-single</a></li>
                                                <li><a href="project-single-vs2.html">project-single-vs2</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-holder"><a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li><a href="faq.html">faq</a></li>
                                                <li><a href="our-team.html">our team</a></li>
                                                <li><a href="error.html">Error</a></li>
                                                <li><a href="appointment-form.html">appointment form</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-holder"><a href="news-v1.html">Blogs</a>
                                            <ul className="sub-menu">
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="blog-vs2.html">Blog version Two</a></li>
                                                <li><a href="blog-single.html">blog single</a></li>
                                            </ul>
                                        </li>
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