import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBIcon } from 'mdbreact';



class Team03 extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {


        /* team member data */


        return ( 

            <div className="col-lg-3 col-sm-6 col-12 section-space--bottom--30 ">
                
                <div className="team " >

                    <div className="image">
                        <img src='assets/img/team/k.jpg' className='zoompro' alt=""  onClick={this.toggle} />
                        <MDBModal  isOpen={this.state.modal} toggle={this.toggle} >
                    <MDBModalHeader toggle={this.toggle} > <h1 style={{textAlign: "center" , fontSize: "-webkit-xxx-large"}}>Komal (Managing Director)</h1></MDBModalHeader>
                    <MDBModalBody style={{textAlign: "center"}}>
                    Having extensive expertise in research and management, Komal is responsible to expand business and customer relations widely. She is a technical expert and has a good command of technology thus making herself deal with customers and make them move fast with growing technology.
                    </MDBModalBody>
                    <MDBModalFooter style={{justifyContent: "center"}}>
                    <MDBIcon icon="envelope" /><a href="mailto:komal@sayakk.com">komal@sayakk.com</a>
                    </MDBModalFooter>
                    <MDBModalFooter style={{justifyContent: "center"}}>
                        <MDBBtn color="primary" onClick={this.toggle} >Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                    </div>
                    <div className="content">
                        <h3 className="title">Komal</h3>
                        <span>Managing Director</span>
                        <div className="social">
                            <a href="#" className="facebook"><MDBIcon fab icon="facebook-f" /></a>
                            <a href='#' className="linkedin"><MDBIcon fab icon="linkedin" /></a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Team03;
