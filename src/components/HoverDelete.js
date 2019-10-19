//NOT NEEDED ANYMORE

import React, { Component } from 'react';
import '../css/Comment.css';
import Comment from './Comment';
import DeleteComment from './DeleteComment';


class HoverDelete extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  render() {
    return (
      <div>
        <div
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover}
        >
          <Comment/>
        </div>
        {
          this.state.isHovering &&
          <div>
            <DeleteComment/>
          </div>
        }
      </div>
    );
  }
}

export default HoverDelete;