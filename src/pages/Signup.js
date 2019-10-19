import React, { Component } from 'react';
import '../css/Signup.css';
import axios from 'axios';

class Signup extends Component {
    state = {
        user_handle: '',
        email: '',
        password: '',
        confirm_password: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        const credentials = {
            user_handle: this.state.user_handle,
            email: this.state.email,
            password: this.state.password
        }

        axios.post('http://localhost:8080/createuser', credentials)
            .then(res => console.log(res.data))
        this.setState({
            user_handle: '',
            email: '',
            password: '',
            confirm_password: ''
        })
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="signup-container">
                <input className="username-signup-input" name="user_handle" value={this.state.user_handle} placeholder="user handle" onChange={this.handleInput} />
                <input className="signup-email-input" name="email" value={this.state.email} placeholder="email" onChange={this.handleInput} />
                <input className="password-signup-input" name="password" value={this.state.password} placeholder="password" onChange={this.handleInput} />
                <input className="confirm-password-input" name="confirm_password" value={this.state.confirm_password} placeholder="confirm password" onChange={this.handleInput} />
                <div className="signup-btn-container" ></div>
                <button className="signup-btn" onClick={this.onSubmit}>Signup</button>
            </div>
        )
    };
}

export default Signup;