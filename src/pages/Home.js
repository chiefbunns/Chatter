import React, { Component } from 'react';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
//import axios from 'axios';

class Home extends Component {
    render() {
        return (
            <div className="comments-body">
                <AddComment />
                <div className="comment-section">
                    <Comment />
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