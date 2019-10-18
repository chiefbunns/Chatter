import React from 'react';
import Textarea from 'react-textarea-autosize';
//import axios from 'axios';
import '../css/ReplyComment.css';


const ReplyComment = () => {

    return (
        <div className="reply-comment">
            <Textarea className="reply-textarea" placeholder="Type Comment Here"></Textarea>
        </div>
    )
}

export default ReplyComment;