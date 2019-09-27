import React, { Component } from 'react';
import '../App.css';
import Comment from '../components/Comment';
import AddComment from '../components/AddComment';
//import axios from 'axios';

class Home extends Component {
    render() {
        return (
            <div className="comment-section">
            <AddComment />
            <Comment />
            <Comment />
            <Comment />
            </div>
        )
    }
}

  export default Home;