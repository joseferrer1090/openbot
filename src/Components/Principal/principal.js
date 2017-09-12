import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Header from "../../Layouts/header";
import Slider from "../../Layouts/slider";
import Footer from "../../Layouts/footer";

import imgOpenBot from './../../Layouts/img/Recurso2.png';


class Principal extends Component{
    render(){
        return (
            <div>
                <div className="main-page-wrapper">
                    <Header/>
                    <Slider/>
                    <section className="We-Are-Popular">
                        <div className="container">
                            <h2>¿ Por que OpenBot ?</h2>
                            <h6>
                                Es el  producto estrella de una  compañía internacional con oficinas físicas en  Holanda, la cual  propone
                                <br/> implementar sus herramientas para incrementar los resultados en el mercado de valores de las <br/> 
                                Cryptomonedas a través del Trading, guiado por expertos mundiales.
                            </h6>
                            <div className="row">
                                <div className="col-md-8 popular-map">
                                    <img src={imgOpenBot} alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-4 popular-tex">
                                <div className="popular-text">
                                    <h5>Soporte 24/4</h5>
                                        <p className="text-justify"> Para el grupo de trabajo de <b>OpenBot</b>, es importante
                                            mantener a nuetros clientes felices y libre de todas las dudas con respecto a nuestro productos.
                                          </p>
                                        <a href="#about" className>Ver mas&nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                                    </div>
                                    <div className="popular-text">
                                    <h5>Señales del Mercado</h5>
                                        <p className="text-justify">Mantener alerta a nuestro clientes sobre el comportamiento del mercado, con <b>OpenBot</b> &nbsp;
                                        probar siempre estar a la vanguardia del mercado sopresisvo de las <b>Criptomonedad</b>.</p>
                                        <a href="#about" className>Ver mas&nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="popular-single-content">
                                        <div className="icon"> <i className="flaticon-travel" aria-hidden="true"></i> </div>
                                        <h3> <a  className> SEGURIDAD </a></h3>
                                        <span className="font_fix"> 01</span>
                                        <h6>Te damos la mejor seguridad y confiabilidad en cada uno de nuestros productos.</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="popular-single-content">
                                    <div className="icon"><i className="flaticon-symbol" aria-hidden="true" /></div>
                                        <h3><a  className> SOPORTE </a></h3>
                                        <span className="font_fix">02</span>
                                        <h6>Nuestro equipo de soporte se encuentra las 24 horas del dias para resolver tu dudas.</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="popular-single-content">
                                    <div className="icon"><i className="flaticon-pie-chart" aria-hidden="true" /></div>
                                        <h3><a className> RENTABILIDAD </a></h3>
                                        <span className="font_fix">03</span>
                                        <h6> Te ofrecemos una rentabilidad sincera y acorde a cada uno de nuestro productos. </h6>
                                    </div> 	
                                </div>
                            </div>
                        </div>
                    </section>
                </div>    
                <Footer/>    
            </div>
        )
    }
} export default Principal;