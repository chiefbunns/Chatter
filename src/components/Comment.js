import React, { Component } from 'react';
//import axios from 'axios';
import '../css/Comment.css';
import CommentActions from '../components/CommentActions';
import userIconSmall from '../svgs/user-icon-s.svg';
import FireAndIce from './FireAndIce';

class Comment extends Component {
  
  render() {
    // const { comment : { body, createdAt, userHandle, commentId} } = this.props //late we add {userImage, upVote, downVote, commentCount} 
    return (
      <div className="comment" key={this.props.id}>
        <div className="comment-side-bar">
          <img className="user-icon-small" src={userIconSmall} alt="User Icon Small" />
          <div className="text-subtle-2">2d</div>
          <FireAndIce />
        </div>
        <div className="comment-content">
          <div>
           <div className="commentor-username">
            {this.props.userHandle}
            </div>
          <div className="comment-text">
          {this.props.body}
          </div>
          </div>
          <CommentActions />
        </div>
      </div>
    )
  }
}

export default Comment;