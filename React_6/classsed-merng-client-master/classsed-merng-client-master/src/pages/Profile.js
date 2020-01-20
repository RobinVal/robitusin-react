import React, { Component } from 'react';


export default class Profile extends React.Component{
    
    render(){
        return(
            <div>
                <nav className="navbar na   vbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
                    <a className="navbar-brand js-scroll-trigger" href="#page-top">
                        <span className="d-block d-lg-none">Clarence Taylor</span>
                        <span className="d-none d-lg-block">
                            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="Profile" />
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
                            </li>
                        </ul>
                       </div>
                </nav>

                <div className="container-fluid p-0">
                    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
                        <div className="w-100">
                            <h1 className="mb-0">{this.props.username}
                                <span className="text-primary">{this.props.username}</span>
                            </h1>
                            <div className="subheading mb-5">Jateční 33a, 170 00 Praha 7-Holešovice · (420) 111-111-111 ·
                                <a href="mailto:name@email.com">{this.props.email}</a>
                                
                                <a href=""><span className="text-primary">Edit</span></a>
                            </div>                            
                            <p className="lead mb-5">Some information about the person</p>
                            <button className="button">
                                AddFriend
                            </button>
                            <button className="button">
                                Write Message
                            </button>
                        </div>
                        </section>
                </div>                    
            </div>    
        );

    }       


   

}