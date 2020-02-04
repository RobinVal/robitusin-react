import React, { Component } from "react";
import axios from "axios";
import Background from "../background.png";


export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            loginErrors: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { email, password } = this.state;

        axios
            .post(
                "http://localhost:3001/sessions",
                {
                    user: {
                        email: email,
                        password: password
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                console.log("res from login", response);
                //if (response.data.logged_in) {
                //    this.props.handleSuccessfulAuth(response.data);
                //}
            })
            .catch(error => {
                console.log("login error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <div className="login100-more"><img src={Background} alt="A background"></img></div>
                        <form className="login100-form validate-form" onSubmit={this.handleChange}>
                            <span className="login100-form-title p-b-59">
                                Sign in
                          </span>

                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <span className="label-input100">Email</span>
                                <input className="input100" type="email" name="email" placeholder="Email addess..." value={this.state.email} onChange={this.handleChange} required />
                                <span className="focus-input100"></span>
                            </div>
                            <div id="like_button_container"></div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <span className="label-input100">Password</span>
                                <input className="input100" type="password" name="pass" placeholder="*************" onChange={this.onChange} required />
                                <span className="focus-input100"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30" >
                                        Sign Up
                                    <i className="fa fa-long-arrow-right m-l-5"></i>
                                    </a>                                    
                                </div>
                                <button className="login100-form-btn" type="submit" >
                                    Sign in
                                </button>                                     
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}