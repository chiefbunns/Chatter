import React, { Component } from 'react';
import { FaMeteor } from 'react-icons/fa';
//import { TiTrash } from 'react-icons/ti';
import axios from 'axios';
import '../css/Comment.css';


class DeleteComment extends Component {

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
        return (
            <div title="destroy" className="delete-comment">
              <FaMeteor title="destroy" size="17px" color="#E84855" onClick={this.deleteComment}/>
            </div>
        )
    }
}

export default DeleteComment;

//COLORS FOR TRASH
//#E84855 - FAV
//#EF2D56
//F45B69 - FAV
//FF5A5F - FAV
//FF6B6B