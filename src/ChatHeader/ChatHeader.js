import React, { Component } from 'react';
import './ChatHeader.css';

class ChatHeader extends Component {
  render() {
    return (
      <div className="ChatHeader">
		<div className="sidebar-toggle"></div>
        <h2 className="channel-name">Channel Name</h2>
      </div>
    );
  }
}

export default ChatHeader;