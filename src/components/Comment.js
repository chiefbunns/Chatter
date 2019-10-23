import React, { Component } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import '../css/Comment.css';
import FireAndIce from './FireAndIce';
import { Link } from 'react-router-dom';
import DeleteComment from './DeleteComment';

//POSSIBLY DELETE?
//import axios from 'axios';
//import CommentActions from '../components/CommentActions';
//import userIconSmall from '../svgs/user-icon-s.svg';

class Comment extends Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    dayjs.extend(relativeTime)
    return (
      <div className="comment" key={this.props.comment_id} onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
        <div className="comment-side-bar">
          {/* <img className="user-icon-small" src={userIconSmall} alt="User Icon Small" /> */}
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
          {/* <CommentActions /> */}

          {
<<<<<<< HEAD
          this.state.isHovering &&
          <div className="delete-comment">
           <DeleteComment comment_id={this.props.comment_id}/>
          </div>
=======
            this.state.isHovering &&
            <div className="delete-comment">
              <DeleteComment comment_id={this.props.comment_id} />
            </div>
>>>>>>> master
          }

        </div>
      </div>
    )
  }
}

export default Comment;