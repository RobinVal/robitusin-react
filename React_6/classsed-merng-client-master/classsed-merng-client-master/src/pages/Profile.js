import React, { Component } from 'react';


export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = { username: '' };
    
        //this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        //this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
      }
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
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
                    <div className="backgroundWhite">  
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

                    <hr class="m-0" />

                    <section class="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                        <div class="w-100">
                            <h2 class="mb-5">Experience</h2>
                            <div className="backgroundWhite">
                            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="resume-content">
                                    <h3 class="mb-0">Senior Web Developer</h3>
                                    <div class="subheading mb-3">Intelitec Solutions</div>
                                    <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                                </div>
                                <div class="resume-date text-md-right">
                                    <span class="text-primary">March 2013 - Present</span>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <a href=""><span class="text-primary">Edit</span></a>
                                </div>
                            </div>
                            <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div class="resume-content">
                                    <h3 class="mb-0">Web Developer</h3>
                                    <div class="subheading mb-3">Intelitec Solutions</div>
                                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                                </div>
                            <div class="resume-date text-md-right">
                                <span class="text-edit">December 2011 - March 2013</span>
                                <br/>
                                <br/>
                                <br/>
                                <a href=""><span class="text-primary">Edit</span></a>
                            </div>
                        </div>
                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="resume-content">
                            <h3 class="mb-0">Web Developer</h3>
                            <div class="subheading mb-3">Intelitec Solutions</div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                            </div>
                            <div class="resume-date text-md-right">
                                <span class="text-edit">December 2011 - March 2013</span>
                                <br/>
                                <br/>
                                <br/>
                                <a href=""><span class="text-primary">Edit</span></a>
                            </div>
                        </div>
                        <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="resume-content">
                                <h3 class="mb-0">Junior Web Designer</h3>
                                <div class="subheading mb-3">Shout! Media Productions</div>
                                <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                            </div>
                            <div class="resume-date text-md-right">
                                <span class="text-primary">July 2010 - December 2011</span>
                                <br/>
                                <br/>
                                <br/>
                                <a href=""><span class="text-primary">Edit</span></a>
                            </div>
                        </div>

                     <div class="resume-item d-flex flex-column flex-md-row justify-content-between">
                        <div class="resume-content">
                            <h3 class="mb-0">Web Design Intern</h3>
                            <div class="subheading mb-3">Shout! Media Productions</div>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                        </div>
                        <div class="resume-date text-md-right">
                            <span class="text-primary">September 2008 - June 2010</span>
                            <br/>
                            <br/>
                            <br/>
                            <a href=""><span class="text-primary">Edit</span></a>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
                
                        </div>
                        
                </div>
   
        )
  
        

    }       


   

}