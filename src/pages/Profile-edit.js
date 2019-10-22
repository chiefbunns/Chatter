import React, { Component } from "react";
import "../css/profile-edit.css";
import axios from "axios";
import profile from "../Images/profile.JPG";

class Profile extends Component {
  state = {
    name: "",
    email: ""
  };

  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://localhost:8080/profile',
      headers: {
        Authorization: localStorage.getItem('chatter token')
      }
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          name: res.data[0].user_handle,
          email: res.data[0].email
        })
      }
      )
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value
    });
  };


  onSubmit = () => {

    axios({
      method: 'PUT',
      url: 'http://localhost:8080/profile/edit',
      data: {
        user_handle: this.state.name,
        email: this.state.email
      },
      headers: {
        Authorization: localStorage.getItem('chatter token')
      }
    })
      .then((res) => console.log(res.data));


    this.setState({
      name: "",
      email: ""
    });
  };

  render() {
    return (
      <div className="edit-profile-container">
        <div className="edit-profile-image-container">
          <div className="edit-profile">Edit Profile</div>
          <img src={profile} alt="Profile" className="edit-profile-image" />
        </div>
        <input
          className="edit-input"
          placeholder="edit user handle"
          value={this.state.name}
          onChange={this.onChangeName}
        />
        <input
          className="edit-input"
          placeholder="edit email"
          value={this.state.email}
          onChange={this.onChangeEmail}
        />
        <button className="save-edits-btn" onClick={this.onSubmit}>
          Save
        </button>
      </div>
    );
  }
}

export default Profile;
