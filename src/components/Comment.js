import React, { Component } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
//import axios from 'axios';
import '../css/Comment.css';
import CommentActions from '../components/CommentActions';
import userIconSmall from '../svgs/user-icon-s.svg';
import FireAndIce from './FireAndIce';

class Comment extends Component {

  render() {
    dayjs.extend(relativeTime)
    return (
      <div className="comment" key={this.props.id}>
        <div className="comment-side-bar">
          <img className="user-icon-small" src={userIconSmall} alt="User Icon Small" />
          <div className="text-subtle-2">{dayjs(this.props.created_at).fromNow()}</div>
          <FireAndIce />
        </div>
        <div className="comment-content">
          <div>
            <div className="commentor-username">
              {this.props.user_handle}
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