import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Header from "../../Layouts/header"; 
import Footer from "../../Layouts/footer";
class About extends Component { 
    render() { 
        return (
                <div>
                    <div className="main-page-wrapper">
                        <Header/>
                        <section className="inner-page-banner">
                            <div className="opacity">
                                <div className="container">
                                    <h2>Nosotros</h2>
                                </div>
                            </div>
                        </section>
                        <section className="We-Are-Popular Popular-homepage2">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="popular-single-content">
                                            <div className="icon"><i className="flaticon-travel" aria-hidden="true" /></div>
                                            <h3><a href="#" className>SEGURIDAD</a></h3>
                                            <span className="font_fix">01</span>
                                            <h6>Te damos la mejor seguridad y confiabilidad en cada uno de nuestros productos.</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="popular-single-content">
                                            <div className="icon"><i className="flaticon-symbol" aria-hidden="true" /></div>
                                            <h3><a href="#" className>SOPORTE</a></h3>
                                            <span className="font_fix">02</span>
                                            <h6>Nuestro equipo de soporte se encuentra las 24 horas del dias para resolver tu dudas.</h6>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="popular-single-content">
                                            <div className="icon"><i className="flaticon-pie-chart" aria-hidden="true" /></div>
                                            <h3><a href="#" className>RENTABILIDAD</a></h3>
                                            <span className="font_fix">03</span>
                                            <h6>Te ofrecemos una rentabilidad sincera y acorde a cada uno de nuestro productos.</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="about-us-section">
                            <div className="container">
                                <div className="left-sidebar-wrapper float-left">
                                    <div className="left-about">
                                        <ul>
                                            <li><a href="about-us.html">Nuestra Compañia</a></li>
                                            <li><a href="project.html">Que Hacemos</a></li>
                                            <li><a href="#">Descargar Brochures&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-file-pdf-o fa-download-1" aria-hidden="true" /></a></li>
                                            <li><a href="#">Descargar Plan Carrera&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-file-pdf-o fa-download-1" aria-hidden="true" /></a></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className="right-sidebar-wrapper float-right">
                                    <div className="right-about">
                                        <h6>
                                        Es el  producto estrella de una  compañía internacional con oficinas físicas en  Holanda, la cual  propone implementar sus herramientas para incrementar los resultados en el mercado de valores de las Cryptomonedas a través del Trading, guiado por expertos mundiales.
                                        </h6>
                                        <div className="img">
                                            <img src="images/inner-page/about-us2.jpg" alt="images" />
                                        </div>
                                        <h6> 
                                            También Open Bot es una Herramienta enfocada a mejorar los  sistemas relacionales entre  inversores y un equipo de comerciantes profesionales en cryptomonedas, con las mejores estrategias y las mejores condiciones basadas en la confianza con el objetivo de   ganar-ganar  como el foco fundamental de Nuestra Compañía.
                                            Estamos convencidos que con planeación estratégica este mercado emergente  puede llevarnos a nuevos niveles de utilidades sostenibles en el tiempo.
                                        </h6>
                                        
                                        <div className="history-info hidden">
                                            <div className="row">
                                                <div className="col-md-4 col-sm-4 col-xs-4">
                                                    <h2>2015</h2>
                                                    <div className="history-text">
                                                        <h5>bcore Established</h5>
                                                        <p>21 december 2015</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-xs-4">
                                                    <h2>2016</h2>
                                                    <div className="history-text middle-history">
                                                        <h5>NY Office Success</h5>
                                                        <p>12 december 2016</p>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-xs-4">
                                                    <h2>2017</h2>
                                                    <div className="history-text">
                                                        <h5>bcore launch in Dhaka</h5>
                                                        <p>january 25, 2017</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="short-history">
                                            <h4>Que hacemos</h4>
                                            <h6>Somos una empresa que se dedica a la produccion de tecnologia con  <a href="https://www.blockchain.com/" target="_blank"><b>Blockchaim</b></a>, y a la implementacion del <a href="https://bitcoin.org/es/" target="_blank"><b>Bitcoin</b></a>. Asi mismo estamos
                                            desarrollando el BOT, el cual genera una estrategia de <b>scalping</b> para optimizar tus ganancias. Entre otra seria de producto que con un buen manejo podras mejorar
                                            tus ingresos y tu calidad de vida. <b> OpenBot </b>, esta ubicada en Estados unidos, California. </h6>
                                        </div>
                                        <div className="company-brief clear-fix">
                                            <div className="company-shorts float-left">
                                                <div className="shorts">
                                                    <h5>Nuestro Equipo total</h5>
                                                    <h2>15</h2>
                                                </div>
                                                <div className="shorts">
                                                    <h5>Equipo de Soporte</h5>
                                                    <h2>5</h2>
                                                </div>
                                                <div className="shorts">
                                                    <h5>Traider Remotos</h5>
                                                    <h2>5</h2>
                                                </div>
                                                <div className="shorts">
                                                    <h5>Desarrolladores</h5>
                                                    <h2>5</h2>
                                                </div>
                                            </div>
                                            <div className="float-right">
                                                <img src="images/inner-page/about-us3.jpg" alt="company" style={{marginTop: '50px'}}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <br/>
                        <Footer/>
                    </div>
                </div>
                ); 
            }
         }export default About;