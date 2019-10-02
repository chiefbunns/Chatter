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
        name : e.target.value
    })
}

onChangeEmail = (e) => {
    this.setState({
        email : e.target.value
    })   
}

onChangePassword = (e) => {
    this.setState({
        password : e.target.value
    })   
}

onSubmit =() => {
    const profile_info = {
        name: this.state.name,
        email: this.state.email,
        Password: this.state.password
    }
axios.post('http://localhost3000/profile', profile_info)
.then (res => console.log(res.data))

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
        <form onSubmit={this.onSubmit}>
        <div className="edit-name">NAME</div>
        <input className="input" placeholder="Edit Display Name" value={this.state.name} onChange={this.onChangeName}  />
        <div className="edit-name">EMAIL</div>
        <input className="input" placeholder="Edit Email Address" value={this.state.email} onChange={this.onChangeEmail}/>
        <div className="edit-name">PASSWORD</div>
        <input type ="password" className="input" placeholder="Change Password" value={this.state.password} onChange={this.onChangePassword}/>
        {/* <button type="submit" value="Update Profile Information">Submit</button> */}
        </form>
        


      </div>
    );
  }
}

export default Profile;
