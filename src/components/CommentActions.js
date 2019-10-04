import React, { useState } from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    RedditShareButton
} from 'react-share';
import {
    FacebookIcon,
    TwitterIcon,
    RedditIcon
} from 'react-share';
import ReplyComment from '../components/ReplyComment';
import '../css/CommentActions.css';
import closeIcon from '../svgs/close-icon.svg';
import share from '../svgs/share.svg';
import addIcon from '../svgs/add-icon.svg';

var tablink;
window.chrome.tabs.getSelected(null, function (tab) {
    tablink = tab.url;
});


const CommentActions = () => {

    const [shareButtons, setShareButtons] = useState(false);
    const [reply, setReply] = useState(false);

    return (
        shareButtons === false ?
            <div className="comment-task-bar-container">
                {reply === false ?
                    <div className="comment-task-bar">
                        <button className="reply-btn" onClick={() => setReply(!reply)}><div className="text-subtle">Reply</div></button>
                        <button className="view-replies-btn"><div className="text-subtle">View Replies (0)</div></button>
                        <button className="open-share-btns" onClick={() => setShareButtons(!shareButtons)} ><img className="share-icon icon-scale" src={share} alt="Share" /></button>
                    </div> : <div className="reply-task-bar-container">
                        <ReplyComment />
                        <div className="add-reply-options">
                            <button className="close-btn" onClick={() => setReply(!reply)}>
                                <img src={closeIcon} alt="Close Icon" />
                            </button>
                            <button className="post-reply-btn">
                                <img src={addIcon} alt="Add Icon" />
                            </button>
                        </div>
                    </div>}
            </div> :
            <div className="comment-task-bar">
                <FacebookShareButton url={tablink} ><FacebookIcon className="share-icon" size={20} round={true} /></FacebookShareButton>
                <TwitterShareButton url={tablink}><TwitterIcon className="share-icon" size={20} round={true} /></TwitterShareButton>
                <RedditShareButton url={tablink} ><RedditIcon className="share-icon" size={20} round={true} /></RedditShareButton>
                <button className="close-btn" onClick={() => setShareButtons(!shareButtons)}>
                    <img src={closeIcon} alt="Close Icon" />
                </button>
            </div>
    )
}

export default CommentActions;