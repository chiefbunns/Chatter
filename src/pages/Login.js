import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

class Login extends Component {
    state = {
        user_handle: '',
        password: ''
    }

    handleInput = () => {

    }

    render() {
        return (
            <div className="login-container">
                <input className="username-input" name="user_handle" value={this.state.user_handle} placeholder="user_handle" />
                <input className="password-input" name="user_handle" value={this.state.user_handle} placeholder="password" />
                <div className="login-btn-container">
                    <button className="login-btn">Login</button>
                    <div className="needs-account">need an account? <Link className="sign-up-link" to='/signup'>sign up</Link></div>
                </div>
            </div>
        )
    }
}

export default Login;