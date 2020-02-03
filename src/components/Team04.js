import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBIcon } from 'mdbreact';;



class Team04 extends Component {
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
                        <img src='assets/img/team/ma.jpg' className='zoompro' alt=""  onClick={this.toggle} />
                        <MDBModal  isOpen={this.state.modal} toggle={this.toggle} >
                    <MDBModalHeader toggle={this.toggle} > <h1 style={{textAlign: "center" , fontSize: "-webkit-xxx-large"}}>Mukesh Kumar (Director)</h1></MDBModalHeader>
                    <MDBModalBody style={{textAlign: "center"}}>
                    Mukesh holds 10+ years of expertise in the telecom industry.
He has rich experience in planning market strategies and bringing value to the market. Keen on analyzing market demand, he strives to connect customers and bring value.
                    </MDBModalBody>
                    <MDBModalFooter style={{justifyContent: "center"}}>
                        <MDBBtn color="primary" onClick={this.toggle} >Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                    </div>
                    <div className="content">
                        <h3 className="title">Mukesh Kumar</h3>
                        <span>Director</span>
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

export default Team04;
