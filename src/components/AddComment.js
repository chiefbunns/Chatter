import React, { useState } from 'react';
import Textarea from 'react-textarea-autosize';
//import axios from 'axios';
import '../css/AddComment.css';
import addIconLarge from '../svgs/add-icon-large.svg';
import addIcon from '../svgs/add-icon.svg';
import closeIcon from '../svgs/close-icon.svg';

const AddComment = () => {

  const [commentBox, setCommentBox] = useState(false);

  return (
    commentBox === false ?
      <button className="add-comment-btn" onClick={() => setCommentBox(!commentBox)}>
        <img src={addIconLarge} alt="Add Icon" />
      </button> :
      <div className="add-comment">
        <Textarea className="comment-textarea" placeholder="Type Comment Here"></Textarea>
        <div className="add-comment-options">
          <button className="close-btn" onClick={() => setCommentBox(!commentBox)}>
            <img src={closeIcon} alt="Close Icon" />
          </button>
          <button className="post-comment-btn">
            <img src={addIcon} alt="Add Icon" />
          </button>
        </div>
      </div>
  )
}

export default AddComment;