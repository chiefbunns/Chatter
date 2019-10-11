import React, { Component } from 'react';
import '../css/Home.css';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
import axios from 'axios';

class Home extends Component {
    state = {
        comments: null,
        luke: null
    }

    refresh = () => {
        axios
            .get('http://localhost:8080/comments')
            .then((res) => {
                this.setState({
                    comments: res.data
                })
                console.log("refresh", res);
            })
            .catch((err) => console.log("line 22", err));
    }

    componentDidMount() {
        console.log("home mounted")
        this.refresh()
    }
    render() {
        if (!this.state.comments) return <div>{'Loading...'}</div>
        const comments = this.state.comments.map((comment) => {
            return (<Comment
                id={comment.comment_id}
                body={comment.body}
                createdAt={comment.created_at}
                userHandle={comment.user_handle}
            />
            )
        }
        )
        return (
            <div className="comments-body" onClick={() => this.refresh()}>
                <AddComment />
                <div className="comment-section">
                    {comments}
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