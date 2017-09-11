import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './../../Layouts/header';
import Footer from './../../Layouts/footer';

class SignalBTC extends Component {
    render() {
        return (
            <div>
                <div className="main-page-wrapper">
                    <Header/>
                    <section className="inner-page-banner">
                        <div className="opacity">
                            <div className="container">
                                <h2>Señales de BTC</h2>
                            </div>
                        </div>
                    </section>
                    <section className="about-us-section service-single">
                        <div className="container">
                            
                        </div>
                    </section>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default SignalBTC;