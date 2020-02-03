import React, { Component } from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter ,MDBIcon} from 'mdbreact';



class Team01 extends Component {
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
                        <img src='assets/img/team/av.jpg' className='zoompro' alt=""  onClick={this.toggle} />
                        <MDBModal  isOpen={this.state.modal} toggle={this.toggle} >
                    <MDBModalHeader toggle={this.toggle} > <h1 style={{textAlign: "center" , fontSize: "-webkit-xxx-large"}}>Avinash Gill (Founder)</h1></MDBModalHeader>
                    <MDBModalBody style={{textAlign: "center"}}>
                    A young entrepreneur with immense zeal to stand out, Avinash handles the end to end delivery of load and solves business problems using technology. Avinash controls the in and out of inventory management making Sayakk, reliable and smooth.
                    </MDBModalBody>
                    <MDBModalFooter style={{justifyContent: "center"}}>
                    <MDBIcon icon="envelope" /><a href="mailto:avinash@sayakk.com">avinash@sayakk.com</a><span><MDBIcon icon="phone-alt" /><a href="tel://+919462789480">+91 94627 89480</a> </span>
                    </MDBModalFooter>
                    <MDBModalFooter style={{justifyContent: "center"}}>
                        <MDBBtn color="primary" onClick={this.toggle} >Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
                    </div>
                    <div className="content">
                        <h3 className="title">Avinash Gill</h3>
                        <span>Founder</span>
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

export default Team01;
