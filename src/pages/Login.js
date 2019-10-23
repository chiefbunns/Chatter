import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/Login.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        const body = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:8080/users/authenticate', body)
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('chatter token', res.data)
                    this.props.history.push('/');
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                alert('Error logging in please try again');
            });
    }

    render() {
        return (
            <div className="login-container">

                <input
                    type="email"
                    className="username-input"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    required
                />
                <input
                    type="password"
                    className="password-input"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    required
                />
                <div className="login-btn-container">
                    <button className="login-btn" onClick={this.onSubmit}>Login</button>
                    <div className="needs-account">need an account? <Link className="sign-up-link" to='/signup'>sign up</Link></div>
                </div>
            </div>
        );
    }
}