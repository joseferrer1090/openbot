import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Footer extends Component {
    render (){
        return(
            <div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="footer-logo">
                                    <div className="logo"><a href="index.html"><img src="images/logo/logo.png" alt="Logo" /></a></div>
                                    <h6>b core was established in 2017 by talented business veterans, Rod Davies and Matthew Levington, the journey began when founders Matthew Levington and Rod Davies, met up in 2017 over a beer</h6>
                                    <ul className="footer-icon">
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
                                        <li><a href="#" className="round-border hvr-shutter-out-horizontal-three"><i className="fa fa-dribbble" aria-hidden="true" /></a></li>
                                    </ul>
                                    <ul className="footer-featured">
                                        <li><a href="news-details.html" className>Privacy Policy</a></li>
                                        <li><a href="news-details.html" className>Legal Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="footer-Useful-Links">
                                    <h5>Useful Links</h5>
                                    <ul>
                                        <li><a href="index.html" className>Home</a></li>
                                        <li><a href="about-us.html" className>About us </a></li>
                                        <li><a href="project.html" className>Project</a></li>
                                        <li><a href="our-team.html" className>Advisors</a></li>
                                        <li><a href="service.html" className>Performance</a></li>
                                        <li><a href="blog.html" className>News</a></li>
                                        <li><a href="appointment-form.html" className>Conditions</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="contact-us.html" className>About us</a></li>
                                        <li><a href="service-singel.html" className>Our History</a></li>
                                        <li><a href="news-v2.html" className>Case Studies</a></li>
                                        <li><a href="blog-single.html" className>Events</a></li>
                                        <li><a href="project-single.html" className>Business Growth</a></li>
                                        <li><a href="contact.html" className>Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="footer-Update">
                                    <h5>News Update</h5>
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
                                <p>Copyright ©2017 <a href="https://themeforest.net/user/designolo/portfolio" className="tran3s p-color" target="_blank">bcore</a> All Rights Reserved by <a href="https://themeforest.net/user/designolo/portfolio" className="p-color tran3s" target="_blank">ollo</a></p>
                            </div> {/* /.float-left */}
                            <div className="float-right">
                                <form action="#">
                                    <input type="text" placeholder="Your email" />
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
