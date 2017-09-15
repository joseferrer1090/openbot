import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './../../Layouts/header';
import Footer from './../../Layouts/footer';

class Trading extends Component {
    render() {
        return (
            <div>
            <div className="main-page-wrapper" >
                <Header/>
                <section className="inner-page-banner">
                    <div className="opacity">
                        <div className="container">
                            <h2>Trading</h2>
                        </div>
                    </div>
                </section>
                <section className="about-us-section service-single">
            <div className="container">
            <div className="left-sidebar-wrapper float-left">
                <div className="left-about">
                <ul>
                    <li><a href="#">Trading</a></li>
                </ul>
                </div>
                <div className="sidebar-text-widget">
                <div className="opacity">
                    <div className="widget-text">
                    <h3>Adquiere nuestro Bot </h3>
                    <h6>Y pondremos a tu disposicion nuestro equipo de trader para que optimices y mejores tus ganancias de una manera agil.</h6>
                    <a href="#" className>Ingresar &nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></a>
                    </div> 
                </div> 
                </div> 
                <div className="download-section">
                <ul>
                    <li><a href="#">Descargar informacion&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa fa-file-pdf-o fa-download-1" aria-hidden="true" /></a></li>
                </ul>
                </div>
            </div>
            <div className="right-sidebar-wrapper float-right">
                <div className="right-about">
                <div className="img images-hover">
                    <img src="images/service/service1.jpg" alt="images" />
                </div>
                <h6 className="text-justify">
                    Una vez compras tu OpenBot, tienes la opción de adquirir el trabajo profesional de un trader que estará a tu servicio para apoyarte administrando tu Open Bot. Este es uno de los plus que nos diferencia
                    de las demas plataformas.
                </h6>
                
                <div className="tab_wrapper float_left">
                    <div className="choose_us_panel">
                    <div className="panel-group theme-accordion" id="accordion">
                        <div className="panel">
                        <div className="panel-heading active-panel">
                            <h6 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">Ayuda Profesional</a>
                            </h6>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse in">
                            <div className="panel-body">
                            <h6 className="text-justify">
                                Para OpenBot, es importante maximizar las ganancias de tu inversion. Te ofrecemos el mejor equipo de trader
                            </h6>
                            </div>
                        </div>
                        </div> 
                        <div className="panel">
                        <div className="panel-heading">
                            <h6 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Soporte 24 / 7 </a>
                            </h6>
                        </div>
                        <div id="collapse2" className="panel-collapse collapse">
                            <div className="panel-body">
                            <h6>En OpenBot no solo te brindamos el respaldo trader sino tambien nuestro equipo el cual constantemente estara monitoreando tu funcionamiento 
                                y mejorando constantemente la plataforma para ti.
                            </h6>
                            </div>
                        </div>
                        </div> 
                        <div className="panel">
                        <div className="panel-heading">
                            <h6 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">Honestidad y Transparencia</a>
                            </h6>
                        </div>
                        <div id="collapse3" className="panel-collapse collapse">
                            <div className="panel-body">
                            <h6 className="text-justify">
                                Nuestro equipo de trader siempre estara pendiente de cada unao de los paso que das en el mercado de las criptomedas para que tus ganancias siempre sean positivas
                                estaremos siempre en el proceso de desarrollo de tu inversion para que cuentes con nosotros.
                            </h6>
                            </div>
                        </div>
                        </div> 
                    </div> 
                    </div> 
                </div> 
                <br/>
                </div>
            </div>
            </div>
        </section>
            </div>
            <Footer/>
        </div>
        );
    }
}

export default Trading;