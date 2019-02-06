import React, { Component } from 'react'

import SignUp from './SignUp';
import SignIn from './SignIn;'
import { setJwt } from "../services/authService";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                email: "",
                password: "",
                name: "",
                phone: ""
            }
        };
    }

    handleRequest(user) {
        const url = 'http://localhost:3001/providers';

        url += this.props.form === "signup" ? "/users" : "/auth";
        console.log(url);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setJwt(data.token);
                this.props.onLogin();
            })
            .catch(error => {
                console.log(error);
            });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.handleRequest(this.state.data);
    };
    handleChange = ({ currentTarget: input }) => {
        const data = { ... this.state.data };
        data[input.name] = input.value;
        this.setState({ data });
    };

    renderInput = (name, lable, type = "text") => {
        const { data } = this.state;
        // const data = this.state.data

        return (
            <Input
                name={name}
                lable={lable}
                type={type}
                value={data[name]}
                onChange={this.handleChange}
            />
        );
    };
    render() {
        return (
            <div>
                {this.props.form === "signup" ? (
                    <SignUp
                        renderInput={this.renderInput}
                        handleSubmit={this.handleSubmit}
                    />
                ) : (
                        <SignIn
                            renderInput={this.renderInput}
                            handleSubmit={this.handleSubmit}
                        />
                    )}
            </div>
        );
    }
}

export default Form;