import React, { Component } from "react";
import axios from "axios";
import "../css/Profile.css";
import profile from "../Images/profile.jpg";

class Profile extends Component {
  state = {
    user_handle: "",
    comments: "",
    likes_count: "",
    dislikes_count: ""
  };



  componentDidMount() {
    axios({
      method: "GET",
      url: "http://localhost:8080/profile",
      headers: {
        Authorization: localStorage.getItem("chatter token")
      }
    }).then(res => {
      this.setState({
        user_handle: res.data[0].user_handle
      });
    });
    // axios({
    //   method: "GET",
    //   url: 'http://localhost:8080/likes_dislikes/',
    //   headers: {
    //     Authorization: localStorage.getItem("chatter token")
    //   }
    // }).then(res =>  {
    //   console.log('likes, dislikes', res.data)
    // } )
  }

  render() {
    // const user_handle = this.props.match.params.user_handle;
    // console.log(user_handle);
    return (
      <div className="app">
        <div>
          <img src={profile} alt="Profile" className="profile-image" />
          <div className="user-handle">@{this.state.user_handle}</div>
        </div>
        <div className="stats">271 2.5k 384</div>
        <div className="stats2">Comments | Upvotes | Downvotes</div>

        <hr className="line" />
      </div>
    );
  }
}

export default Profile;
