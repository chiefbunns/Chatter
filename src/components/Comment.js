import React, { Component } from 'react';
//import axios from 'axios';
import '../css/Comment.css';
import CommentActions from '../components/CommentActions';
import userIconSmall from '../svgs/user-icon-s.svg';
import plus from '../svgs/plus.svg';
import minus from '../svgs/minus.svg';


class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <div className="comment-side-bar">
          <img className="user-icon-small" src={userIconSmall} alt="User Icon Small" />
          <div className="text-subtle-2">2d</div>
          <img className="plus icon-scale" src={plus} alt="Plus" />
          <div className="text-subtle-2">134</div>
          <img className="minus icon-scale" src={minus} alt="Minus" />
          <div className="text-subtle-2">23</div>
        </div>
        <div className="comment-content">
          <div className="commentor-username">
            noobmaster69
            </div>
          <div className="comment-text">
            Lorem ipsum dolor amet wolf tumblr PBRB poke, narwhal kale chips leggings
            flannel salvia iPhone sriracha. You probably haven't heard of them cardigan
            intelligentsia succulents activated charcoal cred.
          </div>
          <CommentActions />
        </div>
      </div>
    )
  }
}

export default Comment;