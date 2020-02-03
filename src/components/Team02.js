import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter,MDBIcon } from 'mdbreact';



class Team02 extends Component {
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
                        <img src='assets/img/team/d.jpg' className='zoompro' alt=""  onClick={this.toggle} />
                        <MDBModal  isOpen={this.state.modal} toggle={this.toggle} >
                    <MDBModalHeader toggle={this.toggle} > <h1 style={{textAlign: "center" , fontSize: "-webkit-xxx-large"}}>Dinesh Bishnoi (Co-Founder)</h1></MDBModalHeader>
                    <MDBModalBody style={{textAlign: "center"}}>
                    Dinesh brings a rich experience of the tracking business and monitors the recent trends and marketing strategy all around connecting shippers and trackers at a very reasonable price.
                    </MDBModalBody>
                    <MDBModalFooter style={{justifyContent: "center"}}>
                    <MDBIcon icon="envelope" /><a href="mailto:dinesh@sayakk.com">dinesh@sayakk.com</a>
                    </MDBModalFooter>
                    <MDBModalFooter style={{justifyContent: "center"}}>
                        <MDBBtn color="primary" onClick={this.toggle} >Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                    </div>
                    <div className="content">
                        <h3 className="title">Dinesh Bishnoi</h3>
                        <span>Co-Founder</span>
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

export default Team02;
