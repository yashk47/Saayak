
import React, { Component } from 'react';
import Team01 from './Team01';
import Team02 from './Team02';
import Team03 from './Team03';
import Team04 from './Team04';
class TeamMemberGrid extends Component {

    render() {
        return (
            <div className="fil">
                {/*====================  team member area ====================*/}
                <div className="team-member-area section-space--inner--60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title-area text-center">
                                    <h2 className="section-title section-space--bottom--50">Our Team <span className="title-icon" /></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="team-member-wrapper">
                                    <div className="row" style={{ justifyContent: "center" }}>
                                    
                                    <Team01/>
                                    <Team02/>
                                    <Team03/>
                                    <Team04/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====================  End of team member area  ====================*/}
            </div>
        )
    }
}

export default TeamMemberGrid;