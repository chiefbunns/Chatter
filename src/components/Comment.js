import React, { Component } from 'react';
//import axios from 'axios';
import '../css/Comment.css';
import CommentActions from '../components/CommentActions';
import userIconSmall from '../svgs/user-icon-s.svg';
import FireAndIce from './FireAndIce';

class Comment extends Component {
  
  render() {
    //const { comment : { body, createdAt, handle, commentId} } = this.props //late we add {userImage, upVote, downVote, commentCount} 
    return (
      <div className="comment">
        <div className="comment-side-bar">
          <img className="user-icon-small" src={userIconSmall} alt="User Icon Small" />
          <div className="text-subtle-2">2d</div>
          <FireAndIce />
        </div>
        <div className="comment-content">
          <div className="commentor-username">
            waknbake420blazeit
            </div>
          <div className="comment-text">
          Bacon ipsum dolor amet doner t-bone chicken strip steak kielbasa biltong. 
          Strip steak burgdoggen bacon shankle tail pastrami buffalo pork chop alcatra prosciutto meatloaf pork. 
          Beef ribs meatball drumstick kevin venison frankfurter. Bacon rump picanha pork chop fatback.
          </div>
          <CommentActions />
        </div>
      </div>
    )
  }
}

export default Comment;