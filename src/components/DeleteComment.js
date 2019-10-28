import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CommentActions from './CommentActions';
import { FaMeteor } from 'react-icons/fa';
import more from '../svgs/more.svg';
//import { TiTrash } from 'react-icons/ti';
import axios from 'axios';
import '../css/CommentActions.css';


class DeleteComment extends Component {
  state = {
    options: false
  }

  toggleOptions = () => {
    this.setState({
      options: !this.state.options
    })
  }

  deleteComment = () => {
    axios({
      method: 'DELETE',
      url: `http://localhost:8080/comments/${this.props.comment_id}`,
      headers: {
        Authorization: localStorage.getItem('chatter token')
      }
    })
      .then((res) => console.log(res));
    this.props.history.go(0);
  }

  render() {
    return (
      <div title="destroy">
        {!this.state.options ? <div className="more-ations-btn" onClick={this.toggleOptions} ><img src={more} alt="More Icon" /></div> :
          <div className="more-actions"><CommentActions /><FaMeteor title="destroy" size="17px" color="#E84855" onClick={this.deleteComment} /></div>}
      </div>
    )
  }
}

export default withRouter(DeleteComment);

//COLORS FOR TRASH
//#E84855 - FAV
//#EF2D56
//F45B69 - FAV
//FF5A5F - FAV
//FF6B6B