import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {
    render() {
        return (
            <div className="login-container">
                <input className="username-input" placeholder="username" />
                <input className="password-input" placeholder="password" />
                <div className="login-btn-container">
                    <button className="login-btn">Login</button>
                    <div className="needs-account">need an account? <Link className="sign-up-link" to='/'>sign up</Link></div>
                </div>
            </div>
        )
    }
}

export default Login;