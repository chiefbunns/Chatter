import React from 'react';
//import axios from 'axios';
import addIcon from '../svgs/add-icon.svg';

const AddComment = () => {
  return (
    <div className="add-comment">
      <input className="add-comment-input" placeholder="Add Comment..." />
      <img src={addIcon} alt="Add Icon" />
    </div>
  )
}

export default AddComment;