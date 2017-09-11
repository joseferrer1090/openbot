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
                    <section className="inner-page-banner">
                        <div className="opacity">
                            <div className="container">
                                <h2>Contact</h2>
                            </div>
                        </div>
                    </section>
                    <section className="contact-section">
        <div className="container">
          <div className="theme-title">
            <h1>Let's talk</h1>
            <h6>Want to work with us or need more details about career or have a worthy resume, just mail to us via
              <br /><span>bcore@gmail.com</span>we are happy to receive</h6>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-6 col-xs-12">
              <div className="contact-us-section">
                <h2>Send Your Request</h2>
                <form action="" className="theme-form-two form-validation" autoComplete="off">
                  <textarea placeholder="Message" name="message" defaultValue={""} />
                  <input type="text" placeholder="Subject" name="sub" />
                  <div className="row">
                    <div className="col-md-6 col-sm-12">
                      <input type="text" placeholder="Name" name="name" />
                    </div>
                    <div className="col-md-6 col-sm-12">
                      <input type="email" placeholder="Email" name="email" />
                    </div>
                  </div>
                  <div className="buttonDiv text-center">
                    <button className="hvr-shutter-out-horizontal-two">Submite Request &nbsp;&nbsp;<i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
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
                  <li><a href="#" className><i className="flaticon-technology" aria-hidden="true" />( +88 ) 01912704281</a></li>
                  <li><a href="#" className><i className="flaticon-mail" aria-hidden="true" />ollo@gmail.com</a></li>
                  <li className><a href="#"><i className="fa fa-globe" aria-hidden="true" /></a><p>123 Fake Street- Panama Road, 12/1, London</p></li>
                  <li>Brooklyn, NY 10036, Road victor United States</li>
                </ul>
              </div> 
              <div className="social-icon">
                <h6>Social touch</h6>
                <ul>
                  <li><a href="#" className=" hvr-shutter-out-horizontal-three"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                  <li><a href="#" className=" hvr-shutter-out-horizontal-three"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                  <li><a href="#" className=" hvr-shutter-out-horizontal-three"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                  <li><a href="#" className="hvr-shutter-out-horizontal-three"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
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