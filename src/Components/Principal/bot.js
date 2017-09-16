import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Header from './../../Layouts/header';
import Footer from './../../Layouts/footer';

import imgBot from './../../Layouts/img/botimg.png';
import imgBot2 from './../../Layouts/img/bot.png';

class Bot extends Component {
    render() {
        return (
            <div>
                <div className="main-page-wrapper" >
                    <Header/>
                    <section className="inner-page-banner5">
                        <div className="opacity">
                            <div className="container">
                                <h2>Bot</h2>
                            </div>
                        </div>
                    </section>
                    <section className="about-us-section project-single">
                        <div className="container">
                        <div className="left-sidebar-wrapper float-left">
                            <div className="left-about">
                            <ul>
                            <li><a href="#">Descargar iformacion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-file-pdf-o fa-download-1" aria-hidden="true" /></a></li>
                            </ul>
                            </div>
                            <div className="sidebar-text-widget">
                            <div className="opacity">
                                <div className="widget-text">
                                <h3>OpenBot el mejor Bot del mercado</h3>
                                <h6>Te ofrecemos el mejor bot para trading con la configuracion mas facil del marcado, y el mas accesible</h6>
                                <a href="#" className>Registrate&nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                                </div> 
                            </div>
                            </div> 
                            <div className="download-section hidden">
                            <ul>
                                <li><a href="#">Download company history<i className="fa fa-file-pdf-o" aria-hidden="true" /></a></li>
                            </ul>
                            </div>
                        </div>
                        <div className="right-sidebar-wrapper float-right">
                            <div className="right-about">
                            <div className="img images-hover">
                                <img src={imgBot2} alt="images" />
                            </div>
                            <div className="overview">
                                <h4>OpenBot (Bot)</h4>
                                <h6 className="text-justify">
                                    El bot es un programa informatico que efectua automaticamente las operaciones de compra y venta de <b>Criptomonedas</b>.
                                    <b>OpenBot</b>, es uno de nuestro productos estrellas, el te ofrece una rentabilidad entre el <b>5 - 20 %</b>. Es importante que el usuario
                                    sepa realizar las diferentes combinaciones o parejas para que el <b> Bot </b>, realice de manera eficiente la compra y venta de las 
                                    Criptomonedas.
                                </h6>
                            </div>
                            <img src={imgBot} alt="" className="img-responsive"/>
                            <div className="social-icon">
                                <ul>
                                <li><a href="#" className><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#" className><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#" className><i className="fa fa-vine" aria-hidden="true" /></a></li>
                                <li><a href="#" className><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                </ul>
                            </div> 
                            <div className="Strategic-Analysis">
                                <h4>Condiciones</h4>
                                <h6 className="text-justify">
                                    La principal condiciones que debemos tener para poder tener la efectividad de nuestro <b>Bot</b>, es adquirir uno de nustros <b>Planes</b>,
                                    se debe tener en cuenta que el usuario debe ser conocedor de las diferentes Criptomonedas que se encuentren en el mercado. donde se tendra
                                    la fuente del valor de cada una de ellas desde la pagina <a href="https://bittrex.com" target="_blank"><b> Bitrex </b></a> 
                                </h6>
                            </div>
                            <div className="Strategic-Planning">
                                <h4>Strategic Planning</h4>
                                <h6>Bcore was established in 2017 by talented business veterans, Rod Davies and Matthew Levington, who between them have led, developed and helped transform hundreds of companies, across a spectrum of industries Throughout their careers, Rod and Matthew had to execute painstaking strategic,</h6>
                            </div>
                            
                            <div className="tab_wrapper float_left">
                                <div className="choose_us_panel">
                                <div className="panel-group theme-accordion" id="accordion">
                                    <div className="panel">
                                    <div className="panel-heading active-panel">
                                        <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                            Rentabilidad entre 5 - 20% </a>
                                        </h6>
                                    </div>
                                    <div id="collapse1" className="panel-collapse collapse in">
                                        <div className="panel-body">
                                        <h6 className="text-justify"> 
                                            Es importante tener en cuenta que el bot es un software completamente independiente a funcionamiento del Multilevel Binario. 
                                            Esta es completamente dependiente del mercado flutuante de las criptomonedad y de las respectivas parejas que el usuario este dispuesto a realizar.
                                            para maximizar sus ganancias.
                                        </h6>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="panel">
                                    <div className="panel-heading">
                                        <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                            Soporte y funcionamiento 24 / 7</a>
                                        </h6>
                                    </div>
                                    <div id="collapse2" className="panel-collapse collapse">
                                        <div className="panel-body">
                                        <h6 className="text-justify">Al ser un software completamente independiente al funcionamiento del multinivel, pero completamente dependiente al mercado de las criptomonedas,
                                            es claro tener en cuenta que a cualquier hora nuestro producto estrella <b>OpenBot</b> puede generate dudas frente el funcionamiento. Nuestro equipo
                                            de trabajo esta disponible para ti las 24 horas lo 7 dias de las semana.
                                        </h6>
                                        </div>
                                    </div>
                                    </div> 
                                    <div className="panel">
                                    <div className="panel-heading">
                                        <h6 className="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                            Metodologia <b>Scalping</b>  </a>
                                        </h6>
                                    </div>
                                    <div id="collapse3" className="panel-collapse collapse">
                                        <div className="panel-body">
                                        <h6 className="text-justify">
                                            Esta metodologia utilizada por los traider profesionales.
                                        </h6>
                                        </div>
                                    </div>
                                    </div> 
                                </div> 
                                </div> 
                            </div> 
                            <div className="Result">
                                <h4>Resultados</h4>
                                <h6>El primer resultado que tienes sera el incremento parcial de tus criptomonedas teniendo en cuenta las varianzas del mercado actual.</h6>
                            </div>
                            <div className="right-back hidden">
                                <a href="#" className><i className="fa fa-long-arrow-left" aria-hidden="true" />&nbsp;&nbsp;Back to Project</a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </section>
                </div>
                <div className="clearfix"></div>
                <br/><br/>
                <Footer/>
            </div>
        );
    }
}

export default Bot;