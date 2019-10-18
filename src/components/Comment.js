import React, { Component } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import axios from 'axios';
import '../css/Comment.css';
import CommentActions from '../components/CommentActions';
import userIconSmall from '../svgs/user-icon-s.svg';
import FireAndIce from './FireAndIce';
import { Link } from 'react-router-dom';

class Comment extends Component {

  deleteComment = () => {
    axios({
      method: 'DELETE',
      url: `http://localhost:8080/comments/${this.props.comment_id}`,
      headers: {
        Authorization: localStorage.getItem('chatter token')
      }
    })
      .then((res) => console.log(res));
  }

  render() {
    dayjs.extend(relativeTime)
    console.log(this.props.comment_id)
    return (
      <div className="comment" key={this.props.comment_id}>
        <div className="comment-side-bar">
          <img className="user-icon-small" src={userIconSmall} alt="User Icon Small" />
          <FireAndIce
            comment_id={this.props.comment_id}
          />
        </div>
        <div className="comment-content">
          <div>
            <div>
              <Link className="commentor-username" to={`/profile/${this.props.user_handle}`}>{this.props.user_handle}</Link>
            </div>
            <div className="text-subtle-2">{dayjs(this.props.created_at).fromNow()}</div>
            <div className="comment-text">
              {this.props.body}
            </div>
          </div>
          <CommentActions />
          <button onClick={this.deleteComment}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Comment;