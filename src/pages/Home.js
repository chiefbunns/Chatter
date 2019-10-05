import React, { Component } from 'react';
import '../css/Home.css';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
import axios from 'axios';

class Home extends Component {
    state = {
        comments: null
    }

    refresh = () => {
        axios
        .get('/comments')
        .then((res) => {
            this.setState({
                comments: res.data
            })
            console.log(this.state.comments);
        })
        .catch((err) => console.log(err));
    }

    componentDidMount() {
    
      axios
        .get('/comments')
        .then((res) => {
            this.setState({
                comments: res.data
            })
            console.log(this.state.comments);
        })
        .catch((err) => console.log(err));
    }
    render() {
        if (!this.state.comments) return <div>69</div>
            const comments = this.state.comments.map((comment) => {
                return (<Comment 
                    id={comment.commentId} 
                    body={comment.body} 
                    createdAt={comment.createdAt} 
                    userHandle={comment.userHandle}
                    />
                    )
                }
                )
        return (
            <div className="comments-body" onClick={() => this.refresh()}>
                <AddComment />
                <div className="comment-section">
                    {comments}
                    {/* {recentCommentsMarkup} */}
                    {/* <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment />
                    <Comment /> */}
                </div>
            </div>
        )
    }
}

export default Home;