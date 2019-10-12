import React, { Component } from 'react';
import '../css/Signup.css';

class Signup extends Component {

    render() {
        return (
            <div className="signup-container">
                <input className="username-input" placeholder="username" />
                <input className="email-input" placeholder="email" />
                <input className="password-input" placeholder="password" />
                <input className="confirm-password-input" placeholder="confirm-password" />
                <div className="signup-btn-container" ></div>
                <button className="signup-btn">Signup</button>
            </div>
        )
    };
}

export default Signup;