import React, { Component } from "react";
import axios from "axios";
import Background from "../background.png";


export class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fullname: "",
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
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
        const { fullname, email, username, password, password_confirmation } = this.state;

        axios
            .post(
                "http://localhost:3000",
                {
                    user: {
                        fullname: fullname,
                        email: email,
                        password: password,
                        username: username,
                        password_confirmation: password_confirmation
                    }
                },
                { withCredentials: true }
            )
            .then(response => {
                if (response.data.status === "created") {
                    this.props.handleSuccessfulAuth(response.data);
                }
            })
            .catch(error => {
                console.log("registration error", error);
            });
        event.preventDefault();
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                        <div className="login100-more"><img src={Background} alt="A background"></img></div>
                        <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                            <form className="login100-form validate-form" onSubmit={this.handleChange}>
                                <span className="login100-form-title p-b-59">
                                    Sign Up
                                </span>
                                <div className="wrap-input100 validate-input" data-validate="Name is required">
                                    <span className="label-input100">Full Name</span>
                                    <input className="input100" type="text" name="name" placeholder="Name..." onChange={this.onChange} required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <span className="label-input100">Email</span>
                                    <input className="input100" type="email" name="email" placeholder="Email addess..." onChange={this.handleChange} required />
                                    <span className="focus-input100"></span>
                                </div>
                                <div id="like_button_container"></div>
                                <div className="wrap-input100 validate-input" data-validate="Username is required">
                                    <span className="label-input100">Username</span>
                                    <input className="input100" type="Name" name="username" placeholder="Username..." onChange={this.handleChange} required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Password is required">
                                    <span className="label-input100">Password</span>
                                    <input className="input100" type="password" name="pass" placeholder="*************" onChange={this.handleChange} required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="wrap-input100 validate-input" data-validate="Repeat Password is required">
                                    <span className="label-input100">Repeat Password</span>
                                    <input className="input100" type="password" name="repeat-pass" placeholder="*************" onChange={this.handleChange} required />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="flex-m w-full p-b-33">
                                    <div className="contact100-form-checkbox">
                                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" required />
                                        <label className="label-checkbox100" for="ckb1">
                                            <span className="txt1">
                                                I agree to the
                                        <a href="#" className="txt2 hov1">
                                                    Terms of User
                                        </a>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="container-login100-form-btn">
                                    <div className="wrap-login100-form-btn">
                                        <div className="login100-form-bgbtn"></div>
                                        <button className="login100-form-btn" type="submit">
                                            Sign Up
                                </button>
                                    </div>
                                    <a href="#" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30">                                        
                                        Sign in
                                    <i className="fa fa-long-arrow-right m-l-5"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        ); //<link to={"/Registration"}> Sign in</link> 
    }
}