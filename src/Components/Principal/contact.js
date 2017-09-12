import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Header from "../../Layouts/header";
import Slider from "../../Layouts/slider";
import Footer from "../../Layouts/footer";

class Contact extends Component {
    render(){
        return(
            <div>
                <div className="main-page-wrapper">
                    <Header/>
                    <section className="inner-page-banner4">
                        <div className="opacity">
                            <div className="container">
                                <h2>Contacto</h2>
                            </div>
                        </div>
                    </section>
                    <section className="contact-section">
                      <div className="container">
                        <div className="theme-title">
                          <h1>Hablemos</h1>
                          <h6>Deseas saber mas informacion personalizada y detallada de nuestro producto, dejanos comentario, inquietud o duda.
                            <br /><span>info@openbot.com</span>Estamos Felices de poder ayudarte !</h6>
                        </div>
                        <div className="row">
                          <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
                            <div className="contact-us-section">
                              <h2>Envia tu requerimiento</h2>
                              <form action="" className="theme-form-two " autoComplete="off">
                                <textarea placeholder="Mensaje" name="message" defaultValue={""} />
                                <input type="text" placeholder="Asunto" name="sub" />
                                <div className="row">
                                  <div className="col-md-6 col-sm-12">
                                    <input type="text" placeholder="Nombre" name="name" />
                                  </div>
                                  <div className="col-md-6 col-sm-12">
                                    <input type="email" placeholder="Email" name="email" />
                                  </div>
                                </div>
                                <div className="buttonDiv text-center">
                                  <button className="hvr-shutter-out-horizontal-two">Enviar Requerimiento &nbsp;&nbsp;<i className="fa fa-envelope" aria-hidden="true" /></button>
                                </div>
                                <br/>
                              </form> 
                              <div className="alert-wrapper" id="alert-success">
                                <div id="success"> 
                                  <button className="closeAlert"><i className="fa fa-times" aria-hidden="true" /></button>
                                  <div className="wrapper">
                                    <p>Your message was sent successfully.</p>
                                  </div>
                                </div>
                              </div> 
                              <div className="alert-wrapper" id="alert-error">
                                <div id="error">
                                  <button className="closeAlert"><i className="fa fa-times" aria-hidden="true" /></button>
                                  <div className="wrapper">
                                    <p>Sorry!Something Went Wrong.</p>
                                  </div>
                                </div>
                              </div> 
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                            <div className="contact-single-list">
                              <ul>
                                <li><a href="#" className><i className="flaticon-technology" aria-hidden="true" />( +57 ) </a></li>
                                <li><a href="#" className><i className="flaticon-mail" aria-hidden="true" />info@openbot.com</a></li>
                                <li className><a href="#"><i className="fa fa-globe" aria-hidden="true" /></a><p> </p></li>
                                <li> </li>
                              </ul>
                            </div> 
                            <div className="social-icon">
                              <h6> Redes Sociales </h6>
                              <ul>
                                <li><a href="#" className=" hvr-shutter-out-horizontal-two"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                <li><a href="#" className=" hvr-shutter-out-horizontal-two"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                <li><a href="#" className=" hvr-shutter-out-horizontal-two"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                              </ul>
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
}export default Contact;