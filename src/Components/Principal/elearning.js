import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './../../Layouts/header';
import Footer from './../../Layouts/footer';

class Elearning extends Component {
    render() {
        return (
            <div>
            <div className="main-page-wrapper" >
                <Header/>
                <section className="inner-page-banner6">
                    <div className="opacity">
                        <div className="container">
                            <h2>E-Learning</h2>
                        </div>
                    </div>
                </section>
                <section className="Services-section service-projec service-projec2">
                    <div className="container">
                    <div className="row">
                        <br/>
                        <div className="container">
                            <h2>Aprender con OpenBot</h2>
                            <h6>Inicia tu carrera profesional con los mejores profesores -  Traders del mundo, a través de nuestro sistema de streaming profesional. Curso los tres niveles diseñados para llevarte a la cima</h6>	   			   
                        </div>
                        <br/>
                        <div className="col-md-4 col-sm-6 col-xm-12">
                        <div className="service-content">
                            <div className="imgs images-hover"><img src="images/project/project.jpg" alt="images" /></div>
                            <div className="service-single-content">
                            <h3><a href="#" className>Trader Basico</a></h3>
                            <span className="font_fix">01</span>
                            <h6></h6>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xm-12">
                        <div className="service-content">
                            <div className="imgs images-hover"><img src="images/project/project1.jpg" alt="images" /></div>
                            <div className="service-single-content">
                            <h3><a href="#" className>Trader Intermedio</a></h3>
                            <span className="font_fix">02</span>
                            <h6></h6>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4 col-sm-6 col-xm-12">
                        <div className="service-content">
                            <div className="imgs images-hover"><img src="images/project/project2.jpg" alt="images" /></div>
                            <div className="service-single-content">
                            <h3><a href="#" className>Trader Profesional</a></h3>
                            <span className="font_fix">03</span>
                            <h6></h6>
                            </div>
                        </div>
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

export default Elearning;