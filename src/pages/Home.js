import React, { Component } from 'react';
import '../css/Home.css';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
import axios from 'axios';
import { getPageUrl } from '../url';
class Home extends Component {
    state = {
        comments: null,
        luke: null
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

    componentDidMount() {
        this.refresh()
    }
    render() {
        if (!this.state.comments) return <div>{'Loading...'}</div>
        const comments = this.state.comments.map((comment, i) => {
            return (<Comment
                key={i}
                id={comment.comment_id}
                body={comment.body}
                created_at={comment.created_at}
                user_handle={comment.user_handle}
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