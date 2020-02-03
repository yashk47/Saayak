import React, {Component} from 'react';
import { MDBIcon} from 'mdbreact';


class Footer extends Component{
    render(){
        return(
            <div>
                {/*====================  footer area ====================*/}
                <div className="footer-area dark-bg">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-content-wrapper section-space--inner--100">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12">
                                {/* footer intro wrapper */}
                                <div className="footer-intro-wrapper">
                                    <div className="footer-logo">
                                    <a href={`${process.env.PUBLIC_URL}/`}>
                                        <img src="assets/img/logo/logo-light.png" className="img-fluid" alt="" />
                                    </a>
                                    </div>
                                    <div className="footer-desc">
                                    We are commited to be the leading WORLD CLASS LOGISTIC.
                                    </div>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">Phone <MDBIcon icon="phone-square-alt" /></h4>
                                    <ul className="footer-widget__content">
                                    <li> +91 94627 89480</li>
                                    <li> +91 99508 75201</li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget">
                                    <h4 className="footer-widget__title">Mail <MDBIcon far icon="envelope-open" /></h4>
                                    <ul className="footer-widget__content">
                                    <li>komal@sayakk.com</li>
                                    <li>avinash@sayakk.com</li>
                                    <li>dinesh@sayakk.com</li>
                                    </ul>
                                </div>
                                </div>
                                <div className="col-xl-2 offset-xl-1 col-lg-3 col-md-4">
                                {/* footer widget */}
                                <div className="footer-widget mb-0">
                                    <h4 className="footer-widget__title">Address <MDBIcon icon="map-marked-alt" /></h4>
                                    <div className="footer-widget__content">
                                    <p className="address">Sayakk Logistics Solution Private Limited.</p>  
                                    <p className="address">D-285, Agarsen Nagar, Churu, Rajasthan, India (331001).</p>
                                    <ul className="contact-details">
                                        {/* <li><span>P:</span>99 55 66 88 526</li>
                                        <li><span>F:</span>55 44 77 62</li> */}
                                        <li><span><MDBIcon far icon="envelope-open" /></span>help@sayakk.com</li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                        <div className="footer-copyright-wrapper">
                        <div className="footer-copyright text-center">
                        Copyright © 2020. All right reserved
                        </div>
                    </div>
                </div>
                {/*====================  End of footer area  ====================*/}
                {/*====================  scroll top ====================*/}
                <button className="scroll-top" id="scroll-top">
                    <i className="ion-android-arrow-up" />
                </button>
                {/*====================  End of scroll top  ====================*/}
            </div>
        )
    }
}


export default Footer;