import React, { Component } from "react";
import axios from "axios";



export default class Registration extends Component {
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
            .post("http://localhost:3001/registrations",
                {
                    user:
                    {
                        fullname: fullname,
                        email: email,
                        username: username,
                        password: password,
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
}