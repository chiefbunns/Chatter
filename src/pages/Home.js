import React, { Component } from 'react';
import '../css/Home.css';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
import axios from 'axios';

class Home extends Component {
    state = {
        comments: null
    }
    componentDidMount() {
      axios
        .get('/comments')
        .then((res) => {
            this.setState({
                comments: res.data
            })
        })
        .catch((err) => console.log(err));
    }
    render() {
        let recentCommentsMarkup = this.state.comments ? (
            this.state.comments.map((comment) => <p>{comment.body}</p>) //<Comment comment={comment.body}/><p>{comment.body}</p><Comment key={comment.commentId} comment={comment.body}/>
        ) : (
        <p>Loading...</p>
        )
        return (
            <div className="comments-body">
                <AddComment />
                <div className="comment-section">
                    <Comment />
                    {recentCommentsMarkup}
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        )
    }
}

export default Home;