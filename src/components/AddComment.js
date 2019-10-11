import React from 'react';
import Textarea from 'react-textarea-autosize';
import axios from 'axios';
import '../css/AddComment.css';
import addIconLarge from '../svgs/add-icon-large.svg';
import addIcon from '../svgs/add-icon.svg';
import closeIcon from '../svgs/close-icon.svg';

class AddComment extends React.Component {
  state = {
    commentBox: false,
    commentText: "",
  }

  setCommentBox = () => {
    this.setState({
      commentBox: !this.state.commentBox
    })
  }

  setCommentText = (e) => {
    this.setState({
      commentText: e.target.value
    })
  }

  createComment = () => {
    const comment = {
      user_handle: "knorty",
      page_url: "https://espn.com",
      body: this.state.commentText,
      created_at: new Date().toISOString(),
      likes_count: 0,
      dislikes_count: 0,
      replies_count: 0,
    }
    console.log(comment);

    axios
      .post('http://localhost:8080/post/comment', comment)
      .then((res) => console.log(res.data));
    this.setState({
      commentBox: false,
      commentText: "",
    })
  }

  render() {
    return (
      this.state.commentBox === false ?
        <button className="add-comment-btn" onClick={this.setCommentBox}>
          <img src={addIconLarge} alt="Add Icon" />
        </button> :
        <div className="add-comment">
          <Textarea className="comment-textarea" value={this.state.commentText} onChange={this.setCommentText} placeholder="Type Comment Here"></Textarea>
          <div className="add-comment-options">
            <button className="close-btn" onClick={this.setCommentBox}>
              <img src={closeIcon} alt="Close Icon" />
            </button>
            <button className="post-comment-btn" onClick={this.createComment}>
              <img src={addIcon} alt="Add Icon" />
            </button>
          </div>
        </div>

    )
  }
}

export default AddComment;