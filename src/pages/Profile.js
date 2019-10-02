import React, { Component } from 'react';
import '../css/Profile.css';
import profile from '../Images/profile.JPG';

class Profile extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <img src={profile} alt="Profile" className="profile" />
          <div className="profile-name">Carson Bunnell</div>
        </div>
        <div className="title">C******25@gmail.com</div>
        <div className="stats">271 2.5k 384</div>
        <div className="stats2">Comments | Upvotes | Downvotes</div>

        <hr className="line" />
      </div>
    );
  }
}

export default Profile;
