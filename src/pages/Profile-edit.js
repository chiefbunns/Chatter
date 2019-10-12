import React, { Component } from 'react';
import '../css/profile-edit.css';
import axios from 'axios';
import profile from '../Images/profile.JPG';

class Profile extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit = () => {
        const profile_info = {
            user_handle: this.state.name,
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:8080/profile/edit', profile_info)
            .then(res => console.log(res.data))

        this.setState({
            name: "",
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div className="app">
                <div className='edit-profile'>Edit Profile</div>
                <div>
                    <img src={profile} alt="Profile" className="profile" />
                </div>
                <input className="input" placeholder="Edit Display Name" value={this.state.name} onChange={this.onChangeName} />
                <input className="input" placeholder="Edit Email Address" value={this.state.email} onChange={this.onChangeEmail} />
                <input type="password" className="input" placeholder="Change Password" value={this.state.password} onChange={this.onChangePassword} />
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        );
    }
}

export default Profile;
