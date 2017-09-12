import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import LogOpenBot from './../Layouts/img/Recurso2.png'

class Footer extends Component {
    render (){
        return(
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="footer-logo">
                                    <div className="logo"><a href="/"><img src={LogOpenBot} alt="Logo" style={{width:'50%'}} /></a></div>
                                    <h6 className="text-justify">b core was established in 2017 by talented business veterans, Rod Davies and Matthew Levington, the journey began when founders Matthew Levington and Rod Davies, met up in 2017 over a beer</h6>
                                    <ul className="footer-icon">
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                                    </ul>
                                    <ul className="footer-featured">
                                        <li><a href="news-details.html" className>Privacidad</a></li>
                                        <li><a href="news-details.html" className>Terminos y condiciones</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="footer-Useful-Links">
                                    <h5>Link de importancia</h5>
                                    <ul>
                                        <li><a href="" className>Inicio</a></li>
                                        <li><a href="" className>Signal BTC </a></li>
                                        <li><a href="" className>Bot</a></li>
                                        <li><a href="" className>Bitrex</a></li>
                                        <li><a href="" className>Plan Carrera</a></li>
                                        <li><a href="" className>Contacto</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="" className>Nosotros</a></li>
                                        <li><a href="" className>Miltilevel Bot</a></li>
                                        <li><a href="" className>E-learning</a></li>
                                        <li><a href="" className>Trading</a></li>
                                        <li><a href="" className>Business Growth</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="footer-Update">
                                    <h5>Actualidad</h5>
                                    <div className="footer-News">
                                        <h6><a href="#" className>The Original Business Doctors<br /> support to business</a></h6>
                                        <p>january 02,2017</p>
                                    </div>
                                    <div className="footer-News">
                                        <h6><a href="#" className>On Life Goals and Financial Priorities<br /> Cutting Risks in Forex</a></h6>
                                        <p>january 02,2017</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-footer">
                        <div className="container">
                            <div className="float-left">
                                <p>Copyright ©2017 <a href="/" className="tran3s p-color" target="_blank">OpenBot</a> Derechos Reservados  <a href="/" className="p-color tran3s" target="_blank">Maxcorp SAS</a></p>
                            </div>
                            <div className="float-right hidden">
                                <form action="#">
                                    <input type="text" placeholder="Tu email" />
                                    <button className="hvr-shutter-out-horizontal">Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
} export default Footer;
