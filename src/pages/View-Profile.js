import React, { Component } from "react";
// import axios from "axios";
import "../css/Profile.css";
import avatar from "../Images/profile.jpg";

class viewProfile extends Component {
    state = {
        user_handle: ''
    }

    componentDidMount() {
        console.log(this.props.match.params.user_handle)
        // axios({
        //     method: "GET",
        //     url: `http://localhost:8080/user_profile/${this.props.match.params.user_handle}`,
        //     headers: {
        //         Authorization: localStorage.getItem("chatter token")
        //     }
        // }).then(res => {
        //     this.setState({
        //         user_handle: res.data[0].user_handle
        //     });
        // });
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
        return (
            <div className="profile-container">
                <div className="user-container">
                    <img src={avatar} alt="Profile" className="profile-image" />
                    <div className="user-handle">@{this.props.match.params.user_handle}</div>
                </div>
                <div className="stats">271 2.5k 384</div>
                <div className="stats2">Comments | Upvotes | Downvotes</div>

                <hr className="line" />
            </div>
        );
    }
}

export default viewProfile;
