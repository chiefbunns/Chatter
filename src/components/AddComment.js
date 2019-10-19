import React from 'react';
import Textarea from 'react-textarea-autosize';
import axios from 'axios';
import '../css/AddComment.css';
import addIconLarge from '../svgs/add-icon-large.svg';
import addIcon from '../svgs/add-icon.svg';
import closeIcon from '../svgs/close-icon.svg';
import { getPageUrl } from '../url';


class AddComment extends React.Component {
  state = {
    user_handle: "",
    commentBox: false,
    commentText: "",
  }

  refresh = async () => {
    try {
      const page_url = await getPageUrl();
      console.log('home',
        page_url)
      const { data: comments } = await axios.get(`http://localhost:8080/page_comments?page_url=${encodeURIComponent(page_url)}`)
      this.setState({ comments })
    } catch (error) {
      console.log('refresh', error)
    }
  }

  setUserHandle = () => {
    this.setState({
      userHandle: !this.state.userHandle
    })
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

  createComment = async () => {
    const page_url = await getPageUrl();
    
    console.log('AddComments', page_url)

    const token = localStorage.getItem('chatter token')
    axios({
      method: 'POST',
      url: 'http://localhost:8080/post/comment',
      data: {
        user_handle: "mh222",
        page_url,
        body: this.state.commentText,
        created_at: new Date().toISOString(),
        likes_count: 0,
        dislikes_count: 0,
        replies_count: 0
      },
      headers: {
        Authorization: token
      }
    })

      .then((res) => console.log(res.data));
    this.setState({
      commentBox: false,
      commentText: "",
    })
    this.refresh();
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