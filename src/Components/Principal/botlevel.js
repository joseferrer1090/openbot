import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './../../Layouts/header';
import Footer from './../../Layouts/footer';

import imgEstructura from './../../Layouts/img/estructura.png';

class Botlevel extends Component {
    render() {
        return (
            <div>
                <div className="main-page-wrapper">
                    <Header/>
                    <section className="inner-page-banner3">
                        <div className="opacity">
                            <div className="container">
                                <h2>Multilevel Bot</h2>
                            </div>
                        </div>
                    </section>
                    <section className="about-us-section project-single">
                        <div className="container">
                        <div className="left-sidebar-wrapper float-left">
                            <div className="download-section">
                            <ul>
                                <li><a href="#">Descargar informacion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-file-pdf-o fa-download-1" aria-hidden="true" /></a></li>
                                
                            </ul>
                            </div>
                            <div className="sidebar-text-widget">
                                <div className="opacity">
                                <div className="widget-text">
                                    <h3>Ingresa y prueba nuestra plataforma</h3>
                                    <h6>Adquiere nuestro Bot y te daremos una rentabilidad justa sobre tu inversion</h6>
                                    <a href="#" className="" >Registrate&nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                                </div> 
                                </div> 
                            </div>
                        </div>
                        <div className="right-sidebar-wrapper float-right">
                            <div className="right-about">
                            <div className="img images-hover">
                                <img src="images/project/project-singlevs1.jpg" alt="images" />
                            </div>
                            <div className="overview">
                                <h4>Plan carrera (MultilevelBot)</h4>
                                <h6>
                                    Dentro de nuestra Compañía podrás hacer una carrera profesional como Trader, aplicar todos tus conocimientos, utilizar todas las herramientas que te brindamos y crecer de la mano con tu equipo de Traders e inversores.  
                                </h6>
                            </div>
                            <div className="col-md-12">
                                <img src={imgEstructura} alt="" className="img-responsive"/>
                            </div>
                            <div className="social-icon">
                                <ul className="">
                                <li><a href="#" className><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#" className><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#" className><i className="fa fa-instagram" aria-hidden="true"/></a></li>
                                
                                </ul>
                            </div> 
                            <div className="Strategic-Analysis">
                                <h4>Condiciones</h4>
                                <h6>
                                    Los Planes de Carrera parten de tu primera gran Inversión:  Compras el Open Bot por $1.000 Dólares Americanos y desde el primer día empiezas a ganar. Si no quieres hacer la inversión inicial de 1.000  dóalres americanos, podrás optar por el pago de una mensualidad de 200  Dólares americanos para tener acceso al Open Bot. <br/>
                                    <br/> Por cada Open Bot que vendas obtendrás un 20% de Utilidades  !!!  (BONO DIRECTO). <br/> <br/>
                                    Una vez hayas comprado tu Open Bot, podrás ingresar en el Club de traders con inversiones de 300, 600, 1.000, 2.000, 5.000 y 10.000  en contratos a  SEIS (6) meses y rentabilidad VARIABLE  entre 10% y 20%  (BONO BINARIO)
                                </h6>
                            </div>
                            <div className="Strategic-Planning hidden">
                                <h4>Funcionamiento</h4>
                                <h6>Bcore was established in 2017 by talented business veterans, Rod Davies and Matthew Levington, who between them have led, developed and helped transform hundreds of companies, across a spectrum of industries Throughout their careers, Rod and Matthew had to execute painstaking strategic,</h6>
                            </div>
                            
                            <div className="tab_wrapper float_left">
                                <div className="choose_us_panel">
                                <div className="panel-group theme-accordion" id="accordion">
                                    <div className="panel">
                                    <div className="panel-heading active-panel">
                                        <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Utilidad de ganancia entre 5 - 20 %</a>
                                        </h6>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                        <h6>Estas utilidades son las que produce el robot siempre y cuando el usuario forme las respectivas parejas, teniendo en cuenta las varianzas que tenga el marcado 
                                            de las criptomonedas.
                                        </h6>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="panel">
                                    <div className="panel-heading">
                                        <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Bono de venta directa por el 20%</a>
                                        </h6>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                        <div className="panel-body">
                                        <h6>Este porcenta de ganacia aplica siempre el usuario de tu red persona venda un Bot de manera directa.</h6>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="panel">
                                    <div className="panel-heading">
                                        <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"> Bono de cobro por red 10%</a>
                                        </h6>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                        <div className="panel-body">
                                        <h6>Este porcente de ganacia aplica siempre y cuando el usuario arme su red binaria de forma infinita .</h6>
                                        </div>
                                    </div>
                                    </div> 
                                </div> 
                                </div> 
                            </div> 
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default Botlevel;