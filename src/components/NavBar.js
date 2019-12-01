import React, {Component} from 'react';
class NavBar extends Component{
    render(){
        return(
            <div>
                {/*====================  header area ====================*/}
                <div className="header-area header-sticky header-sticky--default">
                    <div className="header-area__desktop header-area__desktop--default">
                    {/*=======  header navigation area  =======*/}
                    <div className="header-navigation-area default-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    {/* header navigation */}
                                    <div className="header-navigation header-navigation--header-default position-relative">
                                        <div className="header-navigation__nav position-static">
                                        <nav>
                                            <ul>
                                            <li>
                                                <a href={`${process.env.PUBLIC_URL}/`}>HOME</a>
                                            </li>
                                            {/* <li><a href={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</a></li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/services`}>SERVICE</a>
                                                <ul className="submenu">
                                                <li><a href={`${process.env.PUBLIC_URL}/services`}>Service Page</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}>Service Details Left Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}>Service Details Right Sidebar</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/projects`} >PROJECT</a>
                                                <ul className="submenu">
                                                <li><a href={`${process.env.PUBLIC_URL}/projects`} >Project Page</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/project-details`}>Project Details</a></li>
                                                </ul>
                                            </li>
                                            <li className="has-children has-children--multilevel-submenu">
                                                <a href={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>BLOG</a>
                                                <ul className="submenu">
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog Left Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>Blog Right Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}>Blog Details Left Sidebar</a></li>
                                                <li><a href={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}>Blog Details Right Sidebar</a></li>
                                                </ul>
                                            </li> */}
                                            <li><a href={`${process.env.PUBLIC_URL}/contact-us`}>CONTACT</a> </li>
                                            </ul>
                                        </nav>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/*=======  End of header navigation area =======*/}
                    {/*=======  header info area  =======*/}
                    <div className="header-info-area">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-12">
                                <div className="header-info-wrapper align-items-center">
                                    {/* logo */}
                                    <div className="logo">
                                    <a href={`${process.env.PUBLIC_URL}/home-one`}>
                                        <img src="assets/img/logo/logo.png" className="img-fluid" alt="Logo" />
                                    </a>
                                    </div>
                                    {/* header contact info */}
                                    <div className="header-contact-info">
                                    <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-smartphone-android" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Phone</h6>
                                        <p className="header-info-single-item__subtitle">+91 94627 89480</p>
                                        </div>
                                    </div>
                                     <div className="header-info-single-item">
                                        <div className="header-info-single-item__icon">
                                        <i className="zmdi zmdi-email" />
                                        </div>
                                        <div className="header-info-single-item__content">
                                        <h6 className="header-info-single-item__title">Mail</h6>
                                        <p className="header-info-single-item__subtitle">avinash@sayakk.com</p>
                                        </div>
                                    </div>
                                    </div>
                                    {/* mobile menu */}
                                    <div className="mobile-navigation-icon" id="mobile-menu-trigger">
                                        <i />
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                    </div>
                    {/*=======  End of header info area =======*/}
                    
                    </div>
                </div>
                {/*====================  End of header area  ====================*/}
            </div>
        )
    }
}


export default NavBar;