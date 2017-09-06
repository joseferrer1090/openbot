import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from "../../Layouts/header";
import Slider from "../../Layouts/slider";
import Footer from "../../Layouts/footer";
import Services from '../../Layouts/services'

import imgOpenBot from './../../Layouts/img/Recurso2.png';


class Principal extends Component{
    render(){
        return (
            <div>
                <Header/>
                <Slider/>
                <section className="We-Are-Popular">
                    <div className="container">
                        <h2>We Are Popular Everywhere</h2>
                        <h6 className="text-justify">Build your team around your business structure, Often a business builds its structure around<br/> people rather than people around structures. This leads to the position where loyal people<br/> end up in roles that they are not suitable for</h6>
                        <div className="row">
                            <div className="col-md-8 popular-map">
                                <img src={imgOpenBot} alt="" className="img-responsive"/>
                            </div>
                            <div className="col-md-4 popover-content">
                                <div className="popular-text">
                                    <h5>First One</h5>
                                    <p>Doing some hard thinking about the context that your business inhabits in order to protect it against what's around the corner, shouldn't feel overwhelming</p>
                                    <a href="about-us.html" className="">More Explore&nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                                <div className="popular-text">
                                    <h5>First One</h5>
                                    <p>Doing some hard thinking about the context that your business inhabits in order to protect it against what's around the corner, shouldn't feel overwhelming</p>
                                    <a href="about-vs2.html" className="">More Explore&nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="popular-single-content">
                                    <div className="icon"><i className="flaticon-travel" aria-hidden="true" /></div>
                                    <h3><a href="#" className>BEST CONSULTANCY</a></h3>
                                    <span className="font_fix">01</span>
                                    <h6>As a business grows, roles need to be divided up into specialisms. For example, in a very small company</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="popular-single-content">
                                    <div className="icon"><i className="flaticon-symbol" aria-hidden="true" /></div>
                                    <h3><a href="#" className>Super Performance</a></h3>
                                    <span className="font_fix">02</span>
                                    <h6>As a business grows, roles need to be divided up into specialisms. For example, in a very small company</h6>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="popular-single-content">
                                    <div className="icon"><i className="flaticon-pie-chart" aria-hidden="true" /></div>
                                    <h3><a href="#" className>Plan to Market</a></h3>
                                    <span className="font_fix">03</span>
                                    <h6>As a business grows, roles need to be divided up into specialisms. For example, in a very small company</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Services/>
                <Footer/>
            </div>
        )

    }
} export default Principal;