import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import img1 from './img/openbot+bg.png';
import img2 from './img/openbot+bg1.png';
import img3 from './img/openbot+bg2.png';




class Slider extends Component {
    render(){
        return(
            <div>
                <div id="theme-main-banner">
                    <div data-src={img1}>
                        <div className="camera_caption">
                            <div className="container">
                                <h5 className="wow fadeInUp animated">Make your startup business</h5>
                                <h1 className="wow fadeInUp animated" data-wow-delay="0.5s">Best Business <span>Consulting</span></h1>
                                <h6 className="wow fadeInUp animated" data-wow-delay="1s">There are two types of people who will tell you that you cannot make a difference in this world: those <span />who are afraid to try and those who are afraid you will succeed."</h6>
                                <a href="" className="wow fadeInLeft animated hvr-shutter-out-horizontal-two" data-wow-delay="1s">Ingresa</a>
                                <a href="" className="wow fadeInRight animated hvr-shutter-out-horizontal-two" data-wow-delay="1s">Contactanos</a>
                            </div>
                        </div>
                    </div>
                    <div data-src={img2}>
                        <div className="camera_caption">
                            <div className="container">
                                <h5 className="wow fadeInUp animated">Make your startup business</h5>
                                <h1 className="wow fadeInUp animated" data-wow-delay="0.5s">Best Business <span>Consulting</span></h1>
                                <h6 className="wow fadeInUp animated" data-wow-delay="1s">There are two types of people who will tell you that you cannot make a difference in this world: those <span />who are afraid to try and those who are afraid you will succeed."</h6>
                                <a href="" className="wow fadeInLeft animated hvr-shutter-out-horizontal-two" data-wow-delay="1s">Ingresa</a>
                                <a href="" className="wow fadeInRight animated hvr-shutter-out-horizontal-two" data-wow-delay="1s">Contactanos</a>
                            </div>
                        </div>
                    </div>
                    <div data-src={img3}>
                        <div className="camera_caption">
                            <div className="container">
                                <h5 className="wow fadeInUp animated">Make your startup business</h5>
                                <h1 className="wow fadeInUp animated" data-wow-delay="0.5s">Best Business <span>Consulting</span></h1>
                                <h6 className="wow fadeInUp animated" data-wow-delay="1s">There are two types of people who will tell you that you cannot make a difference in this world: those <span />who are afraid to try and those who are afraid you will succeed."</h6>
                                <a href="" className="wow fadeInLeft animated hvr-shutter-out-horizontal-two" data-wow-delay="1s">Ingresa</a>
                                <a href="" className="wow fadeInRight animated hvr-shutter-out-horizontal-two" data-wow-delay="1s">Contactanos</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Get-Quote-banner wow fadeInUp hidden">
                    <div className="container">
                        <h4 className="float-left">Top tips for hiring and firing in a growing business, Get financial planing Solution</h4>
                        <a href="#" className=" float-right hvr-shutter-out-horizontal-two">Get Quote</a>
                    </div>
                </div>
            </div>
        )
    }
} export default Slider;