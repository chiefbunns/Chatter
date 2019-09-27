import React, { Component } from 'react';
import '../App.css';
//import axios from 'axios';
import addIcon from '../svgs/add-icon.svg';

class AddComment extends Component {
    render() {
      return (
        <div className="add-comment">
        <input className="add-comment-input" placeholder="Add Comment..." />
        <img src={addIcon} alt="Add Icon" />
      </div>
      )
    }
  
  }
  
  export default AddComment;