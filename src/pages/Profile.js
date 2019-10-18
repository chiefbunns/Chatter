import React, { Component } from 'react';
import '../css/Profile.css';
import profile from '../Images/profile.JPG';

class Profile extends Component {

  render() {
    const user_handle = this.props.match.params.user_handle;
    console.log(user_handle);
    return (
      <div className="app">
        <div>
          <img src={profile} alt="Profile" className="profile-image" />
          <div className="user-handle">@{user_handle}</div>
        </div>
        <div className="stats">271 2.5k 384</div>
        <div className="stats2">Comments | Upvotes | Downvotes</div>

        <hr className="line" />
      </div>
    );
  }
}

export default Profile;
