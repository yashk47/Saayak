import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import FeatureIcon from '../components/FeatureIcon';
import Funfact from '../components/Funfact';
import TeamMemberGrid from '../components/TeamMemberGrid';

import Footer from '../components/Footer2';
import MobileMenu from '../components/MobileMenu';
import ModalVideo from 'react-modal-video'
class About extends Component{

    constructor () {
        super()
        this.state = {
          isOpen: false
        }
        this.openModal = this.openModal.bind(this)
      }
     
      openModal () {
        this.setState({isOpen: true})
      }

    render(){
        return(
            <div>

                {/* Navigation bar */}
                <NavBar/>
                
                {/* breadcrumb */}
                {/*====================  breadcrumb area ====================*/}
                <div className="breadcrumb-area breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page-banner text-center">
                                    <h1>About Us</h1>
                                    <ul className="page-breadcrumb">
                                        <li><a href="/">Home</a></li>
                                        <li>About Us</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of breadcrumb area  ====================*/}

                <div className="page-wrapper section-space--inner--top--120">
                {/*About section start*/}
                <div className="about-section section-space--inner--bottom--120">
                <div className="container" >
                   <div className="about-content-two" style={{textAlignLast: "center" , textAlign: "-webkit-center"}}>
                        <h1>Welcome to Sayakk</h1>
                        <h3>We are committed to providing a world class services</h3>
                        <h4>Sayakk is committed to providing a world class, smooth business to shippers and truckers making their delivery pace as swift as an arrow.</h4>
                        <p>Founded in Jan 2020, Sayakk thrives to become India's No.1 trucking platform, enabling truckers to book a load and shippers to access the right truck with the best price with just one click.</p>
                        <a href="/contact-us" className="ht-btn--default ht-btn--default--dark-hover section-space--top--20">Contact Us</a>
                    </div>
                    
                    
                </div>
                </div>
            
                 {/* Team member */}
                 <TeamMemberGrid/>


                {/* Feature Icon */}
                <FeatureIcon background = "grey-bg"/>

               
                
            
                
               
                
                
                
                

                </div>


                {/* Footer */}
                <Footer/>

                {/* Mobile Menu */}
                <MobileMenu/>

            </div>
        )
    }
}


export default About;